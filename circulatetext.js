$.fn.circulateText = function(radius,space=10) {
 
    return this.each(function() {
	
		var text= $(this).text().trim();
	    	var textLengh = text.length;
		$(this).empty();
		
		$(this).append('<div class="innerWrapper" style="position:relative"></div>');
		var innerWrapper = $(this).find('.innerWrapper');
		
		var stepAngle = space;
		var startAngle= -(space * textLengh/2)+(space/2);
		
		for(i=0; i<textLengh; i++)
		{
		    $(innerWrapper).append('<span class="singleChar" style="height:'+radius+'px; position:absolute; left:'+$(innerWrapper).width()/2+'px;">'+text[i]+'</span>');
		    $(innerWrapper).find('.singleChar').last().rotate({
				angle:startAngle,
				center: ["50%", "100%"]
			});
			startAngle = startAngle + stepAngle;
		}
		
    });
 
};
