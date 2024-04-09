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
    const container = document.querySelector('.container');
    const searchInput = document.getElementById('search-input');
    const sortOption = document.getElementById('sort-option');

    function parseValue(value) {
        return Number(value.replace(/[^0-9.-]+/g, ""));
    }

    function displayCars(carsToDisplay) {
        container.innerHTML = ''; // Clear the container before showing filtered results
        carsToDisplay.forEach(car => {
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
    }

    function sortCars(sortBy) {
        cars.sort((a, b) => {
            let valA, valB;
            switch (sortBy) {
                case 'price-asc':
                    valA = parseValue(a.price);
                    valB = parseValue(b.price);
                    break;
                case 'price-desc':
                    valA = parseValue(b.price);
                    valB = parseValue(a.price);
                    break;
                case 'hp-asc':
                    valA = parseValue(a.horsepower);
                    valB = parseValue(b.horsepower);
                    break;
                case 'hp-desc':
                    valA = parseValue(b.horsepower);
                    valB = parseValue(a.horsepower);
                    break;
                default:
                    return 0;
            }
            return valA - valB;
        });

        displayCars(cars);
    }

    sortOption.addEventListener('change', () => {
        sortCars(sortOption.value);
    });

    searchInput.addEventListener('input', () => {
        const searchText = searchInput.value.toLowerCase();
        const filteredCars = cars.filter(car =>
            car.name.toLowerCase().includes(searchText) ||
            car.make.toLowerCase().includes(searchText) ||
            car.model.toLowerCase().includes(searchText) ||
            car.year.toString().includes(searchText)
        );

        displayCars(filteredCars);
    });

    displayCars(cars); // Initial display of cars

    // Navigation button events
    document.getElementById("homeButton").onclick = function () {
        location.href = "index.html";
    };

    document.getElementById("sourceButton").onclick = function () {
        location.href = "sources.html";
    };
});
