import subprocess
import threading
import time
import os

# ================= CONFIGURATION =================
# Danh sách app cho thiết bị 1 (emulator-5554)
APPS_DEVICE_1 = [
    "com.sima.part",
    "com.sima.accuplacertest",
    "com.sima.pmp"
]

# Danh sách app cho thiết bị 2 (emulator-5556)
APPS_DEVICE_2 = [
    "com.sima.phlebotomy",
    "com.sima.asvab",
    "com.sima.hesia2test"
]

DEVICE_1 = "emulator-5554"
DEVICE_2 = "emulator-5556"

# Lấy đường dẫn tuyệt đối của file maestro_guardian.py nằm cùng thư mục với script này
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
GUARDIAN_PATH = os.path.join(SCRIPT_DIR, "maestro_guardian.py")
# =================================================

def run_apps_on_device(device_id, app_list):
    """Chạy lần lượt các app trong danh sách trên một thiết bị cụ thể."""
    for app_id in app_list:
        print(f"\n[MANAGER] >>> Bắt đầu test {app_id} trên {device_id}...")
        
        # Sử dụng python3 + đường dẫn tuyệt đối đến file guardian
        cmd = f"python3 \"{GUARDIAN_PATH}\" {app_id} {device_id}"
        
        try:
            # Chạy và đợi cho đến khi hoàn thành
            subprocess.run(cmd, shell=True, check=True)
        except subprocess.CalledProcessError:
            print(f"[MANAGER] ❌ Lỗi khi chạy {app_id} trên {device_id}. Tiếp tục app tiếp theo...")
        
        print(f"[MANAGER] <<< Kết thúc test {app_id} trên {device_id}.")
        time.sleep(3)

if __name__ == "__main__":
    print("🚀 Khởi chạy hệ thống test song song trên 2 thiết bị...")
    print(f"📂 Guardian path: {GUARDIAN_PATH}")
    print(f"📱 Device 1 ({DEVICE_1}): {len(APPS_DEVICE_1)} apps")
    print(f"📱 Device 2 ({DEVICE_2}): {len(APPS_DEVICE_2)} apps")

    # Tạo 2 luồng (thread) để chạy song song trên 2 thiết bị
    thread1 = threading.Thread(target=run_apps_on_device, args=(DEVICE_1, APPS_DEVICE_1))
    thread2 = threading.Thread(target=run_apps_on_device, args=(DEVICE_2, APPS_DEVICE_2))

    thread1.start()
    thread2.start()

    thread1.join()
    thread2.join()

    print("\n✅ TẤT CẢ CÁC THIẾT BỊ ĐÃ HOÀN THÀNH TEST LIST.")
