// button thêm sản phẩm
var btn3 = document.getElementById("themsp");
btn3.onclick  = function () {
  var check =document.getElementById("tenchinhanh").value ;
  var check2 =document.getElementById("diachichinhanh").value ;
  var check3 =document.getElementById("giomocuachinhanh").value ;
  var check4 =document.getElementById("giodongcuachinhanh").value ;
  if (check!="" && check2!="" && check3!="" && check4!="")
  {
    alert("Thêm chi nhánh thành công")
  }
}