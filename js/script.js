const greeting = document.getElementById("greeting");
const hour = new Date().getHours();
if (greeting) {
  greeting.textContent = hour < 12 ? "Selamat pagi, saya" :
    hour < 15 ? "Selamat siang, saya" :
    hour < 17 ? "Selamat sore, saya" : "Selamat malam, saya";
}

document.getElementById("currentYear").textContent = new Date().getFullYear();

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  const isLight = document.body.classList.contains("light-theme");
  themeIcon.className = isLight ? "bi bi-moon-stars-fill" : "bi bi-sun-fill";
  themeToggle.setAttribute("aria-label", isLight ? "Aktifkan tema gelap" : "Aktifkan tema terang");
});

const messageField = document.getElementById("visitorMessage");
const charCount = document.getElementById("charCount");
messageField.addEventListener("input", () => {
  charCount.textContent = `${messageField.value.length}/300`;
});

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("visitorName").value.trim();
  const email = document.getElementById("visitorEmail").value.trim();
  const message = messageField.value.trim();
  const feedback = document.getElementById("formFeedback");

  if (!name || !email || !message) {
    feedback.textContent = "Lengkapi semua kolom terlebih dahulu.";
    feedback.className = "small mt-3 text-warning";
    return;
  }

  const recipient = "emailkamu@example.com";
  const subject = encodeURIComponent(`Pesan portofolio dari ${name}`);
  const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`);
  feedback.textContent = "Aplikasi email akan dibuka untuk mengirim pesan.";
  feedback.className = "small mt-3 text-success";
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});
