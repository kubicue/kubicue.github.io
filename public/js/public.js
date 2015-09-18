var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good Evening <span class="greet-icon">&#9789;</span>';
} else if (hourNow > 12) {
    greeting = 'Good Afternoon <span class="greet-icon">&#9835;</span>';
} else if (hourNow > 0) {
    greeting = 'Good Morning <span class="greet-icon">&#9749;</span> 	';
} else {
    greeting = 'How are you? <span class="greet-icon">&#9834;</span>';
}

document.write(' <span id"greet" class="imp-copy">' + greeting + '</span>');
