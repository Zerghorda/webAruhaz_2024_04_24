1.a publikus felületenb div-ekben jelenítsuk meg az adatokat.Az előzetes minta alapján(public fel .png)

2.reszponziv legyen duh

3.az oldalon legyen szürés lehetőség pl:névben,leírás kategória szerint ,vagy ár  legolcsobb vagy legg drágább

4.rendezési lehetőség  pl ár szerint növekvő,csökkenő

5.kosár funkció :publikus felületen a terméket helyezheted a kosárba . a kosarat táblázatos  formába jelenítsd meg

6.kosárban levő terméket listázhatod ,törölheted,modosíthatod az elemszámát,majd leadhatod a rendelést!

7.++ rendelés összeállítása pdf-formátumba.

8.++egyetlen termék megjelenítése:minden termékhez(divhez) tartozik egy gomb amivel meg tudjuk nézni azt az egyetlen terméket | modal

9.++ a kiemelt termék mellet amivel léptetni tudjuk a terméket

------------------------------------------------fügvények--------------------------------------------------------------------

tablazatOsszeallit(lista)-> txt - összeálítja a html kód szövegét  táblázatos formátumba - pl kosarat is így jelenítjük meg. 

megjelenit(txt) - megjelenít egy html szöveget egy html elembe

kartyakOsszeAllit(lista)-> txt - termékek listájábol ki szedett adatokat be tesszük egy kártyába és vissza ajuk hogy jelenítse meg a html

kosarbaTesz(adatokLista, index, kosarLista)->kosarLista - ha egyik elemnek a kosárba tesz gombra kattintunk beleteszí kosárba

kereses(lista,szoveg, kulcs); - adott szoveget keressük  a termékek kulcs-változóban megadott mezőben

sorTorles(lista, index) ->lista a kosárbol ha elakaruk távolitani egy elemet csak a kuka vagy X gomb ra kell rá nyomnunk

rendeles(kosarLista)  - validatorrel ellátott formba lévő adatokat össsze gyüjtük egy listába;

kiirPDF() - kiirjuk az adatokat egy pdf fileba
