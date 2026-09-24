const sections = document.querySelectorAll(".scroll-section");

function showSections() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("show");
        } else {
            section.classList.remove("show");
        }
    });
}

window.addEventListener("scroll", showSections);

showSections();

function toggleDetails(button) {
    const details = button.nextElementSibling;

    if (details.classList.contains("show")) {
        details.classList.remove("show");
        button.textContent = "Detaylar";
    } else {
        details.classList.add("show");
        button.textContent = "Detayları Gizle";
    }
}

const themeSwitch = document.getElementById("theme-switch");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-theme");

    if (themeSwitch) {
        themeSwitch.checked = true;
    }
}

if (themeSwitch) {
    themeSwitch.addEventListener("change", function () {
        if (this.checked) {
            document.body.classList.add("light-theme");
            localStorage.setItem("theme", "light");
        } else {
            document.body.classList.remove("light-theme");
            localStorage.setItem("theme", "dark");
        }
    });
}