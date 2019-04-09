export default class DataStore{
	// Internal API

	data = {}

	static getFamily(){
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

	static getCareTeam(){
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

	static getOnCall(){
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

	static setKey(key, value){
		this.data[key] = value;
	}

	static getKey(){
		return this.data[key];
	}
}