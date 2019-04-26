import DataFetcher from "./datafetcher";
import { JsonClone } from "./helperfunctions";

class DataStoreClass{

	constructor(){
		this.auth = {}
		this.data = {}
		this.appointments = {}
	}
	
	myPrototypes = {
		'auth' : {

		},
		'appointments' : {
			"id": null ,
			"user_id": null,
			"contact_id": null ,
			"datetime": null ,
			"warning_level": null,
			"pushable": false,
			"attended": false
		}
	}
	
	getPrototype( protoName ){
		var thisPrototype = this.myPrototypes[protoName];
		var newCopy = JsonClone( thisPrototype );
		return newCopy;
	}

	getFamily(){
		favArray = [{ 
			name : 'Ned Stark',
			relationship: 'Spouse',
			type			: 'Family',
			number: '9781231234',
			userKey : 1
		}, { 
			name : 'Ayra Stark',
			relationship : 'Daughter',
			type			 : 'Family',
			number: '9781231234',
			userKey : 2
		}, {
			name : 'Jon Snow',
			relationship : 'Friend',
			type			 : 'Freind',
			number: '9781231234',
			userKey : 3
		}];

		return favArray;
	}

	getCareTeam(){
		careTeamArray = [{ 
			name : 'George Washington',
			relationship : 'Addiction Specialist',
			type			 : 'Doctor',
			favorite	 	 : false,
			number: '9781231234',
			userKey 		 : 4
		}, { 
			name : 'Thomas Jefferson',
			relationship : 'Psycologist',
			type			 : 'Doctor',
			number: '9781231234',
			favorite	 	 : false,
			userKey : 5
		}];

		return careTeamArray;
	}

	getOnCall(){
		onCallArray = [{ 
			name : 'Iron Man',
			relationship : 'EMT',
			type			 : 'OnCall',
			favorite	 	 : false,
			number: '9781231234',
			userKey : 6
		}, { 
			name : 'Captain Marvel',
			relationship : 'EMT',
			type			 : 'OnCall',
			favorite	 	 : false,
			number: '9781231234',
			userKey : 7
		}];

		return onCallArray;
	}

	getAppointments(){
		trueUrl = this.targetUrl + "/appointments/index/";

		return fetch(trueUrl)
			.then( (res) => console.log(res) );
	}

	setKey( key, value ){
		this.data[key] = value;
	}

	getKey( key ){
		return this.data[key];
	}
}

let DataStore = new DataStoreClass()
export default DataStore;