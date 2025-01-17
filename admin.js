const opere = document.querySelectorAll(".opera"); //prende tutte le opere in automatico (14/01/2024)
const aggiungiRiga=document.querySelector("#aggiungiRiga");//bottone quando viene premuto aggiunge la riga (formAdmin)



//aggiunta dei pulsanti di rimozione per ogni riga
const aggiungiPulsantiRimozione=()=>{
    for(let i=0;i<opere.length;i++){
        opere[i].innerHTML+=`<button class=bottone id=bottone${i}> - </button>`;
        console.log(opere[i]);
    } 
}
const rimuoviRiga=()=>{
    const bottoni=document.querySelectorAll(".bottone");
    for(let i=0;i<bottoni.length;i++){
        bottoni[i].onclick=()=>{
            console.log("ciao");
            opere[i].remove();
        }
    }
}

//per l'aggiunta di opere dentro la formadmin
    let template=`<tr><td>&OPERA</td><td>&LUOGO</td><td>&DATA</td><td>&DESCRIZIONE</td></tr>`;
    
    aggiungiRiga.onclick=()=>{
        /*
        const a=document.querySelector("#idInserimentoOpera");
        const b=document.querySelector("#idInserimentoData");
        const c=document.querySelector("#idInserimentoLuogo");
        const d=document.querySelector("#idInserimentoDescrizione");
        template=template.replace("&OPERA",a.nodeValue).replace("&DATA",b.nodeValue).replace("&LUOGO",c.nodeValue).replace("&DESCRIZIONE",d.nodeValue);
        console.log(template);
        opere.innerHTML+=template;
        */
        const a=document.querySelector("#idInserimentoOpera");
        const b=document.querySelector("#idInserimentoData");
        const c=document.querySelector("#idInserimentoLuogo");
        const d=document.querySelector("#idInserimentoDescrizione");
       
    }



aggiungiPulsantiRimozione();
rimuoviRiga();
aggiungiOpera();

//``







