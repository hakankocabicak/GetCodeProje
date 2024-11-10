// Giriş kontrolü yapılacak kullanıcı adı ve şifre
const correctUsername = "admin";
const correctPassword = "12345";

// Login formu gönderildiğinde kontrol işlemi
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Formun sayfayı yenilemesini engelle

    // Kullanıcı adı ve şifreyi al
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Hata mesajını sıfırla
    document.getElementById("error").textContent = "";

    // Kullanıcı adı ve şifreyi kontrol et
    if (username === correctUsername && password === correctPassword) {
        alert("Başarıyla giriş yapıldı!");
        // Başarılı giriş sonrası index.html sayfasına yönlendirme
        window.location.href = "index.html";  // index.html sayfasına yönlendirme
    } else {
        document.getElementById("error").textContent = "Hatalı kullanıcı adı veya şifre!";
    }
});
