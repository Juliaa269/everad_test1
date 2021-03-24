function date_time()
{
    let current_year = new Date();
    var year = current_year.getFullYear();

    return "Copyright " + year;
}

document.getElementById('year').innerHTML = date_time();

$(document).ready(function() {
    $('.slider').slick({
        arrows: true,
        dots: true,
        speed: 1000,
        easing: 'ease',
        infinite: true,
        autoplay: false,
        autoplaySpeed: 500,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: true,
        touchMove: true,
        swipe: true,
    });
});