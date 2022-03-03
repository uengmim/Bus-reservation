function getMoveURL(moveURL, _ticket, _waiting) {
	let ticket = 0;
	let waiting = 0;

    if(_ticket != undefined) {
        ticket = _ticket
    } else {
        if($(".ticket_count").length == 0) {
            ticket = getParam("ticket");
        } else {
            ticket = Number.parseInt($(".ticket_count").eq(0).text());
        }
    }

    if(_waiting != undefined) {
        waiting = _waiting;
    } else {
        if($(".waiting_count").length == 0) {
            waiting = getParam("waiting");
            console.log(true);
        } else {
            waiting = Number.parseInt($(".waiting_count").eq(0).text());
        }
        
    }
	
	return `${moveURL}?ticket=${ticket}&waiting=${waiting}&access=1`;
}
function getAccess() {
    let is = Number.parseInt(getParam("access"));
    if(is) {
        return true;
    } else {
        return false;
    }
}
function getWaiting() {
    return Number.parseInt(getParam("waiting"));
}
function getName() {
    return getParam("name");
}
function getTicket() {
    return Number.parseInt(getParam("ticket"));
}
function getParam(sname) {
    let params = location.search.substr(location.search.indexOf("?") + 1);
    let sval = "";
    params = params.split("&");
    for (let i = 0; i < params.length; i++) {
        temp = params[i].split("=");
        if ([temp[0]] == sname) { sval = temp[1]; }
    }
    return sval;
}