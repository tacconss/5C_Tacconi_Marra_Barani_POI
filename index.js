import { generateFetchComponent } from "./fetch.js";
import { createNavigator } from "./navigator.js";

const navigator = createNavigator(document.querySelector("#container"));

const fetchIndex = generateFetchComponent();

fetchIndex.setData("prova", "ciao").then(() => {
    fetchIndex.getData("prova").then(console.log).catch(console.error);
});