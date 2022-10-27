// header current date
$(document).ready(function () {
    function getCurrentDate() {
        var currentDate = dayjs().format("dddd, MMMM DD, YYYY");
        $("#currentDay").text(currentDate);
    }
    getCurrentDate();

    // variable for each time block
    var nineAm = localStorage.getItem('9am');
    var tenAm = localStorage.getItem('10am');
    var elevenAm = localStorage.getItem('11am');
    var twelvePm = localStorage.getItem('12pm');
    var onePm = localStorage.getItem('1pm');
    var twoPm = localStorage.getItem('2pm');
    var threePm = localStorage.getItem('3pm');
    var fourPm = localStorage.getItem('4pm');
    var fivePm = localStorage.getItem('5pm');

    $('#9am').val(nineAm);
    $('#10am').val(tenAm);
    $('#11am').val(elevenAm);
    $('#12pm').val(twelvePm);
    $('#1pm').val(onePm);
    $('#2pm').val(twoPm);
    $('#3pm').val(threePm);
    $('#4pm').val(fourPm);
    $('#5pm').val(fivePm);

    // save the input to localStorage
    $(".saveBtn").on("click", function () {
        var siblings = $(this).siblings(".description");
        var value = siblings.val();
        var id = siblings.attr("id")
        localStorage.setItem(id, value);
    })
    // apply color to indicate past, present and future entry
    var timeBlocks = $(".time-block");
    var hour = dayjs().hour();
    for (var i = 0; i < timeBlocks.length; i++) {
        var time = parseInt(timeBlocks[i].getAttribute("data-hour"));
        var timeBlock = timeBlocks[i];
        if (hour < time) {
            timeBlock.classList.add("future")
        }
        else if (hour > time) {
            timeBlock.classList.add("past")
        }
        else if (hour === time) {
            timeBlock.classList.add("present")
        }
    }

}
)