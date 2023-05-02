$(document).ready(function() {
  // When an image is clicked, set the lightbox image source and show the lightbox
  $('img[data-bs-toggle="modal"]').click(function() {
    var imageSrc = $(this).attr('src');
    $('#lightbox-image').attr('src', imageSrc);
    $('#lightbox').modal('show');
  });
});
