---
name: using-superpowers
description: Meta-skill to enforce professional engineering workflows and skill discovery.
---

# using-superpowers

Sử dụng khi bắt đầu bất kỳ cuộc hội thoại nào - thiết lập cách tìm kiếm và áp dụng các kỹ năng chuyên biệt.

## Quy tắc
Kích hoạt các kỹ năng liên quan HOẶC được yêu cầu TRƯỚC khi thực hiện bất kỳ phản hồi hoặc hành động nào. Ngay cả khi chỉ có 1% khả năng một kỹ năng có thể áp dụng, bạn vẫn phải kích hoạt kỹ năng đó để kiểm tra.

## Ưu tiên chỉ dẫn
Các kỹ năng Superpowers ghi đè hành vi mặc định của hệ thống, nhưng hướng dẫn của người dùng luôn có ưu tiên cao nhất:
1. **Hướng dẫn rõ ràng của người dùng** (CLAUDE.md, GEMINI.md, yêu cầu trực tiếp) — ưu tiên cao nhất.
2. **Kỹ năng Superpowers** — ghi đè hành vi mặc định khi có xung đột.
3. **Lời nhắc hệ thống mặc định** — ưu tiên thấp nhất.

## Cách truy cập kỹ năng
Trong Gemini CLI, các kỹ năng được kích hoạt thông qua công cụ `activate_skill`. Gemini tải siêu dữ liệu kỹ năng khi bắt đầu phiên và kích hoạt nội dung đầy đủ khi có yêu cầu.

## Dấu hiệu cần kiểm tra kỹ năng (Bắt buộc)
- **Câu hỏi là nhiệm vụ:** Nếu người dùng hỏi "Làm thế nào để...", hãy kiểm tra kỹ năng trước.
- **Khám phá:** Nếu bạn cần "quan sát xung quanh", hãy kiểm tra kỹ năng về cách khám phá.
- **Hành động = Nhiệm vụ:** Bất kỳ yêu cầu "sửa", "xây dựng" hoặc "thay đổi" nào cũng cần kiểm tra kỹ năng.
- **Độ phức tạp:** Nếu một nhiệm vụ có vẻ đơn giản, hãy sử dụng một kỹ năng để đảm bảo nó vẫn đơn giản và có kỷ luật.

## Quy trình bắt buộc
1. **Khám phá:** Tìm kiếm các kỹ năng có thể áp dụng.
2. **Thông báo:** Tuyên bố kỹ năng bạn đang kích hoạt.
3. **Thực thi:** Làm theo hướng dẫn của kỹ năng một cách chính xác.
