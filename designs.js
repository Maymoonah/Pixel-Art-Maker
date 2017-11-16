//Select color, height, and weight inputs
const colorPicker = $('#colorPicker');
const inputHeight = $('#input_height');
const inputWidth = $('#input_width');

//save color value 
let color = colorPicker.val();
$('#colorPicker').on('change', function() {
	color = $(this).val();
});

//change td background if clicked
$('table').on('click', 'td', function() {
	$(this).css('background-color', color);
});

// When size is submitted by the user, call makeGrid()
$('#sizePicker').on('submit', function(event) {
	event.preventDefault();
	makeGrid();
});

function makeGrid() {
	//remove any existing table before creating new one
	$('#pixel_canvas').empty();

	//get the height and width values from the user input
	height = inputHeight.val();
	width = inputWidth.val();

	//create the table
	for(let i = 0; i < height; i++) {
		$('table').append('<tr></tr>');
		for (let j = 0; j < width; j++) {
			$('tr:last').append('<td></td>');
		}
	}
}

//clear the grid 
$('#reset').on('click', function() {
	$('td').css('background-color', '#fff');
});