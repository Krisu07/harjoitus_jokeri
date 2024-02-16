const uusiRiviNappi = document.getElementById('uusiRiviNappi');
const jokeriTaulukko = document.getElementById('jokeriTaulukko');
const rivienLukumaaraP = document.getElementById('rivienLukumaara');
const resetNappi = document.getElementById('resetNappi');

uusiRiviNappi.addEventListener('click', lisaaUusiRivi);
resetNappi.addEventListener('click', tyhjennaRivit);

let arvottujenRivienMaara = 0;

function lisaaUusiRivi() {

  arvottujenRivienMaara++;
  rivienLukumaaraP.innerText = `Arvottuja rivejä: ${arvottujenRivienMaara}`;

  // Luo uusi rivi
  const uusiRivi = jokeriTaulukko.insertRow();

  for (let i = 0; i < 7; i++) {
    const satunnaisluku = Math.floor(Math.random() * 10); 
    const uusiSolu = uusiRivi.insertCell();
    uusiSolu.innerText = satunnaisluku;
  }
}
function tyhjennaRivit() {
     while (jokeriTaulukko.rows.length > 0) {
       jokeriTaulukko.deleteRow(0);
     }
     arvottujenRivienMaara = 0;
     rivienLukumaaraP.innerText = `Arvottuja rivejä: ${arvottujenRivienMaara}`;
   }