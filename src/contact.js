let locations = [
    {
        "name": "Soobway Yaletown",
        "address": "West 69th street",
        "phone": "+1(123)456-7890"
    },
    {
        "name": "Soobway Richmond",
        "address": "East 420nd street",
        "phone": "+1(123)456-7890"
    },
    {
        "name": "Soobway Surrey",
        "address": "711 road",
        "phone": "+1(123)456-7890"
    }
]


function createContact() {
    const contact = document.createElement("div");
    contact.id = "contactContainer";
    contact.style.display = "none";

    const titleContainer = document.createElement('div');
    titleContainer.className = "title";
    const title = document.createElement('h1');
    title.textContent = "Contact Us";
    titleContainer.appendChild(title);
    contact.append(titleContainer);

    const locationsContainer = document.createElement('div');
    locationsContainer.className = "locations-container";

    locations.forEach((location) => {
        const locationContainer = document.createElement('div');
        locationContainer.className = "location-container";
        const nameContainer = document.createElement('div');
        nameContainer.textContent = location['name'];
        const addressContainer = document.createElement('div');
        addressContainer.textContent = location['address'];
        const phoneContainer = document.createElement('div');
        phoneContainer.textContent = location['phone']
        locationContainer.append(nameContainer, addressContainer, phoneContainer);
        locationsContainer.append(locationContainer);
    });
    
    contact.append(locationsContainer);

    return contact;
}

export {createContact}


