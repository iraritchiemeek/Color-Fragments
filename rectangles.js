function Rectangle () {
	this.wHeight = window.innerHeight;
	this.wWidth = window.innerWidth;
	
}

Rectangle.prototype.initialRect = function() {
	$("#container").append("<div class='rect'/>")
	$(".rect").css({height:this.wHeight, width:this.wWidth, backgroundColor:getRandomColor()})
};