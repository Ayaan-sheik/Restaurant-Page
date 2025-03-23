import "./styles.css";
import Menu from "./menu.js";
import Home from "./home.js";
import Contact from "./contact.js";

document.addEventListener('DOMContentLoaded', () => {
    const homeTab = document.querySelector(".Home");
    const menuTab = document.querySelector(".Menu");
    const contactTab = document.querySelector(".contact"); // Ensure correct class name
    
    const content = document.querySelector(".content");
    
    if (!homeTab || !menuTab || !contactTab || !content) {
        console.error("Could not find navigation elements or content container.");
        return;
    }

    // Show home tab by default
    showTab("home");

    homeTab.addEventListener('click', () => showTab("home"));
    menuTab.addEventListener('click', () => showTab("menu"));
    contactTab.addEventListener('click', () => showTab("contact"));

    function showTab(tabName) {
        const content = document.querySelector(".content");
        content.innerHTML = "";
    
        let newPage;
        switch (tabName) {
            case "home":
                newPage = Home();
                break;
            case "menu":
                newPage = Menu();
                break;
            case "contact":
                newPage = Contact();
                break;
            default:
                newPage = Home();
        }
        
        if (newPage) {
            content.appendChild(newPage); // ✅ Works now because Home() returns a new element
        } else {
            console.error(`Failed to load ${tabName} page.`);
        }
    }
    if (newPage) {
        content.appendChild(newPage); // ✅ Works now because Home() returns a new element
    } else {
        console.error(`Failed to load ${tabName} page.`);
    }
});
