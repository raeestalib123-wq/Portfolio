document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       PAGE LOAD ANIMATION
    ========================================= */

    document.body.classList.add("page-loaded");


    /* =========================================
       SCROLL REVEAL
    ========================================= */

    const revealElements = document.querySelectorAll(`

    /* HOME */
    .home-about-title,
    .home-about-text,
    .home-section-header,
    .home-service-item,
    .featured-card,
    .expertise-grid,

    /* ABOUT */
    .about-page-heading,
    .about-main-photo,
    .about-main-content,
    .about-section-top,
    .about-what-card,
    .philosophy-left,
    .philosophy-item,

    /* SKILLS */
    .skills-hero-grid,
    .skills-section-head,
    .skill-category,
    .technology-heading,
    .technology-card,
    .capabilities-title,
    .capability-item,

    /* PROJECTS */
    .projects-hero-grid,
    .project-top,
    .project-title,
    .project-visual,
    .project-bottom,
    .projects-next,

    /* SERVICES */
    .services-page-label,
    .services-hero-grid,
    .services-heading,
    .service-big-card,
    .process-heading,
    .process-card,
    .services-stack > div:first-child,
    .services-stack-list span,
    .services-final-cta > span,
    .services-final-cta > p,
    .services-final-cta > a,

    /* CONTACT */
    .contact-number,
    .contact-hero-grid,
    .contact-small-title,
    .contact-left h2,
    .contact-left > p,
    .contact-info-card,
    .contact-mini-info,
    .contact-form-wrapper

`);

    revealElements.forEach((element, index) => {

        element.classList.add("reveal");

        // Slight delay for cards
        element.style.setProperty(
            "--delay",
            `${(index % 4) * 0.08}s`
        );

    });


    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal-active");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    });


    revealElements.forEach(element => {
        observer.observe(element);
    });



    /* =========================================
       NAVBAR SCROLL EFFECT
    ========================================= */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.classList.add("header-scrolled");

        } else {

            header.classList.remove("header-scrolled");

        }

    });



    /* =========================================
       HERO MOUSE MOVEMENT
    ========================================= */

    const heroPhoto = document.querySelector(".hero-photo");

    if (heroPhoto) {

        heroPhoto.addEventListener("mousemove", (event) => {

            const rect = heroPhoto.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                (y - centerY) / 35;

            const rotateY =
                (centerX - x) / 35;

            const frame =
                heroPhoto.querySelector(".photo-frame");

            if (frame) {

                frame.style.transform =
                    `perspective(1000px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)`;

            }

        });


        heroPhoto.addEventListener("mouseleave", () => {

            const frame =
                heroPhoto.querySelector(".photo-frame");

            if (frame) {

                frame.style.transform =
                    "perspective(1000px) rotateX(0) rotateY(0)";

            }

        });

    }



    /* =========================================
       BUTTON ARROW MOVEMENT
    ========================================= */

    const buttons =
        document.querySelectorAll(
            ".btn-primary, .cta-button"
        );

    buttons.forEach(button => {

        button.addEventListener("mouseenter", () => {

            const arrow =
                button.querySelector("span");

            if (arrow) {
                arrow.style.transform =
                    "translate(4px, -4px)";
            }

        });


        button.addEventListener("mouseleave", () => {

            const arrow =
                button.querySelector("span");

            if (arrow) {
                arrow.style.transform =
                    "translate(0, 0)";
            }

        });

    });

});

/* ========================================
   MOBILE HAMBURGER MENU
======================================== */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.querySelector(".navbar");

    if (!menuToggle || !navbar) return;

    menuToggle.addEventListener("click", function () {

        menuToggle.classList.toggle("active");
        navbar.classList.toggle("active");
        document.body.classList.toggle("menu-open");

    });

    // Link click hone par menu close
    navbar.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            menuToggle.classList.remove("active");
            navbar.classList.remove("active");
            document.body.classList.remove("menu-open");

        });

    });

    // Desktop par wapas jane par reset
    window.addEventListener("resize", function () {

        if (window.innerWidth > 1000) {

            menuToggle.classList.remove("active");
            navbar.classList.remove("active");
            document.body.classList.remove("menu-open");

        }

    });

});