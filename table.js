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
            return (
              `<tr id='row_${parentElement.id}_${id}'>` +
              row.map((col) => "<td>" + col + "</td>").join("") +
              (canDeleteRows
                ? `<td>
                     <button type='button' class='pulsantiElimina' id='bottoneE_${parentElement.id}_${id}'>elimina</button>
                   </td>`
                : "") +
              "</tr>"
            );
          }
        }).join("");
        htmlTable += "</table>";
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
  
  


  
/*
  const ul = document.getElementById("ul");
const button = document.getElementById("submit");
const input = document.getElementById("inputText");
let list = [];
let count = 0;
const myToken = "c6664b7e-16c5-4a74-931e-377b271f30b2";
const myKey = "chiave";


function loadList() {
  fetch("https://ws.progettimolinari.it/cache/get", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "key": myToken
    },
    body: JSON.stringify({
      key: myKey,
    })
  })
  .then(response => response.json())
  .then(data => {
    list = JSON.parse(data.result);
    render();
  })
}
loadList();

button.onclick = () => {
  let data = {
    "inputValue": input.value,
    "completed": false
  };
  list.push(data);
  render();
  count++;
  input.value = "";
  update();
};

function render() {
  let html = "";
  list.forEach((element, id) => {
    let completedClass = element.completed ? "done" : "";
    html += `<li id='li_${id}' class='divs ${completedClass}'>${element.inputValue}<button type='button' class='pulsantiConferma' id='bottoneC_${id}'>conferma</button><button type='button' class='pulsantiElimina' id='bottoneE_${id}'>elimina</button></li>`;
  });
  ul.innerHTML = html;

  let eliminaButtons = document.querySelectorAll(".pulsantiElimina");
  eliminaButtons.forEach((button) => {
    button.onclick = () => {
      const id = parseInt(button.id.replace("bottoneE_", ""));
      list.splice(id, 1);
      count--;
      render();
      update();
    };
  });

  let confermaButtons = document.querySelectorAll(".pulsantiConferma");
  confermaButtons.forEach((button) => {
    button.onclick = () => {
      const id = parseInt(button.id.replace("bottoneC_", ""));
      list[id].completed = true;
      render();
      update();
    };
  });
}

function update() {
  fetch("https://ws.progettimolinari.it/cache/set", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "key": myToken
    },
    body: JSON.stringify({
      key: myKey,
      value: JSON.stringify(list)
    })
  })
  .then(response => response.json());
  
}

render();

*/