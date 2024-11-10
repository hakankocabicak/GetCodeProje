
// Kayıt formu gönderildiğinde işlem
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Formun sayfayı yenilemesini engelle

    // Kullanıcı adı, e-posta ve şifreyi al
    const username = document.getElementById("username_signup").value;
    const email = document.getElementById("email_signup").value;
    const password = document.getElementById("password_signup").value;

    // Kayıt işlemi başarılıysa
    if (username && email && password) {
        // Kayıt işlemi tamamlandı mesajı
        alert("Kaydınız başarıyla tamamlanmıştır! Giriş yapmak üzere login sayfasına yönlendiriliyorsunuz.");

        // Kayıt işlemi sonrası login sayfasına yönlendir
        window.location.href = "login.html"; // login sayfasına yönlendirme
    } else {
        alert("Lütfen tüm alanları doldurduğunuzdan emin olun!");
    }
});
