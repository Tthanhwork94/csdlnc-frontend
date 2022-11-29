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

function logout(){
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("account");
    // setTimeout(function() {
    //     window.location.href = "/index.html";
    //    }, 100);
}

function init(){
    document.getElementById("account").innerHTML = JSON.parse(localStorage.getItem("account")).tendangnhap;
    let cart= '{"listmon":[]}';
    var object = JSON.parse(cart);
    object['listmon'].push({stt:1,})
}