// Fichier : js/main.js

document.addEventListener("DOMContentLoaded", () => {
  const basePath = window.location.pathname.split("/")[1] ? `/${window.location.pathname.split("/")[1]}/` : "/";

  const links = document.querySelectorAll(".site-nav a");
  links.forEach(link => {
    link.addEventListener("click", function () {
      links.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  const animatedText = document.querySelector(".animated-text");
  const launchWordAnimation = () => {
    if (!animatedText) return;
    const words = animatedText.getAttribute("data-text").trim().split(" ");
    animatedText.innerHTML = "";
    words.forEach((word, index) => {
      const span = document.createElement("span");
      span.textContent = word + "\u00A0";
      span.style.animationDelay = `${index * 0.2}s`;
      span.classList.add("color-loop");
      animatedText.appendChild(span);
    });
  };

  const showStaticText = () => {
    if (!animatedText) return;
    const originalText = animatedText.getAttribute("data-text");
    animatedText.innerHTML = "";
    const staticSpan = document.createElement("span");
    staticSpan.textContent = originalText;
    staticSpan.style.color = "white";
    staticSpan.style.display = "inline-block";
    animatedText.appendChild(staticSpan);
    animatedText.classList.remove("white-sweep");
  };

  const startLoop = () => {
    launchWordAnimation();
    setTimeout(() => { animatedText?.classList.add("white-sweep"); }, 4000);
    setTimeout(() => { showStaticText(); }, 6500);
    setTimeout(() => { animatedText.style.color = ""; startLoop(); }, 9500);
  };

  setTimeout(() => {
    if (animatedText) {
      animatedText.setAttribute("data-text", animatedText.textContent);
    }
    startLoop();
  }, 1300);

  const animatedElements = document.querySelectorAll(".intro, .services-preview, .about-content, .services-content, .testimonials, .cta-contact, .contact");
  const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(animateOnScroll, { threshold: 0.1 });
  animatedElements.forEach(el => {
    el.classList.add("hidden-anim");
    observer.observe(el);
  });

  // Lotties principaux
  lottie.loadAnimation({ container: document.getElementById("lottie-hero"), renderer: "svg", loop: true, autoplay: true, path: `${basePath}ai_based_intelligence.json` });
  lottie.loadAnimation({ container: document.getElementById("lottie-analytics"), renderer: "svg", loop: true, autoplay: true, path: `${basePath}analytics.json` });
  lottie.loadAnimation({ container: document.getElementById("lottie-strategy"), renderer: "svg", loop: true, autoplay: true, path: `${basePath}strategy.json` });
  lottie.loadAnimation({ container: document.getElementById("lottie-marketplace"), renderer: "svg", loop: true, autoplay: true, path: `${basePath}marketplace.json` });
  lottie.loadAnimation({ container: document.getElementById("lottie-ai"), renderer: "svg", loop: true, autoplay: true, path: `${basePath}ai.json` });

  // Lotties de fond
  lottie.loadAnimation({ container: document.getElementById("lottie-header-bg"), renderer: "svg", loop: true, autoplay: true, path: `${basePath}ai_based_intelligence.json` });
  lottie.loadAnimation({ container: document.getElementById("lottie-services-bg"), renderer: "svg", loop: true, autoplay: true, path: `${basePath}strategy.json` });
  lottie.loadAnimation({ container: document.getElementById("lottie-about-bg"), renderer: "svg", loop: true, autoplay: true, path: `${basePath}about-bg.json` });
  lottie.loadAnimation({ container: document.getElementById("lottie-cta-bg"), renderer: "svg", loop: true, autoplay: true, path: `${basePath}ai.json` });
  lottie.loadAnimation({ container: document.getElementById("lottie-footer-bg"), renderer: "svg", loop: true, autoplay: true, path: `${basePath}ai_based_intelligence.json` });

  // Menu actif selon scroll
  // const sections = document.querySelectorAll("section[id]");
  const sections = document.querySelectorAll("section[id], footer[id]");
  const navLinks = document.querySelectorAll(".site-nav a");
  window.addEventListener("scroll", () => {
    let currentSection = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 130;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });
});
