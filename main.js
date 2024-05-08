import {
  megjelenites,
  kartyakOsszeAllit,
  tablazatOsszealit,
} from "./fuggvenyek.js";
import { termekekLISTA } from "./termekek.js";
//import { kosarLISTA } from "./rendeltTermekek.js";
let nevIrany = 1;
const articleELEM = $("article");
const asideELEM = $("aside");
const kosarLISTA = [];

init(termekekLISTA);

function kosarbaTesz() {
  const gombElem = $("article .kosarba");
  gombElem.on("click", function (event) {
    let index = event.target.id;
    console.log(index);
    let txt3 = alertek();
    megjelenites(txt3,$("#alerSpot"));
    kosarLISTA.push(termekekLISTA[index]);
    console.log(kosarLISTA);
    init(termekekLISTA);
  });
}
function kosarbolKivesz() {
  const kukaELEM = $(".kuka");
  kukaELEM.on("click", function (event) {
    let index = event.target.id;
    console.log(index);
    kosarLISTA.pop(index);
    console.log(kosarLISTA);
    init(termekekLISTA);
  });
}
//szuresEsemeny();
//adminElemHozzad(termekekLISTA);

export function init(lista) {
  let txt = kartyakOsszeAllit(lista);
  megjelenites(txt, $("article"));
  let txt2 = tablazatOsszealit(kosarLISTA);
  kosarbaTesz();
  megjelenites(txt2, $("#termekek"));
  kosarbolKivesz();
}

function alertek() {
  let txt = "";
  txt += `<div id="figyelmeztetes" class="alert alert-success alert-dismissible fade show">
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            <strong>Success!</strong> This alert box could indicate a successful or positive action.
        </div>`;
  return txt;
}
