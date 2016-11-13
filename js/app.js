$(function() {
    $('#gallery a ').on('click', function() {

        var image = $(this).find('img').attr('src');

        var imageselected = image.split('thumbnail');
        var fullpath = imageselected[0] + "fullsize" + imageselected[1];
        ///console.log(fullpath);
        $('#galleryModal #imageContainer').attr('src', fullpath);

    });


});

$(document).foundation();
