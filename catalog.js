const cars = [
    { name: 'Nevera', make: 'Rimac', model: 'Nevera', year: 2024, price: '$2,200,000', horsepower: '1813hp', weight: '5100 lb', imageUrl: 'CatalogImages/RimacNivera.jpg', details: 'Details for Nivera' },
    { name: 'CarModelB', make: 'Audi', model: 'RS e-tron GT', year: 2024, price: '$147,100', horsepower: '637hp', weight: '5139 lbs', imageUrl: 'CatalogImages/2024 Audi RS e-tron GT.png', details: 'Details for CarModelB' },
    { name: '2024 Chevrolet Corvette E-Ray', make: 'Chevrolet', model: 'Corvette E-Ray', year: 2024, price: '$104,900', horsepower: '655hp', weight: '3856 lbs', imageUrl: 'CatalogImages/Corvette.png', details: 'Details' },
    { name: '2024 Ferrari 296 GTB ', make: 'Ferrari', model: '296 GTB', year: 2024, price: '$342,205', horsepower: '818hp', weight: '3241 lbs', imageUrl: 'CatalogImages/ferrari 296 gtb.png', details: 'Details' },
    { name: 'Ferrari 812 Competizione', make: 'Ferrari', model: '812 Competizione', year: 2024, price: '$598,513', horsepower: '818hp', weight: '3510 lbs', imageUrl: 'CatalogImages/812.png', details: 'Details' },
    { name: 'Koenigsegg Jesko', make: 'Koenigsegg', model: 'Jesko', year: 2024, price: ' $3,000,000', horsepower: '1602hp', weight: '3131 lbs', imageUrl: 'CatalogImages/Jesko.png', details: 'Details' },
    { name: 'Ferrari SF90 Stradale', make: 'Ferrari', model: 'SF90 Stradale', year: 2024, price: '$995,000', horsepower: '986hp', weight: '3913 lbs', imageUrl: 'CatalogImages/sf90.png', details: 'Details' },
    { name: 'Koenigsegg Regera', make: 'Koenigsegg', model: 'Regera', year: 2024, price: '$1,890,000', horsepower: '1489hp', weight: '3505 lbs', imageUrl: 'CatalogImages/regera.png', details: 'Details' },
    { name: '2024 Lamborghini Revuelto', make: 'Lamborghini', model: 'Revuelto', year: 2024, price: '$604,363', horsepower: '1001hp', weight: ' 3907 lbs', imageUrl: 'CatalogImages/Revuelto.jpg', details: 'Details' },
    { name: '2024 Lotus Evija', make: 'Lotus', model: 'Evija', year: 2024, price: '$2,300,000', horsepower: '2011hp', weight: '4160 lbs', imageUrl: 'CatalogImages/evija.png', details: 'Details' },
    { name: 'Lucid Air Sapphire', make: 'Lucid', model: 'Air Sapphire', year: 2024, price: '$249,000', horsepower: '1200hp', weight: '5290 lbs', imageUrl: 'CatalogImages/lucid.png', details: 'Details' },
    { name: '2024 Mercedes-AMG GT 63 S E', make: 'Mercedes', model: 'AMG GT 63 S E', year: 2024, price: '$136,050', horsepower: '831hp', weight: '5082 lbs', imageUrl: 'CatalogImages/benz.png', details: 'Details' },
    { name: '2024 Mercedes-AMG One', make: 'Mercedes', model: 'AMG One', year: 2024, price: '$5,450,000', horsepower: '1049hp', weight: '3737 lbs', imageUrl: 'CatalogImages/amgone.jpg', details: 'Details' },
    { name: '2024 Pininfarina Battista', make: 'Pininfarina', model: 'Battista', year: 2024, price: '$2,200,000', horsepower: '1877hp', weight: '2,548 lb', imageUrl: 'CatalogImages/battista.png', details: 'Details' },
    { name: '2024 Aston Martin Valkyrie', make: 'Aston Martin', model: 'Valkyrie', year: 2024, price: '$3,500,000', horsepower: '1139hp', weight: '2271 lbs', imageUrl: 'CatalogImages/aston.png', details: 'Details' },
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
