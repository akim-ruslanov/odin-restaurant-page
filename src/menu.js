let mains = [{'name': 'Truffle Delight', 'description': 'Tender slices of wagyu beef, caramelized onions, melted brie cheese, and arugula, drizzled with black truffle aioli, served on a toasted brioche bun.', "price": "19.99"}, 
{'name': 'Brooklyn Brisket', 'description': "Slow-roasted brisket marinated in Brooklyn Brewery's finest ale, accompanied by horseradish cream, pickled red cabbage, crispy shallots, and watercress, served on a freshly baked pretzel bun.", "price": "16.99"}, 
{'name': 'Mediterranean Melt', 'description': 'Grilled rosemary-infused chicken breast, roasted red peppers, marinated artichoke hearts, Kalamata olive tapenade, fresh spinach, and feta cheese, nestled between slices of toasted olive bread.', "price": "29.99"}];

let beverages = [{'name': 'Cold Brewed Coffee', 'price': '5.99'}, {'name': 'Organic Herbal Teas', 'price': '5.99'}, {'name': 'Freshly Squeezed Lemonade', 'price': '5.99'}, {'name': 'Artisanal Sodas', 'price': '5.99'}];

function createMenu() {
    const menu = document.createElement("div");
    menu.id = "menuContainer";
    menu.style.display = "none";

    const titleContainer = document.createElement('div');
    titleContainer.className = "title";
    const title = document.createElement('h1');
    title.textContent = "menu";
    titleContainer.append(title);
    menu.append(titleContainer);

    let mainsTitle = document.createElement('h2');
    mainsTitle.textContent = "mains";
    menu.append(mainsTitle);

    let mainsContainer = document.createElement("div");
    mainsContainer.className = "mains-container"


    mains.forEach((main) => {
        const mainContainer = document.createElement('div');
        mainContainer.className = "main-container";
        const mainTitle = document.createElement('h3');
        mainTitle.className="main-title"
        mainTitle.textContent = main["name"];
        const mainDescription = document.createElement("div");
        mainDescription.textContent = main["description"];
        mainDescription.className = "main-description";
        const price = document.createElement("div")
        price.textContent = main["price"];
        price.className = "main-price";

        mainContainer.append(mainTitle, mainDescription, price);
        mainsContainer.append(mainContainer);
    });

    menu.append(mainsContainer);

    let beveragesTitle = document.createElement('h2');
    beveragesTitle.textContent = "beverages";
    menu.append(beveragesTitle);

    
    const beveragesContainer = document.createElement('div');
    beveragesContainer.className = "beverages-container";

    beverages.forEach((beverage) => {
        const beverageContainer = document.createElement('div');
        beverageContainer.className = "beverage-container";
        const beverageTitle = document.createElement('h3');
        beverageTitle.className="beverage-title"
        beverageTitle.textContent = beverage["name"];
        const price = document.createElement("div")
        price.textContent = beverage["price"];
        price.className = "beverage-price";

        beverageContainer.append(beverageTitle, price);
        beveragesContainer.append(beverageContainer);
    });

    menu.append(beveragesContainer);






    return menu;
}



export {createMenu}


