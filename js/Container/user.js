$(document).ready(function() {
    let user = new User();
    $(document).on('click','button',function(e) {
        e.preventDefault();
        let fName = $('#firstName').val();
        let lName = $('#lastName').val();
        let uName = $('#userName').val()
        let pass = $('#password').val();
        if(fName.length <= 0){
            return;
        }else if(lName.length <= 0){
            return;
        }else if(uName.length <= 0){
            return;
        }else if(pass.length <= 0){
            return;
        }
        user.setAll({
            firstName:fName,
            lastName:lName,
            userName:uName,
            password:pass
        });
        user.create();
        location.href = "./login.html"
    });
});