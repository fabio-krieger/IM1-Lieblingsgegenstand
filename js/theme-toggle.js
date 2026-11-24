// Wartet, bis das HTML der Seite vollständig geladen wurde.
document.addEventListener("DOMContentLoaded", () => {

  // Sucht das Element mit der ID "theme-toggle".
  const toggle = document.querySelector("#theme-toggle");

  // Falls der Button nicht gefunden wird, wird der Code hier beendet.
  if (!toggle) return;


  // Sucht innerhalb des Buttons nach dem <img>-Element.
  const icon = toggle.querySelector("img");

  // Sucht innerhalb des Buttons nach dem <span>-Element.
  const text = toggle.querySelector("span");


  // Holt das zuletzt gespeicherte Theme aus dem localStorage.
  // Falls noch nichts gespeichert wurde, wird "light" verwendet.
  const saved = localStorage.getItem("theme") || "light";


  // Setzt das gespeicherte Theme auf den <body>.
  // Daraus wird z. B. <body data-theme="dark">
  document.body.dataset.theme = saved;


  // Setzt beim Laden das passende Icon.
  icon.src = saved === "dark"
      ? "img/icon-darkmode.svg"
      : "img/icon-lightmode.svg";


  // Setzt beim Laden auch den passenden Text.
  // Dadurch stimmt der Text auch nach einem Neuladen der Seite.
  text.textContent = saved === "dark"
      ? "Dunkel"
      : "Hell";


  // Wartet darauf, dass der Theme-Button angeklickt wird.
  toggle.addEventListener("click", () => {


    // Prüft das aktuelle Theme und bestimmt das nächste.
    // light → dark
    // dark → light
    const next = document.body.dataset.theme === "light"
        ? "dark"
        : "light";


    // Ändert den Text passend zum neuen Theme.
    text.textContent = next === "dark"
        ? "Dunkel"
        : "Hell";


    // Setzt das neue Theme auf den <body>.
    document.body.dataset.theme = next;


    // Speichert das neue Theme im Browser.
    // So bleibt die Auswahl auch nach einem Neuladen erhalten.
    localStorage.setItem("theme", next);


    // Wechselt das Icon passend zum neuen Theme.
    icon.src = next === "dark"
        ? "img/icon-darkmode.svg"
        : "img/icon-lightmode.svg";

  });
});