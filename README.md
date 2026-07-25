# LoginWebProject — Modern Responsive Auth Web UI

หน้าเว็บระบบยืนยันตัวตน (Authentication UI) และแดชบอร์ดผู้ใช้ พัฒนาด้วย HTML5, Vanilla CSS Design System และ JavaScript ปรับแต่งรูปโฉมด้วย Glassmorphic Dark / Light Mode

---

## จุดเด่นของโปรเจกต์ (Features)
- **Modern Responsive Design:** รองรับการแสดงผลทุกขนาดหน้าจอ (Desktop, Tablet, Mobile)
- **Dark / Light Theme Toggle:** รองรับการสลับธีมสีพร้อมบันทึกค่าลง `localStorage`
- **Form Client-side Validation:** ระบบตรวจสอบความถูกต้องของข้อมูล (Email, Password validation) ด้วย Vanilla JS
- **Single Page Application (SPA) State Switching:** สลับหน้าจอระหว่าง Login, Register และ User Dashboard ได้ลื่นไหล

---

## โครงสร้างโปรเจกต์
```text
LoginWebProject/
├── index.html       # โครงสร้างหน้าเว็บ Semantic HTML5
├── css/
│   └── styles.css   # Clean CSS Architecture & Theme Tokens
└── js/
    └── app.js       # Client-side Logic, Theme Switcher & Form Validation
```

---

## วิธีการทดสอบรัน

เปิดไฟล์ `index.html` บนเว็บเบราว์เซอร์ใดก็ได้ (Chrome, Edge, Safari, Firefox) หรือรันผ่าน Live Server Extension ใน VS Code
