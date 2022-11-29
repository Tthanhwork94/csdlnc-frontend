function setAccountLocal(username){
    $.ajax({
        url: "http://localhost:8080/api/taikhoan/"+username,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            window.localStorage.setItem('account', JSON.stringify(data));
            console.log(JSON.stringify(data));
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


// function getMenu(madoitac){
//     var obj;
//     $.ajax({
//         url: "http://localhost:8080/api/doitac/menu/"+madoitac,
//         type: 'GET',
//         dataType: 'json',
//         success: function(data){
//             // console.log(JSON.parse(JSON.stringify(data)));
//             obj = JSON.parse(JSON.stringify(data));
//             obj.
//         },
//         error: function(data){
//             alert("Không tìm thấy menu.");
//         }
//     });
// }

async function getMenu1(){
    try {
        let data = await axios.get("http://localhost:8080/api/doitac/menu/1");
        console.log(data);
    } catch (error) {
        console.log(e);
    }
}