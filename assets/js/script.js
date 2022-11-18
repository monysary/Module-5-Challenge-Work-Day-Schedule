$(document).ready(function runFunction() {
  // Button click event to store entry into local storage
  $("#time-block-container").on("click", ".btn", function() {
    // Assigning time block and user input variable
    var userInput = $(this).siblings(".description").val();
    var timeBlock = "hour" + $(this).parent().attr("id");

    // Add to time block and user input into local storage
    localStorage.setItem(timeBlock.trim(), userInput.trim());
  });

  // Assign the current hour to a variable
  var currentHour = dayjs().hour();

  // Checks the current hour and set class of time block to past, present, or future every second
  setInterval(function() {
    $(".time-block").each(function() {
      if (Number($(this).attr("id")) < currentHour) {
        $(this).attr("class", "row time-block past");
      } else if (Number($(this).attr("id")) === currentHour) {
        $(this).attr("class", "row time-block present");
      } else {
        $(this).attr("class", "row time-block future");
      }
    });
  }, 1000);

  // Displays user's saved entry corresponding to the time block it was first entered under
  // Saved input is saved and called from local storage
  for (var i = 9; i < 18; i++) {
    $("#"+i).children(".description").text(localStorage.getItem("hour"+i)) 
  }

  // Display the current date in the header of the page.
  $("#currentDay").text(dayjs().format("dddd, MMMM DD, YYYY"));
});