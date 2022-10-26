// Created a function for the current date in a header
function getCurrentDate() {
    var currentDate = dayjs().format("dddd, MMMM DD, YYYY");
    $("#currentDay").text(currentDate);
}
getCurrentDate();

