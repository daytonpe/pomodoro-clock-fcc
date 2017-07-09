//convert x seconds into time in the format 25:45
function timeConvert(x){
	var min = Math.floor(x/60);
	var sec = x%60;
	var formattedSec = ("0" + sec).slice(-2);
	var str = min+':'+formattedSec;
	return str;
}

console.log(timeConvert(1546));
console.log(timeConvert(300));