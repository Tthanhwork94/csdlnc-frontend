// Modal model-chitietsanpham
var modal2 = document.getElementById("model-chitietsanpham");
var btn2 = document.getElementById("chitietsanpham");
var close2 = document.getElementsByClassName("close")[0];
var close_footer2 = document.getElementsByClassName("close-footer")[0];
var order2 = document.getElementById("luuSP");
btn2.onclick  = function () {
  var check =document.getElementById("mamonan").value ;
  if (check!="")
  {
    modal2.style.display = "block";
  }
}
close2.onclick = function () {
  modal2.style.display = "none";
}
close_footer2.onclick = function () {
  modal2.style.display = "none";
}
order2.onclick = function () {
  var check =document.getElementById("mamonan").value ;
  var check2 =document.getElementById("giamonan").value ;
  var check3 =document.getElementById("mieutamonan").value ;
  if (check!="" && check2!="" && check3!="")
  {
    alert("Lưu thay đổi thành công");
  }
}
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

// xoá sản phẩm
var btn3 = document.getElementById("xoasanpham");
btn3.onclick  = function () {
  var check =document.getElementById("masanpham").value ;
  if (check!="")
  {
    alert("Xoá sản phẩm thành công")
  }
}

// check nhập trong chỉnh sửa
$(function() {
  $("form[name='fix-product']").validate({
    rules: {
      tenmonan: "required",
      giamonan: "required",
      mieutamonan: "required"
    },
    messages: {
      tenmonan: "Hãy nhập tên món ăn",
      giamonan: "Hãy nhập giá món ăn",
      mieutamonan: "Hãy nhập miêu tả món ăn"
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});
