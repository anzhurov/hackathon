

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$("div.question-pair").click(
    function (event) {
        $(event.currentTarget).find("div.answer").slideToggle(300);
        return false;
    }
);
