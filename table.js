const createTable = (parentElement, canDeleteRows = true) => {
  let data;
  return {
      build: (dataInput) => {
          data = [...dataInput]; // Copia i dati
      },
      render: () => {
          let htmlTable = "<table>";
          htmlTable += data.map((row, index) => {
              if (index === 0) {
                  // Intestazione della tabella
                  return "<tr>" + row.map((col) => "<th>" + col + "</th>").join("") + "</tr>";
              } else {
                  const id = index - 1; 
                  const rowId = `row_${parentElement.id}_${id}`; // ID della riga

                  let rowHtml = `<tr id='${rowId}'>` +
                      row.map((col) => "<td>" + col + "</td>").join("") +
                      (canDeleteRows ? `<td>
                           <button type='button' class='pulsantiElimina' id='bottoneE_${parentElement.id}_${id}'>elimina</button>
                         </td>` : "") +
                      "</tr>";

                  return rowHtml;
              }
          }).join("");
          htmlTable += "</table>";

          // Aggiungi un unico bottone in fondo alla tabella
          if (parentElement.id === "table2") {
              htmlTable += `<div class="edit-button">
              <a href="#formAdmin"><button id='bottoneModifica'>Modifica</button></a>
              </div>`;
          }

          parentElement.innerHTML = htmlTable;

          if (canDeleteRows) {
              let eliminaButtons = parentElement.querySelectorAll(".pulsantiElimina");
              eliminaButtons.forEach((button) => {
                  button.onclick = () => {
                      const id = parseInt(button.id.replace(`bottoneE_${parentElement.id}_`, ""));
                      const rowToDelete = parentElement.querySelector(`#row_${parentElement.id}_${id}`);
                      if (rowToDelete) {
                          rowToDelete.remove(); // Elimina la riga dal html
                      }
                      data.splice(id + 1, 1); // Aggiorna i dati
                  };
              });

              const bottoneModifica = document.querySelector("#bottoneModifica");
              if (bottoneModifica) {
                  bottoneModifica.onclick = () => {
                      // div nel html
                      const formAdmin = document.querySelector("#formAdmin");
                      
                    
                  };
              }
          }
      }
  }
};

// Creazione della prima tabella
const table1 = createTable(document.querySelector("#table1"), false);
table1.build([
  ["Opera", "Luogo", "Data", "Descrizione"],
  ["--", "Fiume", "1919-1920", "D'Annunzio guidò l'Impresa di Fiume, una spedizione militare con cui occupò la città per rivendicarne l'annessione all'Italia"],
  ["Il Piacere", "Roma", "1879-1891", "Studi universitari e prime esperienze letterarie, periodo della pubblicazione di Il Piacere e altre opere"],
  ["--", "Pescara", "1863-1871", "Anni dell'infanzia; nacque a Pescara il 12 marzo 1863."],
  ["--", "Gardone Riviera", "1863-1871", "Dopo l'Impresa di Fiume, si trasferì nella villa Cargnacco, che trasformò nel Vittoriale degli Italiani."],
  ["Meriggio", "Firenze", "1891-1938", "Pubblicazione di opere come il Meriggio"],
  ["--", "Parigi", "1910-1915", "Periodo di ''fuga'' dai creditori; entrò in contatto con artisti e intellettuali francesi."],
  ["Pioggia nel Pineto", "Marina di Pietrasanta", "1904-1910", "Periodo di soggiorno durante la scrittura di La figlia di Iorio e altre opere teatrali."],
  ["Vergini delle Rocce", "Venezia", "1894-1897", "Soggiorno durante la stesura di Le vergini delle rocce e altre opere."],
  ["--", "Milano", "1898-1904", "Periodo di intensa attività teatrale e politica."],
  ["--", "Napoli", "1891-1894", "Frequentazioni culturali e stesura di alcune opere influenzate dalla città."],
]);
table1.render();

// Creazione della seconda tabella
const table2 = createTable(document.querySelector("#table2"), true);
table2.build([
  ["Opera", "Luogo", "Data", "Descrizione"],
  ["--", "Fiume", "1919-1920", "D'Annunzio guidò l'Impresa di Fiume..."],
  ["Il Piacere", "Roma", "1879-1891", "Studi universitari e prime esperienze..."],
  ["--", "Pescara", "1863-1871", "Anni dell'infanzia; nacque a Pescara..."],
  ["--", "Gardone Riviera", "1863-1871", "Dopo l'Impresa di Fiume, si trasferì..."],
  ["Meriggio", "Firenze", "1891-1938", "Pubblicazione di opere come il Meriggio"],
  ["--", "Parigi", "1910-1915", "Periodo di ''fuga'' dai creditori..."],
  ["Pioggia nel Pineto", "Marina di Pietrasanta", "1904-1910", "Periodo di soggiorno durante la scrittura..."],
  ["Vergini delle Rocce", "Venezia", "1894-1897", "Soggiorno durante la stesura..."],
  ["--", "Milano", "1898-1904", "Periodo di intensa attività teatrale..."],
  ["--", "Napoli", "1891-1894", "Frequentazioni culturali e stesura..."],
]);
table2.render();

// Creazione della terza tabella
const table3 = createTable(document.querySelector("#table3"), true);
table3.build([
  ["Opera", "Luogo", "Data", "Descrizione"],
  ["--", "Milano", "1920-1925", "D'Annunzio scrisse opere significative durante questo periodo."],
  ["Il Fuoco", "Roma", "1900-1905", "Un romanzo che esplora la vita e le passioni."],
  ["--", "Firenze", "1915-1920", "Un periodo di intensa attività letteraria."],
  ["--", "Venezia", "1925-1930", "Soggiorno durante la stesura di opere teatrali."],
  ["Il Trionfo della Morte", "Milano", "1894-1895", "Un'opera che affronta temi esistenziali."],
  ["--", "Napoli", "1905-1910", "Un periodo di riflessione e scrittura."],
  ["--", "Parigi", "1915-1920", "Contatti con artisti e intellettuali."],
  ["--", "Torino", "1920-1925", "Un'importante città per la sua carriera."],
  ["--", "Bologna", "1925-1930", "Soggiorno durante la stesura di opere."],
  ["--", "Pescara", "1930-1935", "Ultimi anni di vita e scrittura."],
]);
table3.render();