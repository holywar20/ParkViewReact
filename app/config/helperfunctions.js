function JsonClone( objectToClone ){
	var target = JSON.parse(JSON.stringify(objectToClone));
	// NOTE : this is only meant to copy prototypes, which I'm using to keep data straight inside the app. It's not a deep copy and ignores functions, etc. 
	return target;
}


function timeConverter(UNIX_timestamp){
	var a = new Date(UNIX_timestamp * 1000);
	var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	var year = a.getFullYear();
	var month = months[a.getMonth()];
	var date = a.getDate();
	var hour = a.getHours();
	var min = a.getMinutes();
	var sec = a.getSeconds();
	var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
	return time;
 }
 console.log(timeConverter(0));


module.exports = {
	JsonClone : JsonClone,
	timeConverter : timeConverter
}