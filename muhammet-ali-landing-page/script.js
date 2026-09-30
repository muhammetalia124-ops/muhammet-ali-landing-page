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
    const card = button.closest(".project-card");
    const details = card ? card.querySelector(".project-details") : button.nextElementSibling;

    if (!details) return;

    if (details.classList.contains("show")) {
        const mevcutScroll = window.scrollY;
        
        document.body.style.paddingBottom = "100vh"; 

        details.classList.remove("show");
        button.textContent = "Detaylar";

        window.scrollTo(0, mevcutScroll);

        const temizle = () => {
            document.body.style.paddingBottom = "";
            window.removeEventListener("scroll", temizle);
            window.removeEventListener("mousemove", temizle);
        };
        setTimeout(() => {
            window.addEventListener("scroll", temizle);
            window.addEventListener("mousemove", temizle);
        }, 50);

    } else {
        details.classList.add("show");
        button.textContent = "Detayları Gizle";
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