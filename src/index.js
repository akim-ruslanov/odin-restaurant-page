import {createHome} from './home';
import { createMenu } from './menu';
import { createContact } from './contact';
import './style.css'




document.addEventListener('click', (event) => {
    switch (event.target.id) {
        case "home":
            if (currentPage.id !== "homeContainer") {
                console.log(currentPage.id);
                console.log("!!!!!!")
                currentPage.style.display = "none";
            }
            currentPage = document.getElementById('homeContainer');
            currentPage.style.display = null;
            break;
        case "menu":
            console.log("menu");
            console.log(currentPage.id);
            if (currentPage.id !== "menuContainer") {
                currentPage.style.display = "none";
            }
            currentPage = document.getElementById('menuContainer');
            currentPage.style.display = null;
            break;
        case "contact":
            console.log("contact");
            if (currentPage.id !== "contactContainer") {
                currentPage.style.display = "none";
            }
            currentPage = document.getElementById('contactContainer');
            currentPage.style.display = null;
            break;
    }
});

const content = document.getElementById('content');
const home = createHome();
content.appendChild(createHome());
content.append(createMenu());
content.append(createContact());
// let currentPage = document.getElementById('homeContainer');
// let currentPage = document.getElementById('menuContainer');
let currentPage = document.getElementById('contactContainer');
currentPage.style.display = null;

