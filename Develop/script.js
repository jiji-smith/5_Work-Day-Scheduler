$(document).ready(function () {
    // time set up from moment
    const now = moment().format("MMM Do YYYY");
    $("#currentDay").append(now);

    var currentTime = parseInt(moment().format('H'));

    // Dynamic Time blocks
    //iterate the hours from 9 to 17
    for (var i = 9; i < 18; i++) {

        // create div same as this HTML format

        /* <div class="row">
             <div class="hour" id="9"> 9</div>
             <input class="description"></input>
             <button class="saveBtn"> save</button>
          </div> */

        var newRow = $("<div></div>");
        // add class name "row"
        newRow.addClass("row");
        // make a div for hour
        var hourDiv = $("<div></div>");
        hourDiv.addClass("hour");
        hourDiv.attr("id", i);
        // to make the width same
        if (i<10) {
            hourDiv.text("0" + i + ":00")
        } else {
            hourDiv.text(i + ":00");
        }

        // create input field

        var input = $("<input>");
        input.addClass("description");
        // change the color by time
        if (currentTime === i) {
            input.addClass("present")
        } else if (currentTime > i) {
            input.addClass("past")
        } else if (currentTime < i) {
            input.addClass("future")
        }

        // when you refresh the page it will save the previous data
        input.val(localStorage.getItem(i));

        var saveBtn = $("<button>");
        saveBtn.addClass("saveBtn");
        saveBtn.text("SAVE");

        // put them all in the same row
        newRow.append(hourDiv, input, saveBtn);
        $("#name-table").append(newRow);
    }


    var btnRow = $("<button></button>");
    // add class name "clearBtn"
    btnRow.addClass("clearBtn");
    btnRow.text("Clear All");
    $("body").append(btnRow);


    // button event
    $(".saveBtn").on("click", function () {
        var userTodo = $(this).siblings("input").val();
        // console.log(userTodo);

        var hourFinder = $(this).siblings(".hour").attr("id");
        // console.log(hourFinder);
        localStorage.setItem(hourFinder, userTodo);
    });


    $(".clearBtn").on("click", function () {
        $("input").val('');
        localStorage.clear();
    });

});
