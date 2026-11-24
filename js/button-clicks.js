document.addEventListener("DOMContentLoaded", () => {

    const karabiner = document.querySelector("#button-karabiner");
    const schluessel = document.querySelector("#button-schluessel");
    const usb = document.querySelector("#button-usb");

    const infoboxtitle = document.querySelector("#info-title");
    const infoboxtext = document.querySelector("#info-text");

    const defaulttitle = "Ein Schlüsselbund.<br>Immer dabei.";
    const defaulttext = "Klicke auf die Knöpfe am Objekt.";

    const content = {
        karabiner: {
            title: "Karabiner",
            text: "Der SeaToSummit-Karabiner ist seit 2 Jahren der Halt meines Schlüsselbundes. Seine Vorgänger waren eher kleiner und schwarz."
        },
        schluessel: {
            title: "Schlüssel",
            text: "Zuhause, Elternhaus, Büro. Mit den Schlüsseln komme ich an allen relevanten Orten rein."
        },
        usb: {
            title: "USB-Stick",
            text: "Man weiss nie, wann das nächste DJ-Set ansteht."
        }
    };

    const buttons = [karabiner, schluessel, usb];


    function handleButtonClick(button, data) {

        // Prüfen, ob der Button bereits aktiv ist
        const isActive = button.classList.contains("active");

        // Zuerst alle Buttons deaktivieren
        buttons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Wenn der geklickte Button bereits aktiv war:
        // zurück zum Default
        if (isActive) {
            infoboxtitle.textContent = defaultTitle;
            infoboxtext.textContent = defaultText;
            return;
        }

        // Neuen Button aktivieren
        button.classList.add("active");

        // Inhalt anpassen
        infoboxtitle.textContent = data.title;
        infoboxtext.textContent = data.text;
    }

    karabiner.addEventListener("click", () => {
        handleButtonClick(karabiner, content.karabiner);
    });

    schluessel.addEventListener("click", () => {
        handleButtonClick(schluessel, content.schluessel);
    });

    usb.addEventListener("click", () => {
        handleButtonClick(usb, content.usb);
    });
});