import addressImageSrc from "./images/restaurant-location.png"; 
const addressImage = document.createElement("img");
addressImage.src = addressImageSrc;
addressImage.alt = "adressImage";

function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("Contact");
    
    // Add phone section
    contact.appendChild(createHeader("Phone No:"));
    
    // First phone number with separated icon and text
    const nos1 = document.createElement("p");
    nos1.classList.add("phone-number");
    const phoneIcon1 = document.createElement("span");
    phoneIcon1.textContent = "📞";
    phoneIcon1.classList.add("phone-icon");
    const phoneText1 = document.createElement("span");
    phoneText1.textContent = "+91 98765 43210";
    phoneText1.classList.add("number-text");
    nos1.appendChild(phoneIcon1);
    nos1.appendChild(document.createTextNode(" ")); // Space between icon and number
    nos1.appendChild(phoneText1);
    
    // Second phone number with separated icon and text
    const nos2 = document.createElement("p");
    nos2.classList.add("phone-number");
    const phoneIcon2 = document.createElement("span");
    phoneIcon2.textContent = "📞";
    phoneIcon2.classList.add("phone-icon");
    const phoneText2 = document.createElement("span");
    phoneText2.textContent = "+91 87654 32109";
    phoneText2.classList.add("number-text");
    nos2.appendChild(phoneIcon2);
    nos2.appendChild(document.createTextNode(" ")); // Space between icon and number
    nos2.appendChild(phoneText2);
    
    // Add phone numbers to contact
    contact.appendChild(nos1);
    contact.appendChild(nos2);
    
    // Add address section
    contact.appendChild(createHeader("Address:"));
    contact.appendChild(addressImage);
    
    return contact;
}

function createHeader(text){
    const Header = document.createElement("h3");
    Header.textContent = text;

    return Header;
}

function Contact(){
    return createContact();
}

export default Contact;