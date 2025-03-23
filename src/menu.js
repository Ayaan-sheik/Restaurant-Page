import carneSrc from "./images/Dishes/carne.png";
import coloratoSrc from "./images/Dishes/colorato.png";
import cremaSrc from "./images/Dishes/crema.png";
import disgustosoSrc from "./images/Dishes/disgustoso.png";
import gamberiSrc from "./images/Dishes/gamberi.png";
import pepeSrc from "./images/Dishes/pepe.png";
import salsicciaSrc from "./images/Dishes/salsiccia.png";
import pomodoroSrc from "./images/Dishes/pomodoro.png";


const carneImage = document.createElement("img");
carneImage.src = carneSrc;
carneImage.alt = "Carne Pizza";

const coloratoImage = document.createElement("img");
coloratoImage.src = coloratoSrc;
coloratoImage.alt = "Colorato Pizza";

const cremaImage = document.createElement("img");
cremaImage.src = cremaSrc;
cremaImage.alt = "Crema Pizza";

const disgustosoImage = document.createElement("img");
disgustosoImage.src = disgustosoSrc;
disgustosoImage.alt = "Disgustoso Pizza";

const gamberiImage = document.createElement("img");
gamberiImage.src = gamberiSrc;
gamberiImage.alt = "Gamberi Pizza";

const pepeImage = document.createElement("img");
pepeImage.src = pepeSrc;
pepeImage.alt = "Pepe Pizza";

const salsicciaImage = document.createElement("img");
salsicciaImage.src = salsicciaSrc;
salsicciaImage.alt = "Salsiccia Pizza";

const pomodoroImage = document.createElement("img");
pomodoroImage.src = pomodoroSrc;
pomodoroImage.alt = "Pomodoro Pizza";



function createMenu(){
    const menu = document.createElement("div");
    menu.classList.add("menu"); // Removed the dot before "menu"
    
    // Add a menu title
    const menuTitle = document.createElement("h2");
    menuTitle.classList.add("menuTitle");
    menuTitle.textContent = "Our Signature Pizzas";
    menu.appendChild(menuTitle);

    menu.appendChild(createItem("Salsciccia",
        "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil",
        salsicciaImage));

    menu.appendChild(createItem("Gamberi",
        "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil",
        gamberiImage));

    menu.appendChild(createItem("Pepe",
        "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil",
        pepeImage));

    menu.appendChild(createItem("Disgustoso",
        "Tomato sauce, Bacon, Pineapple, Olives, Basil",
        disgustosoImage));
    
    menu.appendChild(createItem("Colorato",
        "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil",
        coloratoImage));

    menu.appendChild(createItem("Pomodoro",
        "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli",
        pomodoroImage));

    menu.appendChild(createItem("Crema",
        "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil",
        cremaImage));

    menu.appendChild(createItem("Carne",
        "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli",
        carneImage));
    
        return menu
}

function createItem(dishName,Description,image){
    const item = document.createElement("div");
    item.classList.add("menuItem");
   
    // Clone the image to avoid moving it from one place to another
    const imgClone = image.cloneNode(true);
    item.appendChild(imgClone);
   
    // Create proper heading for dish name
    const nameHeading = document.createElement("h3");
    nameHeading.textContent = dishName;
    item.appendChild(nameHeading);
   
    // Create proper paragraph for description
    const descPara = document.createElement("p");
    descPara.textContent = Description;
    item.appendChild(descPara);
   
    return item;
}

function Menu(){
    const main = document.querySelector(".content"); // ✅ This selects the first element with the class 'content'
    main.innerHTML = "";
    main.appendChild(createMenu());

    return main;
}

export default Menu