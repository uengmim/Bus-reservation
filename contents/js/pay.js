$("#input_ticket_num").on({
	change : function() {
		$(".ticket_num").text($(this).val());
		$(".pay_num").text($(this).val()*500);
	}
});

$("#back_btn").on({
	click : function() {
		location.href = getMoveURL("bus_index.html");
	}
});

$("#pay_btn").on({
	click : function() {
		if($("#input_ticket_num").val() < 1) return;
		$("#pay_prompt").css("display","flex");
		$("#pay_prompt").animate({
			opacity : "1.0"
		});
	}
});
$("#ok").on({
	click : function() {
		$("#pay_prompt_frame").animate({
			opacity : "0.0"
		},function() {
			$("#pay_prompt_frame").css("display","none");
			$("#pay_result_frame").css("display","flex");
			$("#pay_result_frame").animate({
				opacity : "1.0"
			},function() {
				setTimeout(function() {
					//history.back();
					let ticket = Number.parseInt($("#input_ticket_num").val()) + getTicket();
					let url = getMoveURL("bus_index.html",ticket,undefined);
					location.href = url;
				},1000);
			});
		});
	}
});
$("#cancel").on({
	click : function() {
		$("#pay_prompt").animate({
			opacity : "0.0"
		},function() {
			$("#pay_prompt").css("display","none");	
		});
		
	}
});
