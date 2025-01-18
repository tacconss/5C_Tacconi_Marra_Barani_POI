const myToken = 'c6664b7e-16c5-4a74-931e-377b271f30b2';
const myKey = 'luogo';

const raccogliDatiTabella = () => {
    const tabella = document.querySelector('.table tbody'); // Seleziona il corpo della tabella
    const datiTabella = [];

    tabella.querySelectorAll('tr').forEach(riga => {
      const colonne = riga.querySelectorAll('td');
      if (colonne.length > 0) {
        const opera = colonne[0].innerText.trim();
        const luogo = colonne[1].innerText.trim();
        const data = colonne[2].innerText.trim();
        const descrizione = colonne[3].innerText.trim();
        datiTabella.push({ opera, luogo, data, descrizione });
      }
    });
    
    return datiTabella;
  };

  const salvaDatiTabella = () => {
    const dati = raccogliDatiTabella();
    
    fetch('https://ws.cipiaceinfo.it/cache/set', { // Usa l'URL corretto per il salvataggio
      method: "POST",
      headers: {
        "content-type": "application/json",
        "key": myToken
      },
      body: JSON.stringify({
        key: myKey,
        value: JSON.stringify(dati) // Salva l'array di oggetti tabella
      })
    })
    .then(response => response.json())
    .then(result => {
      console.log("Dati salvati con successo:", result);
      console.log(dati);
    })
    .catch(error => {
      console.error("Errore nel salvataggio dei dati:", error);
    });
  };

  // Esempio di chiamata alla funzione per il salvataggio
  console.log(salvaDatiTabella());