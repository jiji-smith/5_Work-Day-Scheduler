$(document).ready(function () {
    // time set up from moment
    const now = moment().format('MMMM Do YYYY');
    $("#currentDay").append(now);


    // Dynamic Time blocks
    //iterate the hours from 9 to 17
   for (var i=9; i < 18; i++){

    // create div same as this HTML

     /* <div class="row">
      <div class="hour" id="9"> 9</div>
      <input class="description"></input>
      <button class="saveBtn"> save</button>
    </div> */

    var newRow = $("<div></div>");
    // add class name "row"
    newRow.addClass("row");
    //
    var hourDiv = $("<div></div>");
    hourDiv.addClass("hour");
    hourDiv.attr("id",i);
    hourDiv.text(i + ":00");

    var input = $("<input>");
    input.addClass("description");
    input.addClass("present");
    // when you refresh
    input.val(localStorage.getItem(i));

    var saveBtn = $("<button>");
    saveBtn.addClass("saveBtn");
    saveBtn.text("SAVE");

    newRow.append(hourDiv, input, saveBtn);
    $("#name-table").append(newRow);
   }

   $(".saveBtn").on("click", function(){
    var userTodo = $(this).siblings("input").val();
    console.log(userTodo);

    var hourFinder = $(this).siblings(".hour").attr("id");
    // console.log(hourFinder);
    localStorage.setItem(hourFinder, userTodo);


   });

});
