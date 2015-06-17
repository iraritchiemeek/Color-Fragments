function Rectangle () {
	this.wHeight = window.innerHeight;
	this.wWidth = window.innerWidth;
	this.floatLeft = true
}

Rectangle.prototype.appendInitialRect = function() {
	$("#container").append("<div class='rect'/>")
	$(".rect").css({height:this.wHeight, width:this.wWidth, backgroundColor:getRandomColor()})
};

Rectangle.prototype.getSize = function(rectangle) {
	return [$(rectangle).width(), $(rectangle).height()]
};

Rectangle.prototype.getOrientation = function(size) {
	if (size[0] > size[1]) {
		this.orientation = "landscape"
	} else {
		this.orientation = "portrait"
	}
	return this.orientation
};

Rectangle.prototype.splitDiv = function(rectangle, size, orientation) {
	console.log(orientation)
	this.floatLeft = !this.floatLeft
	if (orientation === "landscape" && $(rectangle).children.length <= 2) {
		$(rectangle).append("<div class='rect' style='height:" + size[1] + "px; width:" + (size[0] / 2) + "px; background-color:" + getRandomColor() + "; float:" + this.leftOrRight(this.floatLeft) + ";'/>")
	} else if (orientation === "portrait" && $(rectangle).children.length <= 2) {
		$(rectangle).append("<div class='rect' style='height:" + (size[1] / 2) + "px; width:" + size[0] + "px;'/>")
	}
};

Rectangle.prototype.removeOldRect = function(rectangle) {
	$.each($(".rect"), function(index, rect){
		if ($(rect).children) {

		}
	})
};

Rectangle.prototype.leftOrRight = function(bool) {
	if (bool) {
		return "left"
	} else {
		return "right"
	}
};