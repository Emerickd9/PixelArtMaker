//Using JQuery
//Akano Benjamin Andela Challlenge
//
//Initialize an instance of the page to start manipulation
$('document').ready(function () { 
  $('#sizePicker').submit(function makeGrid(grid) {  // Using events listeners and creating the makeGrid function upon click of the button 'Submit'
   
    // Lets the grid be cleared when hitting the 'Submit' button again
    $('table tr').remove(); 
    var row_input = $('#inputHeight').val(); // Allows the user to add a chosen value inside the input box to add rows 
    var col_input = $('#inputWeight').val(); // Allows the user to add a chosen value inside the 2nd input box to add columns
    
    //this loop creates the table row and columns based on user input from above
    for (var i = 1; i <= row_input; i++) { 
      $('table').append("<tr></tr>"); // This loop creates a row of cells
      for (var j = 1; j <= col_input; j++) {
        $('tr:last').append("<td></td>"); // This loop adds a cell after every row
        
        // For every 'td', a class of 'cells' is created which will be used as containers to receive the color picked
        $('td').attr("class", 'cells') 
      }
    }
    // Prevents the grid to be deleted after it is created
    grid.preventDefault(); 

    // The function allows the user to color a cell on click
    $('.cells').click(function (event) { 
      var paint = $('#colorPicker').val();
      
      // Lets the chosen color on a click event to be added to the grid
      $(event.target).css('background-color', paint); 
    });
  }); 
});

