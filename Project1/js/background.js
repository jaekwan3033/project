// Array of name of background images
const images = [
    "img/image1.jpg",
    "img/image2.jpg",
    "img/image3.jpg"
];

// Choosing images randomly from array of images
const chosenImage = images[Math.floor(Math.random()*images.length)];

// applying back
document.body.style.backgroundImage=`url(${chosenImage})`;