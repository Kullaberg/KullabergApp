$(window).resize(function windowResize() {
  $('.grid').masonry({});
  $('.tabs-wrapper').pushpin({
    top: $('.tabs-wrapper').offset().top,
    offset: $('.nav-wrapper').height(),
  });
});
$(document).ready(function () {
  $('.grid').masonry({});
});

$(window).scroll(function () {
  $('.grid').masonry({});
});
