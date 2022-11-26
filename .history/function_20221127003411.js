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
        statusCode:{
            200: function(data){
                account = JSON.stringify(data);
            },
            404: function(data){
                account = JSON.stringify(data);
            }
        }
    }).done(function(data){
        return JSON.parse(data);
    });

}