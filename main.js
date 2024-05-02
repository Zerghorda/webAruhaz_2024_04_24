import { megjelenites, kartyakOsszeAllit } from "./fuggvenyek.js";
import { termekekLISTA } from "./termekek.js";
let nevIrany = 1;
const articleELEM = $("article");
const gombElem = $(".kosarba");
const asideELEM = $("aside");
init(termekekLISTA);
let kosarLista = {};
kosarbaTesz();
function kosarbaTesz() {
  gombElem.click( function (event) {
    let index = 
    $(kosarLista).append(event.taget);
  });
  console.log(kosarLista);
}
//szuresEsemeny();
//adminElemHozzad(termekekLISTA);

export function init(lista) {
  let txt = kartyakOsszeAllit(lista);
  megjelenites(txt, $("article"));
}
