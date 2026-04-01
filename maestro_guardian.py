import subprocess
import os
import requests
import json
import re
import glob
from datetime import datetime

# ================= CONFIGURATION =================
# Điền thông tin Telegram của bạn tại đây
TELEGRAM_BOT_TOKEN = "8738583950:AAEr6OpWBjgSNBsiCM0d4dg1cs4TJ73uWxI"
TELEGRAM_CHAT_ID = "8711497985"
# =================================================

def classify_error(output):
    """
    Phân loại lỗi dựa trên log output của Maestro.
    """
    if "Wait for" in output and "timed out" in output:
        return "⏳ TIMEOUT ERROR", "Hệ thống hoặc ứng dụng phản hồi chậm hơn thời gian chờ."
    elif "Assertion failed" in output or "Assertion error" in output:
        return "🐞 BUG DETECTED", "Điều kiện kiểm tra không khớp (Assertion). Đây có thể là bug."
    elif "Element not found" in output or "Could not find" in output:
        return "🔍 UI/LOCATOR CHANGED", "Không tìm thấy phần tử UI. Có thể giao diện đã thay đổi hoặc lỗi script."
    else:
        return "⚠️ UNKNOWN FAILURE", "Lỗi không xác định hoặc lỗi hệ thống khác."

def send_telegram_msg(message, image_path=None):
    """
    Gửi tin nhắn và ảnh đến Telegram.
    """
    if TELEGRAM_BOT_TOKEN == "DIEN_TOKEN":
        print("BỎ QUA GỬI TELEGRAM: Vui lòng cấu hình TELEGRAM_BOT_TOKEN trong file maestro_guardian.py")
        return

    url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
    payload = {
        "chat_id": TELEGRAM_CHAT_ID,
        "text": message,
        "parse_mode": "Markdown"
    }
    
    try:
        # Gửi tin nhắn text trước
        requests.post(url, json=payload)
        
        # Gửi ảnh nếu có
        if image_path and os.path.exists(image_path):
            photo_url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendPhoto"
            with open(image_path, 'rb') as photo:
                requests.post(photo_url, data={'chat_id': TELEGRAM_CHAT_ID}, files={'photo': photo})
    except Exception as e:
        print(f"Lỗi khi gửi Telegram: {e}")

def run_maestro():
    print("🚀 Đang khởi chạy Maestro Guardian...")
    
    # Lệnh chạy Maestro (mặc định chạy main.yaml)
    # Thêm --format junit để tạo báo cáo nếu cần mở rộng sau này
    command = "maestro test /Users/hongtuan/Documents/Auto/autoTestApp/main.yaml"
    
    process = subprocess.Popen(
        command,
        shell=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True
    )

    full_output = []
    current_test_case = "main.yaml"

    while True:
        line = process.stdout.readline()
        if not line:
            break
        print(line, end="")
        full_output.append(line)
        
        # Cố gắng bắt tên test case đang chạy từ log
        if ".yaml" in line and "/" in line:
            current_test_case = line.strip()

    process.wait()
    output_str = "".join(full_output)

    if process.returncode != 0:
        print("\n❌ Phát hiện lỗi! Đang chuẩn bị báo cáo...")
        
        category, explanation = classify_error(output_str)
        
        # Tìm screenshot mới nhất trong thư mục .maestro/screenshots
        screenshots = glob.glob(".maestro/screenshots/*.png")
        latest_screenshot = max(screenshots, key=os.path.getctime) if screenshots else None

        # Rút gọn log lỗi (lấy 10 dòng cuối của lỗi)
        error_lines = full_output[-15:]
        summary_log = "".join(error_lines)

        message = (
            f"🔴 *MAESTRO EXECUTION FAILED*\n\n"
            f"📅 *Time:* {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n"
            f"📂 *Test Case:* `{current_test_case}`\n"
            f"🛑 *Category:* {category}\n"
            f"💡 *Detail:* {explanation}\n\n"
            f"📝 *Summary Log:*\n```\n{summary_log}\n```"
        )
        
        send_telegram_msg(message, latest_screenshot)
        print("✅ Đã gửi báo cáo lỗi qua Telegram.")
    else:
        print("\n🎉 Tất cả test cases đã vượt qua!")
        send_telegram_msg("✅ *MAESTRO SUCCESS*: Tất cả bài test đã hoàn thành tốt đẹp.")

if __name__ == "__main__":
    run_maestro()
