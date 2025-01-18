const createTable = (parentElement) => {
    let data;
    return {
      build: (dataInput) => {
        data = dataInput;
      },
      render: () => {
        let htmlTable = "<table>";
        htmlTable += data.map((row) => 
          "<tr>" + row.map((col) => 
            "<td>" + col + "</td>"
          ).join("")
        ).join("") + "</tr>";
        htmlTable += "</table";
        parentElement.innerHTML = htmlTable;
      }
    }
  }
  
  const table1 = createTable(document.querySelector("#table1"));
  table1.build([["Opera", "Luogo" , "Data", "Descrizione"], 
    ["--", "Fiume" , "1919-1920" , "D'Annunzio guidò l'Impresa di Fiume, una spedizione militare con cui occupò la città per rivendicarne l'annessione all'Italia"], 
    ["Il Piacere", "Roma" , "1879-1891", "Studi universitari e prime esperienze letterarie, periodo della pubblicazione di Il Piacere e altre opere"],
    ["--", "Pescara" , "1863-1871", "Anni dell'infanzia; nacque a Pescara il 12 marzo 1863."],
    ["--", "Gardone Riviera" , "1863-1871", "Dopo l'Impresa di Fiume, si trasferì nella villa Cargnacco, che trasformò nel Vittoriale degli Italiani."],
    ["Meriggio", "Firenze" , "1891-1938", "Pubblicazione di opere come il Meriggio"],
    ["--", "Parigi" , "1910-1915", "Periodo di ''fuga'' dai creditori; entrò in contatto con artisti e intellettuali francesi."],
    ["Pioggia nel Pineto", "Marina di Pietrasanta" , "1904-1910", "Periodo di soggiorno durante la scrittura di La figlia di Iorio e altre opere teatrali."],
    ["Vergini delle Rocce", "Venezia" , "1894-1897", "Soggiorno durante la stesura di Le vergini delle rocce e altre opere."],
    ["--", "Milano" , "1898-1904", "Periodo di intensa attività teatrale e politica."],
    ["--", "Napoli" , "1891-1894", "Frequentazioni culturali e stesura di alcune opere influenzate dalla città."],
    
]);
  table1.render();
  
  const table2 = createTable(document.querySelector("#table2"));
  table2.build([["Opera", "Luogo" , "Data", "Descrizione"], 
    ["--", "Fiume" , "1919-1920" , "D'Annunzio guidò l'Impresa di Fiume, una spedizione militare con cui occupò la città per rivendicarne l'annessione all'Italia"], 
    ["Il Piacere", "Roma" , "1879-1891", "Studi universitari e prime esperienze letterarie, periodo della pubblicazione di Il Piacere e altre opere"],
    ["--", "Pescara" , "1863-1871", "Anni dell'infanzia; nacque a Pescara il 12 marzo 1863."],
    ["--", "Gardone Riviera" , "1863-1871", "Dopo l'Impresa di Fiume, si trasferì nella villa Cargnacco, che trasformò nel Vittoriale degli Italiani."],
    ["Meriggio", "Firenze" , "1891-1938", "Pubblicazione di opere come il Meriggio"],
    ["--", "Parigi" , "1910-1915", "Periodo di ''fuga'' dai creditori; entrò in contatto con artisti e intellettuali francesi."],
    ["Pioggia nel Pineto", "Marina di Pietrasanta" , "1904-1910", "Periodo di soggiorno durante la scrittura di La figlia di Iorio e altre opere teatrali."],
    ["Vergini delle Rocce", "Venezia" , "1894-1897", "Soggiorno durante la stesura di Le vergini delle rocce e altre opere."],
    ["--", "Milano" , "1898-1904", "Periodo di intensa attività teatrale e politica."],
    ["--", "Napoli" , "1891-1894", "Frequentazioni culturali e stesura di alcune opere influenzate dalla città."],


]);
  table2.render();