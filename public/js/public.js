var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good Evening <strong>&#9789;</strong>';
} else if (hourNow > 12) {
    greeting = 'Good Afternoon <strong>&#9835;</strong>';
} else if (hourNow > 0) {
    greeting = 'Good Morning <strong>&#9749;</strong> 	';
} else {
    greeting = 'How are you? <strong>&#9834;</strong>';
}

document.write(' <span id"greet" class="imp-copy">' + greeting + '</span>');
