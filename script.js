console.log("hello");

$(function() {
    $("#currentDay").text(moment().format("dddd MMMM Do YYYY, h:mm a"));
    var currentTime = parseInt(moment().format("HH"));
  
  var timeDisplay = [9, 10, 11, 12, 1, 2, 3, 4, 5];
  for (var i = 0; i < timeDisplay.length; i++) {
    
    console.log(timeDisplay[i]);

    //Variables for the function

    var row = $("<div>");
    var hour = $("<div>");
    var description = $("<textarea>");
    var saveBtn = $("<button>");

    //CSS classes
    hour.addClass("hour col-sm-1");
    description.addClass("description col-sm-10");
    saveBtn.addClass("saveBtn col-sm-1 fas fa-save fa-lg");
    row.addClass("row time-block");
    hour.text(timeDisplay[i]);
    row.append(hour);
    row.append(description);
    row.append(saveBtn);
    $(".container").append(row);

    //Rows change color based on time
    if (timeDisplay[i] < currentTime) {
      description.addClass("past");
   
      console.log(currentTime);
    } else if (timeDisplay[i] === currentTime) {
     
      description.addClass("present");
    } else {
     
      description.addClass("future");
    }
  }

  

});




  
  