import chefImageSrc from "./images/chef.jpg"; 

function createHome(){
    const main = document.createElement("div"); 
    main.classList.add("home");

    const chefImage = document.createElement("img");
    chefImage.src = chefImageSrc;
    chefImage.alt = "Chef Image";

    main.appendChild(createParagraph("Best Restaurant in the Country !!"));
    main.appendChild(createParagraph("Making Delicious Exquisite Delicacies since 9/11"));
    main.appendChild(chefImage);
    main.appendChild(createParagraph("Order Online or Visit Us!"));

    return main; // ✅ Return the newly created element
}

function createParagraph(text){
    const para = document.createElement('p');
    para.textContent = text;
    return para;
}

// ✅ Home should return the new page, not modify `.content`
function Home() {
    return createHome(); 
}

export default Home;
