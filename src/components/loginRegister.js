const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const registerForm = document.querySelector('.sign-up form');
const loginForm = document.querySelector('.sign-in form');
const userInfo = document.createElement('p');
document.body.appendChild(userInfo);
const ggLoginBtn = document.querySelector('a.gg-btn');
const googleLoginBtn = document.querySelector('a.google-btn');

// Hàm kiểm tra đầu vào
function validateEmail(email) {
    return email.includes('@');
}

function validatePassword(password) {
    return password.length >= 6 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password);
}

// Xử lý đăng ký
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = registerForm.querySelector('input[type=email]').value;
    const password = registerForm.querySelector('input[type=password]').value;

    if (!validateEmail(email)) {
        alert('Email không hợp lệ!');
        return;
    }
    if (!validatePassword(password)) {
        alert('Mật khẩu phải có ít nhất 6 ký tự, 1 chữ hoa, 1 chữ thường, 1 số.');
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert('Đăng ký thành công!');
        })
        .catch(error => {
            alert(error.message);
        });
});

// Xử lý đăng nhập
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm.querySelector('input[type=email]').value;
    const password = loginForm.querySelector('input[type=password]').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            localStorage.setItem("userEmail", user.email); // Lưu email vào localStorage

            if (user.email === "admin@example.com") {
                window.location.href = "/admin/dashboard.html";
            } else {
                window.location.href = "/public/index.html";
            }
        })
        .catch(error => {
            alert(error.message);
        });
});

// Đăng nhập với Google
if (googleLoginBtn) {
    googleLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .then(result => {
                alert('Đăng nhập thành công với Google!');
                window.location.href("/public/index.html")
            })
            .catch(error => {
                alert(error.message);
            });
    });
}

if (ggLoginBtn) {
    ggLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .then(result => {
                alert('Đăng ký thành công với Google!');
            })
            .catch(error => {
                alert(error.message);
            });
    });
}

