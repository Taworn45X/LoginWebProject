document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".login-form");
    const errorMessage = document.getElementById("error-message");
    const errorMessage2 = document.getElementById("error-message2");

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
      }

    if (loginForm && errorMessage) {
        errorMessage.classList.remove("active"); // เริ่มต้นเคลียร์คลาส "active" ของ errorMessage
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username === "123" && password === "123") {
                errorMessage.textContent = "Login!";
                errorMessage.style.backgroundColor = "rgb(100, 247, 107)";
                errorMessage.classList.add("active");
                delay(2000).then(() => window.location.href = "secondpage.html");
            } else {
                errorMessage.textContent = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
                errorMessage.classList.add("active"); // เพิ่มคลาส "active" เพื่อแสดง errorMessage
                delay(2000).then(() => {
                    errorMessage.classList.remove("active");
                    errorMessage.style.backgroundColor = ""; // เอาสีพื้นหลังกลับมาเป็นค่าปกติ
                });
            }
        });
    }
});
