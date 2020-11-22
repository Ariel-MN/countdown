// Get day number of the week, 4 is Thursday and 6 is Saturday
var dateObj = new Date(); // For testing use Date("Dec 30, 2021 15:30:00")
var weekdayNumber = dateObj.getDay();

// Run ContDown if is Thursday or Saturday
var countDownDate = null;
if (weekdayNumber == 4) {
    // Thursday time to count down
    var countDownDate = dateObj;
    countDownDate.setHours(19,30,0); // Meeting starts at 7:30 pm
} else if (weekdayNumber == 6) {
    // Saturday time to count down
    var countDownDate = dateObj;
    countDownDate.setHours(17,30,0); // Meeting starts at 5:30 pm
} else {
    document.getElementById("count").innerHTML = 'No hay una reunión programada para hoy';
}

// ContDown
if (countDownDate) {
    
    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();
    
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
    
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        // Display the result in the element with id="count"
        if (days != 0) { 
            document.getElementById("count").innerHTML = days + " dias " + hours + "h " + minutes + "m " + seconds + "s ";
        } else if (hours != 0) {
            document.getElementById("count").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
        } else {
            document.getElementById("count").innerHTML = minutes + "m " + seconds + "s ";
            if (minutes < 3) {
                document.getElementById("alert").innerHTML = "Dentro de poco la reunión empieza";
            }
        }

        // If the count down is finished, write some text
        if (distance < 0) {
        clearInterval(x);
        document.getElementById("alert").innerHTML = "";
        document.getElementById("count").innerHTML = "Reunión Iniciada";
        }

    }, 1000);

}