function Login(){
    this.userName = '';
    this.password = '';
}

Login.prototype.getRandomId = function(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

Login.prototype.setId = function() {
	if(this.id){
		return;
	}
	this.id = this.getRandomId(100000,999999);
}

Login.prototype.getFromStorage = function(key){
	let storageData = localStorage.getItem(key);
	if(storageData){
		return JSON.parse(storageData);
	}
	else{
		return [];
	}
}

// Login.prototype.store = function(key,data){
// 	localStorage.setItem(key,JSON.stringify(data));
// }

// Login.prototype.create = function(){
//     let existedData = this.getFromStorage('UserData');
//     this.setId();
// 	existedData.push(this);
// 	this.store('LoginData',existedData);
// }

// Login.prototype.findById = function(id){
// 	let existedData = this.getFromStorage('LoginData');
// 	let user = existedData.find(function(val){
// 		return val.id == id;
// 	});
// 	this.setAll(user);
// }

Login.prototype.setAll = function(data){
    if(data.userName){
			this.userName = data.userName
    }
    if(data.password){
			this.password = data.password
    }
}

// Login.prototype.getIndex = function(){
// 	let existedData = this.getFromStorage('LoginData');
// 	let _this = this;
// 	return existedData.findIndex(function(val,key){
// 		return val.id == _this.id;
// 	});
// }

// Login.prototype.loaduser = function(users){
// 	$(document).ready(function() {
// 		let userSelect =  $("#user");
//             $("#user option").remove();
//             userSelect.append("<option value='0'>Select the faculty</option>");
//             for(let user of users){
//                 userSelect.append("<option value='"+user.id+"' >"+user.firstName+"</option>");
//             }
// 	});
