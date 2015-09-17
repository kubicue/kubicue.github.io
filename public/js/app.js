// Yes, I know I could be using Jquery to make this happen but I decide keeping this script "OG" with core JavaScript.
// Oh! yeah JS comments. This is the terminal type effect.
var typeString = ['working in Brooklyn, NY / San Diego, CA', 'eating some good roll tacos', 'writing CSS and JavaScript'];
      var  i = 0;
      var count = 0
      var selectedText = '';
      var text = '';
      (function type() {
        if (count === typeString.length) {
          count = 0;
        }
        selectedText = typeString[count];
        text = selectedText.slice(0, ++i);
        document.getElementById('txt-msg').innerHTML = text;
        if (text.length === selectedText.length) {
          count++;
          i = 0;
        }
        setTimeout(type, 208);
      }());

      function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
          if ((new Date().getTime() - start) > milliseconds){
            break;
          }
        }
      }
