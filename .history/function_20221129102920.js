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
    window.localStorage.removeItem("cart");
    // setTimeout(function() {
    //     window.location.href = "/index.html";
    //    }, 100);
}

function init(){
    document.getElementById("account").innerHTML = JSON.parse(localStorage.getItem("account")).tendangnhap;
}


function getMenu(madoitac){
    alert("hello");
    $.ajax({
        url: "http://localhost:8080/api/doitac/"+madoitac,
        type: 'GET',
        data: 'json',
        success: function(data){
            window.localStorage.setItem('hello', JSON.stringify(data));
        },
        error: function(data){
            alert("Không tìm thấy tài khoản.");
        }
    });
}
