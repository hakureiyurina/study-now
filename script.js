const APP_VERSION = "1.0.1"; // 0.01刻みでここを更新
let currentRotation = 0;

window.onload = () => {
    document.getElementById('version-display').innerText = "v" + APP_VERSION;
};

function checkLogin() {
    const sc = document.getElementById('schoolCode').value;
    const uid = document.getElementById('userId').value;
    const pw = document.getElementById('password').value;
    const key = "hakureiyurina@";

    if ((sc === key && uid === key && pw === key) || (sc === "0407" && /^s\d{6}$/.test(uid) && pw.length === 4)) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('app-content').style.display = 'block';
    } else {
        document.getElementById('error-msg').innerText = "認証失敗";
    }
}

function spinWheel() {
    const wheel = document.getElementById('wheel');
    currentRotation += 1080 + Math.floor(Math.random() * 360);
    wheel.style.transform = `rotate(${currentRotation}deg)`;
}

function showSection(id) {
    document.querySelectorAll('.content').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}
