// Check nhập
$(function() {
    $("form[name='thongKeThang']").validate({
      rules: {
        doanhthuthang: "required"
      },
      messages: {
        doanhthuthang: "Hãy nhập tháng"
      },
      submitHandler: function(form) {
        form.submit();
      }
    });
  });
// xem doanh thu ngày
var order = document.getElementById("xemdoanhthungay");
order.onclick = function () {
  var check =document.getElementById("doanhthungay").value ;
  if (check!=""){
    var str ="Mã đối tác: 1 | Số đơn hàng: 1000 | Doanh thu: 50000000VND | Hoa hồng thu được: 5000000VND"
    document.getElementById("table1").innerHTML = str;
    }
  }

// xem doanh thu tháng
var revenueMonth = document.getElementById("xemdoanhthuthang");
revenueMonth.onclick = function () {
  var check =document.getElementById("doanhthuthang").value ;
  if (check!=""){
    var str ="Mã đối tác: 1 | Số đơn hàng: 50000 | Doanh thu: 500000000VND | Hoa hồng thu được: 50000000VND "
    document.getElementById("table2").innerHTML = str;
    }
  }


