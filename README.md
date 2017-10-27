# CirculateText
CirculateText JQuery plugin to bend any text on circular shape of desired radius.

### Dependency:
Since CirculateText is a Jquery plugin so Jquery is an obvious dependency you must include. Additionally the plugin also uses the jqueryrotate to rotate the text so make sure to include that as well! You can find jqueryrotate here:

http://jqueryrotate.com

### Usage
Simply include the jquryrotate and then include the circulatetext scripts in your html document:

```html
<!-- The text you want to ciculate -->
<div id="circulateThis">
  Ciculate Me
</div>

<!-- Incude the scripts : Jquery,Jqueryrotate,Circulate -->
<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
<script src="https://raw.githubusercontent.com/wilq32/jqueryrotate/master/jQueryRotate.js"></script>
<script src="https://raw.githubusercontent.com/KunalSarkar/CirculateText/master/circulatetext.js"></script>

<!-- Initialize the plugin -->
<script>
	$(document).ready(function(){
		$("#circulateThis").circulateText(200);
	});
	
</script>
```

### Options
CiculateText provides two options to rotate your text:

radius: radius of the circle the text sits on

space: this is optional (default is 10), if provided it will determine the spaces between the characters

```html
$("#circulateThis").circulateText(radius,space);
```
