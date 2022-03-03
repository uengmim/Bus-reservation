$(document).ready(function() {
	let ticket = getParam("ticket");
	let waiting = getParam("waiting");

	if(!ticket) {
		ticket = 0;

	}
	if(!waiting) {
		waiting = 27;
	}
	console.log(ticket);
	$(".ticket_count").text(ticket);
	$(".waiting_count").text(waiting);
});


// Reservation Handler
let isReservation = false;
$("#reservation").on("click",function() {	
	$("#reservation_prompt").css("display","flex");
});

$("#re_ok").on({
	click : function() {
		if(!isReservation) {
			let now = $(".waiting_count").eq(0).text();
			now = Number.parseInt(now);
			$(".waiting_count").text(now+1);
			isReservation = true;
			reservationOk();
		} else {
			alreadyReservation();
		}
		
	}
});
$("#re_pr_cancel").on({
	click : function() {
		if(isReservation) {
			let now = $(".waiting_count").eq(0).text();
			now = Number.parseInt(now);
			$(".waiting_count").text(now-1);
			isReservation = false;
			reservationCancel();
		} else {
			alreadyReservation();
		}
	}
});
$("#re_close").on({
	click : function() {
		reservationClose();
	}
});
$("#re_pr_close").on({
	click : function() {
		reservationClose();
	}
});
function reservationOk() {
	$("#re_pr_frame").css("display","none");
	$("#re_pr_ok_frame").css("display","flex");
	setTimeout(function() {
		reservationClose();
	},1000);
}
function reservationCancel() {
	$("#re_pr_wrong_frame").css("display","none");
	$("#re_pr_cancel_frame").css("display","flex");
	setTimeout(function() {
		reservationClose();
	},1000);
}
function alreadyReservation() {
	$("#re_pr_frame").css("display","none");
	$("#re_pr_wrong_frame").css("display","flex");
	/*
	setTimeout(function() {
		reservationClose();
	},1000);
	*/
}
function reservationClose() {
	let frame = $("#re_pr_frame");
	$("#reservation_prompt").css("display","none");
	if(!frame.is(":visible")) {
		$("#re_pr_ok_frame").css("display","none");
		$("#re_pr_wrong_frame").css("display","none");
		$("#re_pr_frame").css("display","flex");
		$("#re_pr_cancel_frame").css("display","none");
		frame.css("display","flex");
	}
}

// Ticket Handler
$("#ticket_add_frame").on({
	click : function() {
		$("#ticket_prompt").css("display","flex");
	}
});
$("#ti_ok").on({
	click : function() {
		ticketOk();
	}
});
$("#ti_close").on({
	click : function() {
		ticketClose();
	}
});
function ticketOk() {
	let url = getMoveURL("pay.html");
	location.href = url;
}
function ticketClose() {
	$("#ticket_prompt").css("display","none");
}

/*		Refresh 	*/
$("#qr_image_frame").on({
	click : function() {
		$("#qr_scale").css("display","flex");
		$("#qr_scale").animate({
			opacity : "1.0"
		});
	}
});
$("#qr_scale_close").on({
	click : function() {
		$("#qr_scale").animate({
			opacity : "0.0"
		},function() {
			$("#qr_scale").css("display","none");
		});
	}
});

// Menu Handler
$("#menu_tap").on({
	click : function() {
		$("#menu_wrapper").css("display","block");
		$("#menu").slideDown({
			start : function() {
				$(this).css("display","flex");
			}
		});
	}
});
$("#menu_blank").on({
	click : function() {
		$("#menu").slideUp(400,function() {
			$("#menu_wrapper").css("display","none");
		});
	}
});
$("#menu_logout").on({
	click : function() {
		location.href = "login.html";
	}
});
let loaderBoo = true;
$("#waiting_refresh").on({
	click : function() {
		$("#waiting_loader").css("display","block");
		$("#waiting_loader").animate({
			opacity : "1"
		},200);

		setTimeout(function() {
			$("#waiting_loader").animate({
				opacity : "0"
			},200,function() {
				let now = $(".waiting_count").eq(0).text();
				let y = Math.floor(Math.random() * 100) +1;
				if(y%3 != 0) {
					if(loaderBoo) {
						now = Number.parseInt(now)+4;
					} else {
						now = Number.parseInt(now)-3;
						if(now < 0) {
							now = 0;
						}
					}	
				}
				
				let x = Math.floor(Math.random() * 100) +1;
				if(x%2 == 0) {
					loaderBoo = true;
				} else {
					loaderBoo = false;
				}
				$(".waiting_count").text(now);
				$("#waiting_loader").css("display","none");	
			});
			
		},1000);
	}
});

$("#qr_scan_test").on({
	click : function() {
		let ticket = Number.parseInt($(".ticket_count").eq(0).text());
		let successTrigger = true;
		let resutlElement = null;
		if(ticket < 1) {
			resultElement = $("#qr_scan_fail");
			successTrigger = false;
		} else {
			resultElement = $("#qr_scan_ok");
			successTrigger = true;
		}
		resultElement.css("display","block");
		resultElement.animate({
			opacity : "1.0"
		},300,function() {
			setTimeout(function() {
				$("#qr_scale").animate({
						opacity : "0.0"
					},function() {
						$("#qr_scale").css("display","none");
						resultElement.css("display","none");
						resultElement.css("opacity","0.0");
						if(successTrigger) {
							ticket = ticket-1;	
						}
						$(".ticket_count").text(ticket);
					});
			}, 800);
		});
	}
});