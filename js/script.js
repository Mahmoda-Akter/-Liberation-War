// ================= Mobile Menu Toggle =================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
}

// ================= Contact Form Validation =================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name === "") {
            alert("Please enter your full name.");
            return;
        }

        if (name.length < 3) {
            alert("Name must be at least 3 characters.");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (subject === "") {
            alert("Please enter a subject.");
            return;
        }

        if (message.length < 20) {
            alert("Message must be at least 20 characters.");
            return;
        }

        alert("Your message has been submitted successfully!");

        contactForm.reset();

    });
    const nameError = document.getElementById("nameError");

    if (name === "") {

        nameError.textContent = "Full name is required.";
        nameError.classList.remove("hidden");
        return;

    }

    nameError.classList.add("hidden");

}