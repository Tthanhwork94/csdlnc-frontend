function setAccountLocal(username){
    $.ajax({
        url: "http://localhost:8080/api/taikhoan/"+username,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            window.localStorage.setItem('account', JSON.stringify(data));
        },
        error: function(data){
            alert("Không tìm thấy tài khoản.");
        }
    });
}

