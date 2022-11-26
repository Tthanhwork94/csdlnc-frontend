//  button đăng ký
var btn2 = document.getElementById("dangky");
btn2.onclick = function () {
  var check =document.getElementById("matkhau").value ;
  var check2 =document.getElementById("xacnhanmatkhau").value ;
  var check3 =document.getElementById("tendangnhap").value ;
  if (check!="" && check2!="" && check3!="")
  {
    username.value='';
    password.value='';
    confirmpwd.value='';
  }
  
}

// check nhập
$(function() {
    $("form[name='dangky']").validate({
      rules: {
        matkhau: "required",
        tendangnhap: "required",
        xacnhanmatkhau: "required"
      },
      messages: {
        matkhau: "Hãy mật khẩu hiện tại",
        tendangnhap: "Hãy nhập tên đăng nhập",
        xacnhanmatkhau: "Nhập lại mật khẩu"
      },
      submitHandler: function(form) {
        form.submit();
      }
    });
  });



