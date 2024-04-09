document.addEventListener('DOMContentLoaded', function () {
    var imageContainer = document.getElementById('bg-image-container');
    var images = [
        'BackgroundImages/gt4.png',
        'BackgroundImages/MclarenBackground.png',
        'BackgroundImages/bmw.png',
        'BackgroundImages/aston.png',
        'BackgroundImages/Koenigsegg.png',

        
        // ... add more as needed
    ];
    var currentIndex = 0;
    
    function changeBackgroundImage() {
        imageContainer.style.backgroundImage = 'url("' + images[currentIndex] + '")';
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Initially set the background image.
    changeBackgroundImage();

    // Change the image every 3 seconds.
    setInterval(changeBackgroundImage, 3000);
});

document.getElementById("exploreButton").onclick = function () {
    location.href = "catalog.html";
    console.log("Clicked")
};

