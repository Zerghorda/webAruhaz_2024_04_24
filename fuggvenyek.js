const articleELEM = $("article");
const asideELEM = $("aside");

export function megjelenites(txt, element) {
  console.log("megjelenites beis belép");
  console.log("megjelenit txt és element ",txt,element);
  element.html(txt);
}

//kosarbaTesz();
//kereses();
//rendeles();
export function kartyakOsszeAllit(lista) {
  console.log("belép");
  let txt = "";
  txt += `<div class="container mt-3">`;
  lista.forEach((element, i) => {
    txt += `<h2>${element.nev}</h2>`;
    txt += ` <div class="card">`;
    txt += `<div class="card-header">${element.kep}</div>`;
    txt += `<div class="card-body">${element.leiras}</div>`;
    txt += `<div class="card-footer"><div>ár:${element.ar}</div>
      <div> <input type="submit" class="btn btn-dark" value="Rendelés"> </div>`;
    txt += `</div>`;

    txt += `</div>`;
    console.log(txt);
    return txt;
  });
}

function tablazatOsszealit(lista) {
  let txt = "";
}
