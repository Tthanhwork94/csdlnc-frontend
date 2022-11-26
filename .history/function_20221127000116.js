function getInforAccount(username){
    $.ajax({
        url: "http://localhost:8080/api/taikhoan/"+username,
        type: 'GET',
        // contentType : "application/json",
        // headers: {
        //         "accept": "application/json",
        //         "Access-Control-Allow-Origin":"*"
        //     },
        dataType: 'json',
        data:JSON.stringify(account),
        success: function(data){
            window.localStorage.setItem('username', username.value)
            alert(username.value+" đã đăng ký thành công");
            username.value='';
            password.value='';
            confirmpwd.value='';

            setTimeout(function() {
             window.location.href = "/"+account.loaitaikhoan+"_home.html";
            }, 500);
        },
        error: function(data){
            alert(username.value+" đã tồn tại");
            username.value='';
            password.value='';
            confirmpwd.value=''
        }
    });
}