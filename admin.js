const opera1=document.querySelector("#opera1");
const opera2=document.querySelector("#opera2");
const opera3=document.querySelector("#opera3");
const opera4=document.querySelector("#opera4");
const opera5=document.querySelector("#opera5");
const opera6=document.querySelector("#opera6");
const opera7=document.querySelector("#opera7");
const opera8=document.querySelector("#opera8");
const opera9=document.querySelector("#opera9");
const opera10=document.querySelector("#opera10");
let array1=[opera1,opera2,opera3,opera4,opera5,opera6,opera7,opera8,opera9,opera10];


//aggiunta dei pulsanti di rimozione per ogni riga
const aggiungiPulsantiRimozione=()=>{
    for(let i=0;i<array1.length;i++){
        //console.log(arrayOpereStatic[i]);
        array1[i].innerHTML+=`<button id=bottone${i+1}> - </button>`;
        //console.log(array1[i]);
    }
}

aggiungiPulsantiRimozione();




//``







