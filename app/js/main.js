// Эффект печатной машинки для должности
const text = "DevOps Intern / Junior DevOps Engineer";
const typedTextSpan = document.querySelector(".typed-text");
let charIndex = 0;

function type() {
    if (charIndex < text.length) {
        typedTextSpan.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 500);
});

// Плавное появление секций при прокрутке
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, observerOptions);

document.querySelectorAll(".reveal").forEach(section => {
    observer.observe(section);
});
