// Dati della tabella
const data = [
    { id: 1, opera: "--", luogo: "Fiume", data: "1919-1920", descrizione: "D'Annunzio guidò l'Impresa di Fiume, una spedizione militare con cui occupò la città per rivendicarne l'annessione all'Italia" },
    { id: 2, opera: "Il Piacere", luogo: "Roma", data: "1879-1891", descrizione: "Studi universitari e prime esperienze letterarie, periodo della pubblicazione di Il Piacere e altre opere" },
    { id: 3, opera: "--", luogo: "Pescara", data: "1863-1871", descrizione: "Anni dell'infanzia; nacque a Pescara il 12 marzo 1863." },
    { id: 4, opera: "--", luogo: "Gardone Riviera", data: "1921-1938", descrizione: "Dopo l'Impresa di Fiume, si trasferì nella villa Cargnacco, che trasformò nel Vittoriale degli Italiani." },
    { id: 5, opera: "Meriggio", luogo: "Firenze", data: "1891-1893", descrizione: "Pubblicazione di opere come il Meriggio" },
    { id: 6, opera: "--", luogo: "Parigi", data: "1910-1915", descrizione: "Periodo di 'fuga' dai creditori; entrò in contatto con artisti e intellettuali francesi." },
    { id: 7, opera: "Pioggia nel Pineto", luogo: "Marina di Pietrasanta", data: "1904-1910", descrizione: "Periodo di soggiorno durante la scrittura di La figlia di Iorio e altre opere teatrali." },
    { id: 8, opera: "Vergini delle Rocce", luogo: "Venezia", data: "1894-1897", descrizione: "Soggiorno durante la stesura di Le vergini delle rocce e altre opere." },
    { id: 9, opera: "--", luogo: "Milano", data: "1898-1904", descrizione: "Periodo di intensa attività teatrale e politica." },
    { id: 10, opera: "--", luogo: "Napoli", data: "1891-1894", descrizione: "Frequentazioni culturali e stesura di alcune opere influenzate dalla città." }
  ];
  
  // Selettore del corpo della tabella
  const tableBody = document.getElementById("table-body");
  
  // Template HTML per una riga della tabella
  const template = `
    <tr>
      <td>&OPERA;</td>
      <td>&LUOGO;</td>
      <td>&DATA;</td>
      <td>&DESCRIZIONE;</td>
      <td><button class="pulsante" id="button_&ID;">Dettagli</button></td>
    </tr>`;
  
  // Funzione di rendering della tabella
  const renderTable = () => {
    let html = "";
    data.forEach(item => {
      let rowHtml = template
        .replace("&OPERA;", item.opera)
        .replace("&LUOGO;", item.luogo)
        .replace("&DATA;", item.data)
        .replace("&DESCRIZIONE;", item.descrizione)
        .replace("&ID;", item.id);
      html += rowHtml;
    });
  
    tableBody.innerHTML = html;
  
    document.querySelectorAll(".pulsante").forEach(button => {
      button.onclick = () => {
        const id = parseInt(button.id.replace("button_", ""));
        showDetails(id);
      };
    });
  };
  
  // Mostra i dettagli di una riga
  const showDetails = (id)=> {
    const item = data.find(entry => entry.id === id);
    if (item) {
      alert(`Opera: ${item.opera}\nLuogo: ${item.luogo}\nData: ${item.data}\nDescrizione: ${item.descrizione}`);
    }
  };
  
  // Esegui il rendering iniziale
  renderTable();
  