// Ticket Handler
$("#ticket_num_frame").on({
  click: function () {
    $("#reservation_prompt").css("display", "flex");
  },
});
$("#re_ok").on({
  click: function () {
    msgOk();
  },
});
function msgOk() {
  $("#reservation_prompt").css("display", "none");
}


var drive_fram = document.getElementsByClassName("drive_fram");

function handleClick(event) {
  if (event.target.classList[0] === "clicked") {
	event.target.classList.remove("clicked");
  } else {
	for (var i = 0; i < drive_fram.length; i++) {
		drive_fram[i].classList.remove("clicked");
	}
	event.target.classList.add("clicked");
  }
}

function init() {
  for (var i = 0; i < drive_fram.length; i++) {
	drive_fram[i].addEventListener("click", handleClick);
  }
}

init();

$("#qr_image_frame").on("click",function() {
	location.replace("camera.html");
});
