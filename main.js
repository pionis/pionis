document.addEventListener("DOMContentLoaded", () => {
  // Détection automatique du sous-répertoire (utile pour GitHub Pages)
  const basePath = window.location.pathname.split("/")[1]
    ? `/${window.location.pathname.split("/")[1]}/`
    : "/";

  // Lotties principaux avec basePath
  lottie.loadAnimation({
    container: document.getElementById("lottie-hero"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: `${basePath}ai_based_intelligence.json`
  });

  lottie.loadAnimation({
    container: document.getElementById("lottie-analytics"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: `${basePath}analytics.json`
  });

  lottie.loadAnimation({
    container: document.getElementById("lottie-strategy"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: `${basePath}strategy.json`
  });

  lottie.loadAnimation({
    container: document.getElementById("lottie-marketplace"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: `${basePath}marketplace.json`
  });

  lottie.loadAnimation({
    container: document.getElementById("lottie-ai"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: `${basePath}ai.json`
  });

  // Lotties de fond
  lottie.loadAnimation({
    container: document.getElementById("lottie-header-bg"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: `${basePath}ai_based_intelligence.json`
  });

  lottie.loadAnimation({
    container: document.getElementById("lottie-services-bg"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: `${basePath}strategy.json`
  });

  lottie.loadAnimation({
    container: document.getElementById("lottie-about-bg"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: `${basePath}about-bg.json`
  });

  lottie.loadAnimation({
    container: document.getElementById("lottie-cta-bg"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: `${basePath}ai.json`
  });

  lottie.loadAnimation({
    container: document.getElementById("lottie-footer-bg"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: `${basePath}ai_based_intelligence.json`
  });
});
