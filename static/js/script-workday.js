// variable to store and loop through scheduler
var myDay = [
    {
        id: "1",
        hour: "06",
        time: "06",
        meridiem: "am",
        reminder: "WORK"
    },
    {
        id: "2",
        hour: "07",
        time: "07",
        meridiem: "am",
        reminder: "WORK"
    },
    {
        id: "3",
        hour: "08",
        time: "08",
        meridiem: "am",
        reminder: "WORK"
    },
    {
        id: "4",
        hour: "09",
        time: "09",
        meridiem: "am",
        reminder: "WORK"
    },
    {
        id: "5",
        hour: "10",
        time: "10",
        meridiem: "am",
        reminder: "WORK"
    },
    {
        id: "6",
        hour: "11",
        time: "11",
        meridiem: "am",
        reminder: "WORK"
    },
    {
        id: "7",
        hour: "12",
        time: "12",
        meridiem: "pm",
        reminder: "WORK"
    },
    {
        id: "8",
        hour: "01",
        time: "13",
        meridiem: "pm",
        reminder: "WORK"
    },
    {
        id: "9",
        hour: "02",
        time: "14",
        meridiem: "pm",
        reminder: "LEARN"
    },
    {
        id: "10",
        hour: "03",
        time: "15",
        meridiem: "pm",
        reminder: "LEARN"
    },
    {
        id: "11",
        hour: "04",
        time: "16",
        meridiem: "pm",
        reminder: "PROGRAM"
    },
    {
        id: "12",
        hour: "05",
        time: "17",
        meridiem: "pm",
        reminder: "PROGRAM"
    },



    {
        id: "13",
        hour: "06",
        time: "18",
        meridiem: "pm",
        reminder: "PROGRAM"
    },
    {
        id: "14",
        hour: "07",
        time: "19",
        meridiem: "pm",
        reminder: "COURSES"
    },
    {
        id: "15",
        hour: "08",
        time: "20",
        meridiem: "pm",
        reminder: "COURSES"
    },
    {
        id: "16",
        hour: "09",
        time: "21",
        meridiem: "pm",
        reminder: "COURSES"
    },
    {
        id: "17",
        hour: "10",
        time: "22",
        meridiem: "pm",
        reminder: "COURSES"
    },
    {
        id: "18",
        hour: "11",
        time: "23",
        meridiem: "pm",
        reminder: "TRAIN"
    },
    {
        id: "19",
        hour: "12",
        time: "24",
        meridiem: "pm",
        reminder: "TRAIN"
    },
    
]

// gets data for the header date
function getHeaderDate() {
    var currentHeaderDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentHeaderDate);
}

// saves data to localStorage
function saveReminders() {
    localStorage.setItem("myDay", JSON.stringify(myDay));
}

// sets any data in localStorage to the view
function displayReminders() {
    myDay.forEach(function (_thisHour) {
        $(`#${_thisHour.id}`).val(_thisHour.reminder);
    })
}

// sets any existing localStorage data to the view if it exists
function init() {
    var storedDay = JSON.parse(localStorage.getItem("myDay"));

    if (storedDay) {
        myDay = storedDay;
    }

    saveReminders();
    displayReminders();
}

// loads header date
getHeaderDate();

// creates the visuals for the scheduler body
myDay.forEach(function(thisHour) {
    // creates timeblocks row
    var hourRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hourRow);

    // creates time field
    var hourField = $("<div>")
        .text(`${thisHour.hour}${thisHour.meridiem}`)
        .attr({
            "class": "col-md-2 hour"
    });

    // creates schdeduler data
    var hourPlan = $("<div>")
        .attr({
            "class": "col-md-9 description p-0"
        });
    var planData = $("<textarea>");
    hourPlan.append(planData);
    planData.attr("id", thisHour.id);
    if (thisHour.time < moment().format("HH")) {
        planData.attr ({
            "class": "past", 
        })
    } else if (thisHour.time === moment().format("HH")) {
        planData.attr({
            "class": "present"
        })
    } else if (thisHour.time > moment().format("HH")) {
        planData.attr({
            "class": "future"
        })
    }

    // creates save button
    var saveButton = $("<i class='far fa-save fa-lg'></i>")
    var savePlan = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"
    });
    savePlan.append(saveButton);
    hourRow.append(hourField, hourPlan, savePlan);
})

// loads any existing localstorage data after components created
init();


// saves data to be used in localStorage
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var saveIndex = $(this).siblings(".description").children(".future").attr("id");
    myDay[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
    console.log(saveIndex);
    saveReminders();
    displayReminders();
})
