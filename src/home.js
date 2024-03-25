import logo from './logo.png';

function createHome() {
    const home = document.createElement('div');
    home.className = 'home';
    home.id = 'homeContainer';
    home.style.display = "none";

    const titleContainer = document.createElement('div');
    titleContainer.className = "title";
    const title = document.createElement('h1');
    title.textContent = "Soobway";
    titleContainer.appendChild(title);

    const logoImg = new Image();
    logoImg.src = logo;
    titleContainer.append(logoImg);

    const descriptionContainer = document.createElement('div');
    descriptionContainer.className = "description";
    const description = document.createElement('p');
    description.textContent = "Welcome to Soobway where artisanal sandwiches meet Brooklyn's culinary flair. Our cozy yet modern space boasts exposed brick walls adorned with local art, creating a vibrant ambiance for your dining pleasure. \n \n" +
    "Indulge in our meticulously crafted sandwiches, featuring premium meats, cheeses, and house-made condiments sourced from local purveyors. Pair your sandwich with a refreshing craft beer, fine wine, or specialty soda.\n \n" + 
    "Join us at Brooklyn Bites and experience the artistry of sandwich-making in the heart of Brooklyn's culinary scene.";
    descriptionContainer.appendChild(description);

    const hoursContainer = document.createElement('div');
    hoursContainer.className = "hours";
    const hoursTitle = document.createElement('h2');
    hoursTitle.textContent = "Hours";
    const hoursList = document.createElement('ul');
    const mon = document.createElement('li');
    mon.textContent = "MON: 8AM-8PM";
    const tue = document.createElement('li');
    tue.textContent = "TUE: 8AM-8PM";
    const wed = document.createElement('li');
    wed.textContent = "WED: 8AM-8PM";
    const thur = document.createElement('li');
    thur.textContent = "THUR: 8AM-8PM";
    const fri = document.createElement('li');
    fri.textContent = "FRI: 10AM-10PM";
    hoursList.append(hoursTitle, mon, tue, wed, thur, fri);

    const locationContainer = document.createElement('div');
    locationContainer.className = "location"
    const locationTitle = document.createElement('h2');
    locationTitle.textContent = "location";
    const location = document.createTextNode("Marine Drive 22, Vancouver, BC")
    locationContainer.append(locationTitle, location);

    home.append(titleContainer, descriptionContainer, hoursList, locationContainer);

    return home

}

export {createHome}


