//check off and on specific todo by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete Todo
$("ul").on("click", "span", function(event){
	//to remove the li also not only the span we need to call the parent element
	$(this).parent().fadeOut(300,function(){
		//calling back the function will remove the li after the fadeOut
		$(this).remove();
	});
	//to work only on the span, not parent elements
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		//clear after new li it is added to the ul
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

//plus icon to fade out or in input space when clicked
$(".fa-plus-square-o").click(function(){
	$("input[type='text']").fadeToggle();
});