$('.thumbnail-img').hover(function() {
    const imageUrl = $(this).attr('src');
    $('#main-img').attr('src', imageUrl);
});