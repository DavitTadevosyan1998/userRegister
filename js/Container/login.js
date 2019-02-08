$(document).ready(function() {
    let login = new Login();
    let user = new User();
    $(document).on('click','button',function(e) {
        e.preventDefault();
        let uName = $('#userName').val();
        let pass= $('#password').val();
        if(uName.length <= 0){
            return;
        }
        if(pass.length <= 0){
            return;
        }
        login.setAll({
            userName:uName,
            password:pass
        })
        let userArray = user.getFromStorage('UserData');
        for(let i = 0; i <= userArray.length-1; i++){
            if(userArray[i].userName === login.userName && userArray[i].password === login.password){
                location.href = "./finish.html"
            }else{
                $('.registered').css("display","none");
                $('.wrong').css("display", "block");
            }
        }
    });
});