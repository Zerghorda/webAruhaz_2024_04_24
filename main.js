import {
  megjelenites,
  kartyakOsszeAllit,
  tablazatOsszealit,
} from "./fuggvenyek.js";
import { termekekLISTA } from "./termekek.js";
import { kosarLISTA } from "./rendeltTermekek.js";
let nevIrany = 1;
const articleELEM = $("article");
const asideELEM = $("aside");

init(termekekLISTA);

function kosarbaTesz() {
  const gombElem = $("article .kosarba");
  gombElem.on("click", function (event) {
    let index = event.target.id;
    console.log(index);
    kosarLISTA.push(termekekLISTA[index]);
    console.log(kosarLISTA);
  });
}
//szuresEsemeny();
//adminElemHozzad(termekekLISTA);

export function init(lista) {
  let txt = kartyakOsszeAllit(lista);
  megjelenites(txt, $("article"));
  let txt2 = tablazatOsszealit(kosarLISTA);
  megjelenites(txt2,$("aside"))
  kosarbaTesz();
  tablazatOsszealit(termekekLISTA);
}
