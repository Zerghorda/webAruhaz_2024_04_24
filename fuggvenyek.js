export function megjelenites(txt, element) {
  element.html(txt);
}

//
//kereses();
//rendeles();
export function kartyakOsszeAllit(lista) {
  let txt = "";
  txt += `<div class="row">`;
  lista.forEach((element, i) => {
    txt += `<div class="card col-lg-6">
              <div class="container mt-3">
                <h2>${element.nev}</h2>
                <div class="card-header d-flex justify-content-center">
                  <img class="img-fluid" src="${element.kep}" alt="kép" />
                </div>
                <div class="card-body"> ${element.leiras}</div>
                <div class="card-footer d-flex justify-content-between mb-3">
                      <div class="p-2">ár: ${element.ar}</div>
                      <div class ="p-2"> <button id="${i}" class="kosarba btn btn-dark">kosárba</button> </div>
                </div>
            </div>
          </div>`;
  });
  txt += `</div>`;
  return txt;
}

export function tablazatOsszealit(lista) {
  let txt = "";
  txt += `<table class='table table-striped'>`;
  //szorgalmi fejléc kulcsai is ciklussal írjuk ki
  let fejlec = ["Termék név", "kép", "Nem", "leírás","ár"];
  txt += "<tr>";
  for (let index = 0; index < fejlec.length; index++) {
    txt += `<th>${fejlec[index]}</th>`;
  }
  txt += "</tr>";
  lista.forEach((element, i) => {
    txt += `<tr>`;
    for (const key in element) {
      txt += `<td>${element[key]}</td>`;
    }
    txt += `<td id='${i}' class='kuka'>🗑️</td>`;
    txt += `</tr>`;
  });
  txt += "</table>";
  return txt;
}
