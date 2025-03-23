import chefImageSrc from "./images/chef.jpg"; 
const chefImage = document.createElement("img");
chefImage.src = chefImageSrc;
chefImage.alt = "ChefImage";

function createHome(){
    const main = document.createElement("div"); 

    main.classList.add("home")

    main.appendChild(createParagraph("Best Restaurant in the Country !!"))
    main.appendChild(createParagraph("Making Delicious Exquisite Delicacies since 9/11"))
    main.appendChild(chefImage)
    main.appendChild(createParagraph("Order Online or Visit Us!"))

    return main;
}

function createParagraph(text){
    const para = document.createElement('p');
    para.textContent = text;
    return para;
}

function Home() {
    const main = document.querySelector(".content"); // ✅ This selects the first element with the class 'content'
    main.innerHTML = "";
    main.appendChild(createHome());

    return main;
}

export default Home