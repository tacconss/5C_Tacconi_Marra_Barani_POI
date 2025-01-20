import { generateFetchComponent } from "./fetch.js";
import { createNavigator } from "./navigator.js";

const navigator = createNavigator(document.querySelector("#container"));

const fetchIndex = generateFetchComponent();
