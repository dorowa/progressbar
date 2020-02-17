let currentProgress=0;
function updateProgress(){
	$("#prMain").css('width', currentProgress+'%').attr('aria-valuenow', currentProgress);
}
function makeItPlus1(){
	currentProgress=(currentProgress+1)%101;
	updateProgress();
}
function makeItPlus3(){
	currentProgress=(currentProgress+3)%101;
	updateProgress();
}
function makeItPlus7(){
	currentProgress=(currentProgress+7)%101;
	updateProgress();
}
function initAll(){
	$("#plus1").click(makeItPlus1);
	$("#plus3").click(makeItPlus3);
	$("#plus7").click(makeItPlus7);
}

$(document).ready(initAll);