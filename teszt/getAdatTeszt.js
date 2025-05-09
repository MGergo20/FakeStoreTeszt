import Modell from "../Modell.js";
 
function getAdatTeszt_jovegpont() {
  let vegpont = "https://fakestoreapi.com/products/1";
  let vart = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
  ];
 
  /*müködik a getAdat metódus*/
 
  let modell = new Modell();
  modell.getAdat(vegpont, callbackTeszt, hibaCallbackTeszt);
 
  function callbackTeszt(adat) {
    console.log("Jó végponttal megérkezik az adat");
    console.assert(
        /*JSON file-t stringgé alakíom */
      JSON.stringify(vart) === JSON.stringify(adat[0]),
      "Jó végponttal hibás adatot kaptam"
    );
    console.log("lefutott a fetch");
  }
  function hibaCallbackTeszt(adat) {
    console.log("hiba:",adat)
  }
 
}
getAdatTeszt_jovegpont();
//getAdatTeszt_NEMjovegpont();
 
function getAdatTeszt_NEMjovegpont() {
  let vegpont = "https://fakestoreapi.com/products/1";
 
  let modell1 = new Modell();
  modell1.getAdat(vegpont, callbackTeszt, hibaCallbackTeszt);
 
 
}

 