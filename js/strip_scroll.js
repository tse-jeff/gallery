// javascript to generate the scrollable strip of images
// for now use kittens, but later use the images from the
// resources\pictures directory
pictures = []
// var fs = require('fs');

// function readFiles(dirname, onFileContent, onError) {
//   fs.readdir(dirname, function(err, filenames) {
//     if (err) {
//       onError(err);
//       return;
//     }
//     filenames.forEach(function(filename) {
//       fs.readFile(dirname + filename, 'utf-8', function(err, content) {
//         if (err) {
//           onError(err);
//           return;
//         }
//         onFileContent(filename, content);
//       });
//     });
//   });
// }

// var data = {};
// readFiles('dirname/', function(filename, content) {
//   data[filename] = content;
// }, function(err) {
//   throw err;
// });

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
            // enlarge image while blurring the rest of the page
            // and display the image name

        };
        strip.appendChild(img);
    }
}

window.onload = createStrip;