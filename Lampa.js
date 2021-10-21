class Lampa {
  constructor(elem, index) {
    //saját adattag beállítása

    this.elem = elem;

    this.allapot = false;

    this.index = index;
    //this.elem.css("background-color", "green");
    this.setSzin();
    //ha rákattintunk az elemre
    this.elem.on("click", () => {
      this.setAllapot();

      this.KattintasTrigger(); // ezzel váltjuk ki az eseményt
    });
    //az állapotot meg kell változtatni
    //meghívni a setSzint
  }
  //szín beállítása
  setSzin() {
    if (this.allapot) {
      this.elem.css("background-color", "yellow");
    } else {
      this.elem.css("background-color", "tomato");
    }
  }

  setAllapot() {
    this.allapot = !this.allapot;
    this.setSzin();
  }

  //saját esemény definiálása
  KattintasTrigger() {
    let esemeny = new CustomEvent("lampakapcsolas", { detail: this.index });
    //úgy hozzuk létre az eseményt, hogy azt is megmondjuk, hogy melyik objektum váltotta ki
    //console.log("esemény kiváltva");
    window.dispatchEvent(esemeny); //főablakhoz hozzárendeli az eseményt, hogy a js.js-be lássuk
  }
}
