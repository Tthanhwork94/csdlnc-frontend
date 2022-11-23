// button thêm sản phẩm
var btn3 = document.getElementById("themsp");
btn3.onclick  = function () {
  var check =document.getElementById("tenmonan").value ;
  var check2 =document.getElementById("mieutamonan").value ;
  var check3 =document.getElementById("giamonan").value ;
  if (check!="" && check2!="" && check3!="")
  {
    alert("Thêm món ăn thành công")
  }
}