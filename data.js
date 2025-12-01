// data.js

import { auth } from "./conf.js";
import { 
    sendPasswordResetEmail,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
 

// ========== REGISTER ==========
const registerForm = document.getElementById("register-form");

if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("user").value.trim();
        const pass1 = document.getElementById("password1").value;
        const pass2 = document.getElementById("password2").value;

        if (!email.includes("@")) {
            alert("Vui lòng nhập đúng định dạng email!");
            return;
        }

        if (pass1 !== pass2) {
            alert("Mật khẩu không trùng nhau!");
            return;
        }

        createUserWithEmailAndPassword(auth, email, pass1)
            .then(() => {
                alert("Đăng ký thành công!");
                window.location.href = "login.html";
            })
            .catch(err => {
                alert("Lỗi tạo tài khoản: " + err.code);
                console.log(err);
            });
    });
}



// ========== LOGIN ==========
const loginForm = document.getElementById("login-form");

if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("user").value;
        const password = document.getElementById("password1").value;

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("Đăng nhập thành công!");
                window.location.href = "#";
            })
            .catch(err => {
                alert("Sai email hoặc mật khẩu!");
                console.log(err);
            });
    });
}

//=========== Reset Password =========
const resetForm = document.getElementById("reset-form");

if (resetForm) {
    resetForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("user").value.trim();

        if (!email) {
            alert("Vui lòng nhập email!");
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Đã gửi email đặt lại mật khẩu!");
                window.location.href = "Login.html";
            })
            .catch(err => {
                alert("Gửi email thất bại: " + err.message);
                console.log(err);
            });
    });
}



        

// ========== GOOGLE LOGIN ==========
const googleBtn = document.getElementById("googleBtn");

if (googleBtn) {
    const providerGoogle = new GoogleAuthProvider();

    googleBtn.addEventListener("click", () => {
        signInWithPopup(auth, providerGoogle)
            .then((result) => {
                console.log("Google Login:", result.user);
                alert("Đăng nhập Google thành công!");
                window.location.href ="#"
            })
            .catch((error) => {
                console.error(error);
            });
    });
}
