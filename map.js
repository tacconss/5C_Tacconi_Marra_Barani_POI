let places = [
    {
       name: "Fiume",
       coords: [45.850833, 12.619444]
    },
    {
       name: "Roma",
       coords: [41.9027835 , 12.4963655 ]
    },
    {
       name: "Pescara",
       coords: [42.4617902 , 14.2160898 ]
    },
    {
       name: "Gardone Riviera",
       coords: [45.618183, 10.559564]
    },
    {
      name: "Firenze",
      coords: [43.7695604 , 11.2558136 ]
   },
   {
      name: "Parigi ",
      coords: [48.856614 , 2.352222 ]
   },
   {
      name: "Marina di Pietrasanta",
      coords: [43.933333 , 10.2 ]
   },
   {
      name: "Venezia",
      coords: [45.4408474 , 12.3155151 ]
   },
   {
      name: "Milano",
      coords: [45.4636707, 9.1881263 ]
   },
   {
      name: "Napoli",
      coords: [40.8517746 , 14.2681244 ]
   }
 ];
 let zoom = 4;
 let maxZoom = 15;

 let map = L.map('map').setView([54.5260, 15.2551], zoom); //Coordinate mappa europa

 L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: maxZoom,
    attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
 }).addTo(map);
 places.forEach((place) => {
    const marker = L.marker(place.coords).addTo(map);
    marker.bindPopup(`<b>${place.name}</b>`);
 });


 /*export const generateMap = () => {
    let places = [
       {
          name: "Piazza del Duomo",
          coords: [45.4639102, 9.1906426],
          dataInc : "27-02-2024",
          oraInc : "8:20",
          mortiInc : 4,
          feritiInc : 4
       }
    ];
 
    
    const zoom = 12;
    const maxZoom = 19;
    let map; 
 
    return {
     
       build: () => {
          map = L.map("map").setView(places[places.length-1].coords, zoom);
       },
 
       //render
       render: () => {
          
          L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
             maxZoom: maxZoom,
             attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          }).addTo(map);
 
          places.forEach((place) => {
             const marker = L.marker(place.coords).addTo(map);
             marker.bindPopup(`<b>${place.name}<br>data: ${place.dataInc}<br>ora: ${place.oraInc}<br>feriti: ${place.feritiInc}<br>morti: ${place.mortiInc}</b>`);
          });
       },
 
 
       addPlace: (place) => {
          places.push(place);
          console.log(places)
       },
       getPlaces: ()=>{
          return places;
       },
       addAllPlaces: (p)=>{
          places = p;
       }
    };
 };
  */