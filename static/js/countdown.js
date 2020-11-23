// Get day number of the week, 4 is Thursday and 6 is Saturday
var dateObj = new Date();
var weekdayNumber = dateObj.getDay();

// Run ContDown if is Thursday or Saturday
var countDownDate = null;
if (weekdayNumber == 4) {
    // Thursday time to count down
    var countDownDate = dateObj;
    countDownDate.setHours(19,30,1); // Thursday meeting starts at 7:30 pm
} else if (weekdayNumber == 6) {
    // Saturday time to count down
    var countDownDate = dateObj;
    countDownDate.setHours(17,30,1); // Saturday meeting starts at 5:30 pm
} else {
    // Notifies that there are no meetings
    document.getElementById("count").innerHTML = '<h4 class="text-muted">No hay una reunión programada para hoy</h4>';
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

        // Display the result in the element with id="count" and id="alert"
        switch(true) {
            case days > 0:
                // Count the days
                document.getElementById("count").innerHTML = '<h3>' + days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ' + '</h3>';
                break;
            case hours > 0:
                // Count the hours
                document.getElementById("count").innerHTML = '<h3>' + hours + 'h ' + minutes + 'm ' + seconds + 's ' + '</h3>';
                break;
            case minutes > 0:
                // Warns that the meeting is about to start, count the minutes
                document.getElementById("count").innerHTML = '<h3>' + minutes + 'm ' + seconds + 's ' + '</h3>';
                if (minutes < 3) {
                    document.getElementById("alert").innerHTML = '<h3>La reunión comenzará dentro de poco</h3>';
                }
                break;
            case seconds > 0:
                // Warns that the meeting is about to start, count the seconds in orange
                document.getElementById("alert").innerHTML = '<h3>La reunión comenzará dentro de poco</h3>';
                document.getElementById("count").innerHTML = '<h3 class="text-orange">' + seconds + 's ' + '</h3>';
                break;
            case hours < -2:
                // If the meeting has finished, write some text
                document.getElementById("count").innerHTML = '';
                document.getElementById("alert").innerHTML = '<h3>Reunión Terminada</h3>';
                break;
            case seconds <= 0:
                // If the meeting has started, write some text
                document.getElementById("count").innerHTML = '';
                document.getElementById("alert").innerHTML = '<h3>Reunión Iniciada</h3>';
        }
    
        // Stops the function after 3 hours from the start of the meeting
        if (hours < -3) {
            clearInterval(x);
        }

    }, 1000);

}