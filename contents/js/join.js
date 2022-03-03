$("#back").on({
	click : function() {
		history.back();
	}
});
$("#user_join").on({
	click : function() {
		const st_code = "20173577";
		let input_st_code = $("#input_st_code").val();
		if(!input_st_code) {
			onWarning("학번을 입력해주세요.");
		}
		if(st_code == input_st_code) {
			location.href = "login.html?access=1";
		} else {
			onWarning("존재하지 않는 학생입니다.");
		}
	}
});
function onWarning(text) {
	if(text != undefined) {
		$(".warning").text(text);
	}
	$(".warning").css("display","block");
}
function offWarning() {
	$(".warning").css("display","none");	
}