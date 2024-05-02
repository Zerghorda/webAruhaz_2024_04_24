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
                      <div class ="p-2"> <button class="btn btn-dark kosarba">kosárba</button> </div>
                </div>
            </div>
          </div>`
          ;

  });
  txt += `</div>`;
  return txt;
}

function tablazatOsszealit(lista) {
  let txt = "";
}
