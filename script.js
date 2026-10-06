/* =========================================================
   DAPP CONSULTANTS
   Main JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  /*
   * Mobile navigation
   */

  if (menuToggle && nav) {

    menuToggle.addEventListener("click", function () {

      const isOpen = nav.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuToggle.setAttribute(
        "aria-label",
        isOpen
          ? "Close navigation"
          : "Open navigation"
      );

      menuToggle.textContent = isOpen ? "×" : "☰";

    });


    /*
     * Close mobile navigation after
     * selecting a navigation link.
     */

    nav.querySelectorAll("a").forEach(function (link) {

      link.addEventListener("click", function () {

        nav.classList.remove("open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.setAttribute(
          "aria-label",
          "Open navigation"
        );

        menuToggle.textContent = "☰";

      });

    });

  }


  /*
   * Close mobile navigation when
   * clicking outside the menu.
   */

  document.addEventListener("click", function (event) {

    if (!menuToggle || !nav) {
      return;
    }

    const clickedInsideMenu =
      nav.contains(event.target);

    const clickedToggle =
      menuToggle.contains(event.target);

    if (
      !clickedInsideMenu &&
      !clickedToggle &&
      nav.classList.contains("open")
    ) {

      nav.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        "Open navigation"
      );

      menuToggle.textContent = "☰";

    }

  });


  /*
   * Smooth scrolling for internal links.
   * CSS also provides smooth scrolling, but this
   * gives us consistent browser behaviour.
   */

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

      const targetId =
        link.getAttribute("href");

      if (
        !targetId ||
        targetId === "#"
      ) {
        return;
      }

      const target =
        document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });

});
