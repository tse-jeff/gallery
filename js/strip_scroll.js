// javascript to generate the scrollable strip of images
// for now use kittens, but later use the images from the
// resources directory

// create the scrollable strip of images
function createStrip() {
    var strip = document.getElementById("strip");
    var img;
    for (var i = 0; i < 10; i++) {
        img = document.createElement("img");
        img.src = "https://placekitten.com/400/400"
        img.alt = "kitten" + i;
        img.className = "strip_image";
        img.onclick = function() {
            changeImage(this);
        };
        strip.appendChild(img);
    }
}