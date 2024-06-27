const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg"
];

const chosenIamge = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src=`img/${chosenIamge}`;

document.body.appendChild(bgImage);