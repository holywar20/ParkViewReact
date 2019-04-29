class DataFetcherClass{

	/* This URL is what local host on your computer is when working on an emulator. 
		This doesn't work with connected devices .. i'll need to research that. */
	targetUrl = "http://10.0.2.2:3000"

	// TODO - potentially break this into seperate objects, but for now, its fine all in one place.

	/* These are all promises, and should be called by outside methods, with a .then for when they are resolved */
	appointments = {
		index : ( userid ) 	=> { return this._getData( this.targetUrl + "/appointments/index/" , {} ); },
		add 	: ( data ) 		=> { return this._postData( this.targetUrl + "/appointments/add/" , {} ); },
		remove: ( appid ) 	=> { return this._getData( this.targetUrl + "/appointments/remove/" , {} ); }
	}

	auth = {
		login : () => {},
		logout : () => {},
	}

	contacts = {
		index  : () => {},
		add 	 : () => {},
		remove : () => {}
	}

	_getData( url ){
		console.log("sending data to : ", url );
		return fetch( url )
		.then( (response) => {
			console.log("In _getData");
			return response.json()
		});// TODO much improved error handling
	}

	_postData( url, data = {}) {
		
		return fetch(url, {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
				// "Content-Type": "application/x-www-form-urlencoded",
			},
			redirect: "follow",
			referrer: "no-referrer", 
			body: JSON.stringify(data), // body data type must match "Content-Type" header
		})
		.then(response => response.json()); // parses JSON response into native Javascript objects
	}
}

let DataFetcher = new DataFetcherClass();
export default DataFetcher;