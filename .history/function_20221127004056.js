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
        // data:JSON.stringify(account),
        success: function(data)
        statusCode:{
            200: function(data){
                alert(data.tendangnhap);
            },
            404: function(data){
                
            }
        }
    });
}