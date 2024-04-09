const cars = [
    { name: 'Nevera', make: 'Rimac', model: 'Nevera', year: 2024, price: '$2,200,000', horsepower: '1813hp', weight: '5100 lb', imageUrl: 'CatalogImages/RimacNivera.jpg', details: 'Details for Nivera' },
    { name: 'CarModelB', make: 'Audi', model: 'RS e-tron GT', year: 2024, price: '$147,100', horsepower: '637hp', weight: '5139 lbs', imageUrl: 'CatalogImages/2024 Audi RS e-tron GT.png', details: 'Details for CarModelB' },
    { name: '2024 Chevrolet Corvette E-Ray', make: 'Chevrolet', model: 'Corvette E-Ray', year: 2024, price: '$104,900', horsepower: '655hp', weight: '3856 lbs', imageUrl: 'CatalogImages/Corvette.png', details: 'Details' },
    { name: '2024 Ferrari 296 GTB ', make: 'Ferrari', model: '296 GTB', year: 2024, price: '$342,205', horsepower: '818hp', weight: '3241 lbs', imageUrl: 'CatalogImages/ferrari 296 gtb.png', details: 'Details' },
    { name: 'Nivera', make: 'Make1', model: 'Model1', year: 345345, price: 'blank', horsepower: '300hp', weight: '1500kg', imageUrl: 'CatalogImages/RimacNivera.jpg', details: 'Details' },
    { name: 'Nivera', make: 'Make1', model: 'Model1', year: 345345, price: 'blank', horsepower: '300hp', weight: '1500kg', imageUrl: 'CatalogImages/RimacNivera.jpg', details: 'Details' },
    { name: 'Nivera', make: 'Make1', model: 'Model1', year: 345345, price: 'blank', horsepower: '300hp', weight: '1500kg', imageUrl: 'CatalogImages/RimacNivera.jpg', details: 'Details' },
    { name: 'Nivera', make: 'Make1', model: 'Model1', year: 345345, price: 'blank', horsepower: '300hp', weight: '1500kg', imageUrl: 'CatalogImages/RimacNivera.jpg', details: 'Details' },
    { name: 'Nivera', make: 'Make1', model: 'Model1', year: 345345, price: 'blank', horsepower: '300hp', weight: '1500kg', imageUrl: 'CatalogImages/RimacNivera.jpg', details: 'Details' },
    { name: 'Nivera', make: 'Make1', model: 'Model1', year: 345345, price: 'blank', horsepower: '300hp', weight: '1500kg', imageUrl: 'CatalogImages/RimacNivera.jpg', details: 'Details' },
    { name: 'Nivera', make: 'Make1', model: 'Model1', year: 345345, price: 'blank', horsepower: '300hp', weight: '1500kg', imageUrl: 'CatalogImages/RimacNivera.jpg', details: 'Details' },
    { name: 'Nivera', make: 'Make1', model: 'Model1', year: 345345, price: 'blank', horsepower: '300hp', weight: '1500kg', imageUrl: 'CatalogImages/RimacNivera.jpg', details: 'Details' },
    { name: 'Nivera', make: 'Make1', model: 'Model1', year: 345345, price: 'blank', horsepower: '300hp', weight: '1500kg', imageUrl: 'CatalogImages/RimacNivera.jpg', details: 'Details' },
    { name: 'Nivera', make: 'Make1', model: 'Model1', year: 345345, price: 'blank', horsepower: '300hp', weight: '1500kg', imageUrl: 'CatalogImages/RimacNivera.jpg', details: 'Details' },
    { name: 'Nivera', make: 'Make1', model: 'Model1', year: 345345, price: 'blank', horsepower: '300hp', weight: '1500kg', imageUrl: 'CatalogImages/RimacNivera.jpg', details: 'Details' },
    // Add more cars as needed
];

//add each car to the catalog page from the list above
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container'); // Assume there's a container div in your HTML

    cars.forEach(car => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        
        itemDiv.innerHTML = `
            <div class="dropdown">
            <img src="${car.imageUrl}" alt="${car.name}">
            <div class="dropdown-content">
                <div>
                    <p class="desc"><strong>Make:</strong> ${car.make}</p>
                    <p class="desc"><strong>Model:</strong> ${car.model}</p>
                    <p class="desc"><strong>Year:</strong> ${car.year}</p>
                </div>
                <div>
                    <p class="desc"><strong>Price:</strong> ${car.price}</p>
                    <p class="desc"><strong>Horsepower:</strong> ${car.horsepower}</p>
                    <p class="desc"><strong>Weight:</strong> ${car.weight}</p>
                </div>
            </div>
        </div>
        `;
        
        container.appendChild(itemDiv);
    });
    





    const searchInput = document.getElementById('search-input');

    searchInput.addEventListener('input', () => {
        const searchText = searchInput.value.toLowerCase();
        const filteredCars = cars.filter(car =>
            car.name.toLowerCase().includes(searchText) ||
            car.make.toLowerCase().includes(searchText) ||
            car.model.toLowerCase().includes(searchText) ||
            car.year.toString().includes(searchText)
        );

        container.innerHTML = ''; // Clear the container before showing filtered results

        filteredCars.forEach(car => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item';

            itemDiv.innerHTML = `
                <div class="dropdown">
                <img src="${car.imageUrl}" alt="${car.name}">
                <div class="dropdown-content">
                    <div>
                        <p class="desc"><strong>Make:</strong> ${car.make}</p>
                        <p class="desc"><strong>Model:</strong> ${car.model}</p>
                        <p class="desc"><strong>Year:</strong> ${car.year}</p>
                    </div>
                    <div>
                        <p class="desc"><strong>Price:</strong> ${car.price}</p>
                        <p class="desc"><strong>Horsepower:</strong> ${car.horsepower}</p>
                        <p class="desc"><strong>Weight:</strong> ${car.weight}</p>
                    </div>
                </div>
            </div>
            `;

            container.appendChild(itemDiv);
        });
    });



//buttons on the top right of the screen for home and sources
document.getElementById("homeButton").onclick = function () {
    location.href = "index2.html";
    console.log("Clicked")
};

document.getElementById("sourceButton").onclick = function () {
    location.href = "sources.html";
    console.log("Clicked")
};

});