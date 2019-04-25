function JsonClone( objectToClone ){
	var target = JSON.parse(JSON.stringify(objectToClone));
	// NOTE : this is only meant to copy prototypes, which I'm using to keep data straight inside the app. It's not a deep copy and ignores functions, etc. 
	return target;
}


module.exports = {
	JsonClone : JsonClone
}