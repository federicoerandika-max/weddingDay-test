function openInstagram() {
  const instagramApp = "instagram://camera";
  const instagramWeb = "https://www.instagram.com/";

  // prova ad aprire l'app
  window.location.href = instagramApp;

  // fallback al web se non installata
  setTimeout(() => {
    window.open(instagramWeb, "_blank");
  }, 800);
}