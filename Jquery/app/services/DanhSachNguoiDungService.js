function DanhSachNguoiDungService() {
  //Lấy Ds người dùng từ server (thông qua API)
  this.layDanhSachNguoiDung = function() {
    return $.ajax({
      url: "http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung",
      type: "GET"
    });
    // .done(function(result){
    //     console.log(result);
    // })
    // .fail(function(err){
    //     console.log(err)
    // })
  };
  this.themNguoiDung = function(dataNguoiDung) {
    return $.ajax({
      url: "http://svcy.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung",
      type: "POST",
      data: dataNguoiDung
    });
  };
  this.XoaNguoiDung = function(id) {
    var mangKQxoa = [];
    return $.ajax({
      url: `http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${id}`,
      type: "DELETE"
    });
  };
}
