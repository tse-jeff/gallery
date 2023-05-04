# gallery
This is a gallery website for my final project of the Intro to Web Dev course.

### Documentation of your process:
The website was basically a complete redesign of my midterm project. I decided 
use to use bootstrap to more easily organize and create a responsive website. 
So during the process, I looked through the bootstrap documentation and 
created a carousel in order to display my images while comparing the ones I 
thought were similar. I also wanted to create a modal so I tackled that 
with javascript.

### Explanation of some of your source code (not the entire site but sometime you found challenging or interesting you’d like to share)
Some of the source code I found interesting was the javascript for the modal. 
I used jQuery in order to determine which image was clicked and then displayed 
that same image using the source of the clicked image.

Here is the code that I mentioned:
```javascript
$(document).ready(function() {
  // When an image is clicked, set the lightbox image source and show the lightbox
  $('img[data-bs-toggle="modal"]').click(function() {
    var imageSrc = $(this).attr('src');
    $('#lightbox-image').attr('src', imageSrc);
    $('#lightbox').modal('show');
  });
});
```

### Any issues you encountered
Some issues that I encountered were trying to figure out how to override 
someof the bootstrap styles. This is especially the case when it came to 
the carousel buttons. I wanted to move the button positions past the 
images on the right and left. The positioning of he images was also 
slightly confusing, but I was able to figure it out.

### What you learned in order to accomplish your project
I learned how to use bootstrap and how to use some of the components. I got 
a little more used to the builtin boostrap classes. Another thing I learned 
was how to use jQuery to manipulate the DOM. I used it to create the modal 
in this project.

### Next steps – if you had more time and more tools, what would you do next?
If I had more time on this project, I would try to create more dynamic 
content. Something like brightening up the side of the carousel as the 
cursor got closer. Also maybe adding a bit more content to the website 
so there is more to scroll through.
