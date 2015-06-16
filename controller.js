$(window).load(function(){

	var rectangle = new Rectangle()

	rectangle.appendInitialRect()

	$(document).on("mousemove", ".rect", function(e){
		var size = rectangle.getSize(e.target)
		var orientation = rectangle.getOrientation(size)
		rectangle.splitDiv(e.target, size, orientation)
	})
})