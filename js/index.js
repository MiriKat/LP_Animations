(function() {
  var gridWidth;

  gridWidth = $('.grid').width();

  $('select').change(function() {
    var $grid;
    $grid = $('.grid');
    return $grid.removeClass().width(gridWidth).addClass("grid " + ($(this).val()));
  });

}).call(this);