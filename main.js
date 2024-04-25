import { megjelenites, kartyakOsszeAllit } from "./fuggvenyek.js";
import { termekekLISTA } from "./termekek.js";
let nevIrany = 1;
init(termekekLISTA);
//szuresEsemeny();
//adminElemHozzad(termekekLISTA);

export function init(lista) {
    console.log("hello");
  let txt = kartyakOsszeAllit(lista);
  megjelenites(txt, $("article"));
}
