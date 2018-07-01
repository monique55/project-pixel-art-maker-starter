// Select color input

$(document).ready(function(){

  $("#sizePicker").submit(function makeGrid(grid){
    var rows=$("#inputHeight").lal();
    var cols=$("#inputWidth").val();
    for (var j=1; j<=cols; j++){
      $("table").append("<tr></tr>");
    for(var i=1; i<=rows; i++);
      $("table").append("<td></td>);
      $("td").attr("class","cell");
    }
  }
  grid.PreventDefault();
  
  $(.cells).click(function(event){
    var paint=$("#colorPicker").val();
    $(event.target).css("background-color",paint);
  });
});
});
