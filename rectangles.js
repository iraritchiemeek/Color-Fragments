function Rectangle () {
	this.wHeight = window.innerHeight;
	this.wWidth = window.innerWidth;
}

Rectangle.prototype.appendInitialRect = function() {
	$("#container").append("<div class='rect'/>")
	$(".rect").css({height:this.wHeight, width:this.wWidth, backgroundColor:getRandomColor()})
};

Rectangle.prototype.getSize = function(rectangle) {
	return [$(rectangle).width(), $(rectangle).height()]
};

Rectangle.prototype.getOrientation = function(size) {
	if (size[0] < size[1]) {
		this.orientation = "landscape"
	} else {
		this.orientation = "portrait"
	}
	return this.orientation
};

Rectangle.prototype.splitDiv = function(rectangle, size, orientation) {
	console.log(orientation)
};