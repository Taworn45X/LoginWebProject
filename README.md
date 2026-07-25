# LoginWebProject — Full-Stack Auth Web UI & Express Backend

ระบบยืนยันตัวตน (Authentication System) และแดชบอร์ดผู้ใช้แบบ Full-Stack พัฒนาด้วย Node.js, Express.js Backend API ควบคู่กับ HTML5, Clean Vanilla CSS Design System และ Client-side JavaScript

---

## จุดเด่นของโปรเจกต์ (Features)
- **Express.js RESTful API Backend:** บริการ API ยืนยันตัวตน (`/api/auth/login`, `/api/auth/register`) พร้อมโครงสร้างแบบ Modular (Routes & Middleware)
- **Modern Responsive Web UI:** หน้าจอปรับตามขนาดอุปกรณ์ (Desktop, Tablet, Mobile) ด้วย Clean CSS System
- **Dark / Light Theme Switcher:** รองรับการสลับธีมสีพร้อมบันทึกค่าลง `localStorage`
- **Client-side Form Validation:** ตรวจสอบความถูกต้องของข้อมูลก่อนส่งไปยัง API

---

## โครงสร้างโปรเจกต์ (Project Structure)
```text
LoginWebProject/
├── server.js        # Entry point สำหรับ Express.js Node.js Server
├── routes/
│   └── auth.js      # REST API Routes สำหรับ Login และ Register
├── index.html       # โครงสร้างหน้าเว็บ SPA (Single Page Application)
├── css/
│   └── styles.css   # Modern Clean CSS System & Theme Tokens
├── js/
│   └── app.js       # Client-side Logic & API Call Handling
└── package.json     # Node.js Dependencies & Scripts
```

---

## วิธีการติดตั้งและรันใช้งาน

1. **ติดตั้ง Dependencies:**
   ```bash
   npm install
   ```

2. **รันเซิร์ฟเวอร์:**
   ```bash
   npm start
   ```
   หรือรันโหมดพัฒนาด้วย Nodemon:
   ```bash
   npm run dev
   ```

3. **เข้าใช้งาน:**
   เปิดเบราว์เซอร์ไปที่ `http://localhost:3000`
