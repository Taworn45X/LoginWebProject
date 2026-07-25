document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle
  const btnThemeToggle = document.getElementById('btnThemeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const html = document.documentElement;

  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  themeIcon.textContent = savedTheme === 'dark' ? '🌙' : '☀️';

  btnThemeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeIcon.textContent = newTheme === 'dark' ? '🌙' : '☀️';
  });

  // Views Switching
  const viewLogin = document.getElementById('viewLogin');
  const viewRegister = document.getElementById('viewRegister');
  const viewDashboard = document.getElementById('viewDashboard');

  const linkGoRegister = document.getElementById('linkGoRegister');
  const linkGoLogin = document.getElementById('linkGoLogin');
  const btnLogout = document.getElementById('btnLogout');

  function switchView(targetView) {
    [viewLogin, viewRegister, viewDashboard].forEach(v => v.classList.remove('active'));
    setTimeout(() => {
      targetView.classList.add('active');
    }, 150);
  }

  linkGoRegister.addEventListener('click', (e) => {
    e.preventDefault();
    switchView(viewRegister);
  });

  linkGoLogin.addEventListener('click', (e) => {
    e.preventDefault();
    switchView(viewLogin);
  });

  // Login Validation & Submit
  const formLogin = document.getElementById('formLogin');
  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    let valid = true;
    if (!email || !email.includes('@')) {
      document.getElementById('errLoginEmail').textContent = 'กรุณากรอกอีเมลให้ถูกต้อง';
      valid = false;
    } else {
      document.getElementById('errLoginEmail').textContent = '';
    }

    if (!password || password.length < 6) {
      document.getElementById('errLoginPassword').textContent = 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร';
      valid = false;
    } else {
      document.getElementById('errLoginPassword').textContent = '';
    }

    if (valid) {
      document.getElementById('dashWelcome').textContent = `ยินดีต้อนรับ, ${email.split('@')[0]}!`;
      switchView(viewDashboard);
    }
  });

  // Register Validation & Submit
  const formRegister = document.getElementById('formRegister');
  formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value.trim();

    let valid = true;
    if (!name) {
      document.getElementById('errRegName').textContent = 'กรุณากรอกชื่อ-นามสกุล';
      valid = false;
    } else {
      document.getElementById('errRegName').textContent = '';
    }

    if (!email || !email.includes('@')) {
      document.getElementById('errRegEmail').textContent = 'กรุณากรอกอีเมลให้ถูกต้อง';
      valid = false;
    } else {
      document.getElementById('errRegEmail').textContent = '';
    }

    if (!password || password.length < 8) {
      document.getElementById('errRegPassword').textContent = 'รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร';
      valid = false;
    } else {
      document.getElementById('errRegPassword').textContent = '';
    }

    if (valid) {
      document.getElementById('dashWelcome').textContent = `ยินดีต้อนรับ, ${name}!`;
      switchView(viewDashboard);
    }
  });

  btnLogout.addEventListener('click', () => {
    formLogin.reset();
    formRegister.reset();
    switchView(viewLogin);
  });
});
