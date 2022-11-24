
// duyệt hợp đồng
var btn = document.getElementById("duyethopdong");
btn.onclick  = function () {
  var check2 =document.getElementById("mahopdong").value ;
  if (check2!="")
  {
    alert("Hợp đồng duyệt thành công");
  }
}

// check nhập trong gia hạn
$(function() {
    $("form[name='fix-product']").validate({
      rules: {
        hoahong: "required",
        ngayhethan: "required"
      },
      messages: {
        hoahong: "Hãy nhập hoa hồng",
        ngayhethan: "Hãy nhập ngày hết hạn"
      },
      submitHandler: function(form) {
        form.submit();
      }
    });
  });

  // gia hạn hợp đồng
var modal2 = document.getElementById("model-chitietsanpham");
var btn2 = document.getElementById("giahanhopdong");
var close2 = document.getElementsByClassName("close")[0];
var close_footer2 = document.getElementsByClassName("close-footer")[0];
var order2 = document.getElementById("luuSP");
btn2.onclick  = function () {
  var check =document.getElementById("mahopdong").value ;
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
  var check =document.getElementById("hoahong").value ;
  var check3 =document.getElementById("ngayhethan").value ;
  if (check!="" && check3!="")
  {
    alert("Gia hạn thành công");
  }
}
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}