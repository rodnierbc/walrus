$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
  $(".clickable-gallery").click(function() {
    $("#gallery-show").toggle("fadeout");
    $("#gallery-hide").toggle();
    $("#walrus-pictures").toggle("fadeToggle");
  });
});
