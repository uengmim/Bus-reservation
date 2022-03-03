$("#user_login").on("click",function() {

	let type = $("input:radio[name='login_type']:checked").val();
	if(type == "student") {
		let st_code = $("#input_id").val();
		if(st_code == 20173577) {
			location.replace("bus_index.html?ticket=0&waiting=42");	
		} else {
			$(".warning").css("display","block");
		}
	} else if(type == "driver") {
		
	}
	

});
$("label").on({
	click : function() {
		$("label").children("div").removeClass("type_default");
		$(this).children("div").addClass("type_default");
	}
});
