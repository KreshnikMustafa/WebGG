jQuery("#backtotop").click(function () {
    jQuery("body,html").animate({
        scrollTop: 0
    }, 600);
});
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 150) {
        jQuery("#backtotop").addClass("visible");
    } else {
        jQuery("#backtotop").removeClass("visible");
    }
});
jQuery("#Drejtimetbtn").click(function () {
    var position = $("#Drejtimettop").offset().top;
    jQuery("body,html").animate({
        scrollTop: position
    }, 450);
});
jQuery("#Drejtimetbtn1").click(function () {
    var position = $("#Drejtimettop").offset().top;
    jQuery("body,html").animate({
        scrollTop: position
    }, 450);
});
