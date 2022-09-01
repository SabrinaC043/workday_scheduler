//VARIABLE DECLARATIONS
var dayTime = moment().format("MMMM Do YYYY"); //Aug 30 2022 

$('#currentDay').text(dayTime)

// when you click on the save button you need to save the text in local storage 


$('.saveBtn').on('click', function () {

    var key = $(this).parent().attr('id');
    var value = $(this).siblings('.description').val();

    localStorage.setItem(key, value)
});
// add value or grab its value .val 
$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#13 .description').val(localStorage.getItem('13'));
$('#14 .description').val(localStorage.getItem('14'));
$('#15 .description').val(localStorage.getItem('15'));
$('#16 .description').val(localStorage.getItem('16'));
$('#17 .description').val(localStorage.getItem('17'));


// Each () loop

function loop() {
    var current = moment().hours();


    $('.row').each(function () {
        var hour = parseInt($(this).attr('id'));

        if (current > hour) {
            $(this).addClass('past')
        }
        else if (current === hour) {
            $(this).removeClass('past')
            $(this).addClass('present')
        }
        else {
            $(this).removeClass('past')
            $(this).removeClass('present')
            $(this).addClass('future')
        };

    })
};

loop();