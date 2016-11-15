function getHeight() {
    var height = $('section.promo-video, section.promo').height();
    $('#overlay').css({
        'height': height + 'px'
    });
    ////console.log(height);

}


$(function() {
    getHeight();


    $('#gallery a ').on('click', function() {

        var image = $(this).find('img').attr('src');

        var imageselected = image.split('thumbnail');
        var fullpath = imageselected[0] + "fullsize" + imageselected[1];
        ///console.log(fullpath);
        $('#galleryModal #imageContainer').attr('src', fullpath);

    });


});

$(window).resize(function() {
    getHeight();

});
$(document).foundation();
