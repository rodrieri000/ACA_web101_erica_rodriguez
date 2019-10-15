let $block = null;

$('[data-row]').click(function() {
  if ($block) {
    $(this).append($block);
    $block = null;
  } else {
    $block = $(this).children().last().detach();
  }
})


// I couldn't get this script to work :(
//$('[data-color]').draggable({
//  revert: "invalid"
//});
//$('[data-row]').droppable({
//drop: function(event, ui) {
//  $(ui.draggable).appendTo(this).attr('style','position: "relative"'); 
//}
//});
