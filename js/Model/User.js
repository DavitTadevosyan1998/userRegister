function User() {
    this.id = null;
    this.firstName = "";
		this.lastName = "";
		this.userName = "";
    this.password = "";
}

User.prototype.getRandomId = function(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

User.prototype.setId = function() {
	if(this.id){
		return;
	}
	this.id = this.getRandomId(100000,999999);
}

User.prototype.getFromStorage = function(key){
	let storageData = localStorage.getItem(key);
	if(storageData){
		return JSON.parse(storageData);
	}
	else{
		return [];
	}
}

User.prototype.store = function(key,data){
	localStorage.setItem(key,JSON.stringify(data));
}

User.prototype.create = function(){
  let existedData = this.getFromStorage('UserData');
	this.setId();
	existedData.push(this);
	this.store('UserData',existedData);
}

User.prototype.findById = function(id){
	let existedData = this.getFromStorage('UserData');
	let user = existedData.find(function(val){
		return val.id == id;
	});
	this.setAll(user);
}

User.prototype.setAll = function(data){
	if(data.firstName){
		this.firstName = data.firstName
    }
    if(data.lastName){
		this.lastName = data.lastName
		}
		if(data.userName){
			this.userName = data.userName
		}
    if(data.password){
		this.password = data.password
    }
    if(data.id){
		this.id = data.id
	}
}

User.prototype.getIndex = function(){
	let existedData = this.getFromStorage('UserData');
	let _this = this;
	return existedData.findIndex(function(val,key){
		return val.id == _this.id;
	});
}

User.prototype.getAll = function(){
	return this.getFromStorage('UserData');
}