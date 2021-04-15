$('.smallImg img').hover(function() {
    const largeImgLink = $(this).attr('src');
    $('#largeImg').attr('src', largeImgLink);
});