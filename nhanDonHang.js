// Nhận đơn hàng
var btn = document.getElementById("nhandonhang");
btn.onclick  = function () {
  var check =document.getElementById("madonhang").value ;
  if (check!="")
  {
    alert("Nhận đơn hàng thành công");
  }
}


