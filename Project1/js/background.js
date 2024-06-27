// Array of name of background images
const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg"
];

// Choosing images randomly from array of images
const chosenIamge = images[Math.floor(Math.random()*images.length)];

// Making a <img> tag
const bgImage = document.createElement("img");
// Setting src attribute as chosen random images
bgImage.src=`img/${chosenIamge}`;
// appending <img tag> to HTML
document.body.appendChild(bgImage);