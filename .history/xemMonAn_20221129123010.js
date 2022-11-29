// Modal model-chitietsanpham
// var modal2 = document.getElementById("model-chitietsanpham");
// var btn2 = document.getElementById("chitietsanpham");
// var close2 = document.getElementsByClassName("close")[0];
// var close_footer2 = document.getElementsByClassName("close-footer")[0];
// var order2 = document.getElementById("luuSP");



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
