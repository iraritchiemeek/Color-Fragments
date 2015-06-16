$(window).load(function(){

	var rectangle = new Rectangle()

	rectangle.appendInitialRect()

	$(document).on("mousemove", ".rect", function(e){
		var size = rectangle.getSize(e.target)
		var orientation = rectangle.getOrientation(size)
		for (var i = 0; i < 2; i++) {
			rectangle.splitDiv(e.target, size, orientation)
		}
		rectangle.removeOldRect(e.target)
	})
})