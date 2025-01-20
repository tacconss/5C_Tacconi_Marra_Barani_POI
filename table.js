import { generateFetchComponent } from "./fetch.js";

const table = document.getElementById("table");
const button = document.getElementById("submit");
const opereInput = document.getElementById("opere");
const luogoInput = document.getElementById("luogo");
const dataInput = document.getElementById("data");
const descrizioneInput = document.getElementById("descrizione");

const fetchComponent = generateFetchComponent();
let list;
fetchComponent.getData().then((e) => {
    list = e
    let count = list.length; // Inizializziamo il contatore con la lunghezza iniziale della lista

    // Funzione per aggiungere un nuovo elemento alla lista
    button.onclick = () => {
        if (opereInput.value.trim() === "" || luogoInput.value.trim() === "" || dataInput.value.trim() === "" || descrizioneInput.value.trim() === "") return; // Se uno dei campi è vuoto, non fare nulla

        let data = {
            opere: opereInput.value,
            luogo: luogoInput.value,
            data: dataInput.value,
            descrizione: descrizioneInput.value
        };

        list.push(data);
        fetchComponent.setData(list).then(() => fetchComponent.getData().then(function (e) {
            data = e;
            list = e;
            render();
            count++;
            opereInput.value = "";
            luogoInput.value = "";
            dataInput.value = "";
            descrizioneInput.value = "";
        }).then(console.log)).catch(console.error)
    };

    // Funzione per renderizzare la tabella
    function render() {
        let html = `
    <thead>
      <tr>
        <th>Opere</th>
        <th>Luogo</th>
        <th>Data</th>
        <th>Descrizione</th>
      </tr>
    </thead>
    <tbody>
  `;

        Object.values(list).forEach((element, id) => {
            html += `
      <tr id='tr_${id}'>
        <td>${element.opere}</td>
        <td>${element.luogo}</td>
        <td>${element.data}</td>
        <td>${element.descrizione}</td>
        <td>
          <button type='button' class='pulsantiElimina' id='bottoneE_${id}'>Elimina</button>
        </td>
      </tr>
    `;
        });

        html += "</tbody>";
        table.innerHTML = html;  // Impostiamo il contenuto della tabella

        // Gestione dei pulsanti elimina
        document.querySelectorAll(".pulsantiElimina").forEach((button) => {
            button.onclick = () => {
                console.log("premuto")
                const id = parseInt(button.id.replace("bottoneE_", ""));
                list.splice(id, 1);  // Rimuoviamo l'elemento dalla lista
                fetchComponent.setData(list).then(() => fetchComponent.getData().then(function (e) {
                    list=e;
                    data=e;
                    render();
                }).then(console.log)).catch(console.error)

                // Rende di nuovo la lista aggiornata
            };
        });
    }

    render();  // Rendering iniziale della tabella
}).catch(console.error)

const createTable = (parentElement, canDeleteRows) => {
    let data;
     const a = {
        build: (dataInput) => {
            data = dataInput;
        },
        render: function() {
            let htmlTable = "<table>";
            let temp = "";
            let index = 0;
        
            Object.values(data).forEach((row) => {
                if (index === 0) {
                    // Intestazione della tabella
                    temp += "<tr>";
                    for (const key in row) {
                        temp += "<th>" + key + "</th>";
                    }
                    temp += "</tr>";
                    index++;
                } else {
                    const id = index - 1;
                    const rowId = `row_${parentElement.id}_${id}`; // ID della riga
                    temp += `<tr id='${rowId}'>` +
                        Object.keys(row).map((col) => "<td>" + row[col] + "</td>").join("") 
                    index++;
                }
            });
        
            htmlTable += temp; // Aggiungi le righe generate
            htmlTable += "</table>";
        
            parentElement.innerHTML = htmlTable; // Restituisci la tabella generata
        

            // Aggiungi un unico bottone in fondo alla tabella
            if (parentElement.id === "table2") {
                htmlTable += `<div class="edit-button">
              <a href="#formAdmin"><button id='bottoneModifica'>Modifica</button></a>
              </div>`;
            }

            parentElement.innerHTML = htmlTable;

            let eliminaButtons = document.querySelectorAll(".pulsantiElimina");
            console.log(eliminaButtons)
            eliminaButtons.forEach((button) => {
                button.onclick = () => {
                    console.log("premuto")
                    const id = parseInt(button.id.replace(`bottoneE_${parentElement.id}_`, ""));
                    const rowToDelete = parentElement.querySelector(`#row_${parentElement.id}_${id}`);
                    if (rowToDelete) {
                        rowToDelete.remove(); // Elimina la riga dal html
                    }
                    data.splice(id + 1, 1); // Aggiorna i dati
                    fetchComponent.setData(data).then(() => fetchComponent.getData().then(function (e) {
                        list=e;
                        data=e;
                        this.render();
                    }).then(console.log)).catch(console.error)
                };
            });

            const bottoneModifica = document.querySelector("#bottoneModifica");
            if (bottoneModifica) {
                bottoneModifica.onclick = () => {
                    //QUA SIAMO GIà NEL FORMADMIN AGGIUNGERE QUI DENTRO LA PARTE DEL BOTTONE CHE AGGIUNGE LE RIGHE ALLA TABELLA
                    // div nel html
                    const formAdmin = document.querySelector("#formAdmin");
                    const tabella = document.querySelector("#table3"); // tabella 3



                };
            }


        }
    }
    return a;
};



// Creazione della prima tabella
const table1 = createTable(document.querySelector("#table1"), true);
fetchComponent.getData().then((e) => {
    console.log("dati: " + e)
    table1.build(e);
    table1.render();
});
