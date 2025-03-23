import "./styles.css";

import Menu  from "./menu.js";
import Home  from "./home.js";
import Contact from "./contact.js";
initialiseWebsite();
function initialiseWebsite(){
    const content = document.querySelector(".content")
    content.innerHTML = ""; // Clear content
    content.appendChild(Menu());
}