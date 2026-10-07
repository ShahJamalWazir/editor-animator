/* =========================================
   CUSTOM CURSOR
========================================= */

const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

const cursorFollower = document.createElement("div");
cursorFollower.classList.add("cursor-follower");
document.body.appendChild(cursorFollower);

let mouseX = 0;
let mouseY = 0;

let followerX = 0;
let followerY = 0;

document.addEventListener("mousemove", (event) => {

    mouseX = event.clientX;
    mouseY = event.clientY;

    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;

});


function animateCursor() {

    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;

    cursorFollower.style.left = `${followerX}px`;
    cursorFollower.style.top = `${followerY}px`;

    requestAnimationFrame(animateCursor);
}

animateCursor();



/* =========================================
   CURSOR HOVER EFFECT
========================================= */

const interactiveElements = document.querySelectorAll(
    "a, button, .project, .video-placeholder, .service"
);

interactiveElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {
        document.body.classList.add("cursor-hover");
    });

    element.addEventListener("mouseleave", () => {
        document.body.classList.remove("cursor-hover");
    });

});



/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .project, .service, .about-content, .contact"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});



/* =========================================
   MAGNETIC BUTTON EFFECT
========================================= */

const magneticButtons = document.querySelectorAll(
    ".primary-button, .secondary-button, .nav-button"
);

magneticButtons.forEach((button) => {

    button.addEventListener("mousemove", (event) => {

        const rect = button.getBoundingClientRect();

        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        button.style.transform =
            `translate(${x * 0.15}px, ${y * 0.15}px)`;

    });


    button.addEventListener("mouseleave", () => {

        button.style.transform = "translate(0, 0)";

    });

});



/* =========================================
   PARALLAX HERO ORB
========================================= */

const heroOrb = document.querySelector(".hero-orb");

document.addEventListener("mousemove", (event) => {

    if (!heroOrb) return;

    const x =
        (event.clientX / window.innerWidth - 0.5) * 30;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 30;

    heroOrb.style.transform =
        `translate(${x}px, ${y}px)`;

});



/* =========================================
   NAVIGATION SCROLL EFFECT
========================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



/* =========================================
   PROJECT HOVER MOVEMENT
========================================= */

const projects = document.querySelectorAll(".project");

projects.forEach((project) => {

    project.addEventListener("mousemove", (event) => {

        const image =
            project.querySelector(".project-image");

        const rect =
            project.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) / rect.width - 0.5;

        const y =
            (event.clientY - rect.top) / rect.height - 0.5;

        image.style.transform =
            `perspective(800px)
             rotateY(${x * 4}deg)
             rotateX(${y * -4}deg)
             scale(0.98)`;

    });


    project.addEventListener("mouseleave", () => {

        const image =
            project.querySelector(".project-image");

        image.style.transform =
            "perspective(800px) rotateY(0) rotateX(0) scale(1)";

    });

});



/* =========================================
   CURRENT YEAR
========================================= */

const year = new Date().getFullYear();

const footer =
    document.querySelector("footer div");

if (footer) {

    footer.textContent =
        `© ${year} Shah Jamal`;

}
