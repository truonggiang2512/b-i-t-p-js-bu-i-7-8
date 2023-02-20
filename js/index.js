var mangTen = [];
document.getElementById("btn-them-so").onclick = function () {
  var themSo = Number(document.getElementById("them-so").value);
  mangTen.push(themSo);
  document.getElementById("nhap-so-nguyen").innerHTML = "[" + mangTen + "]";
  console.log(mangTen);
};

// function themSo(themSo){
//     var themSo=document.getElementById('them-so').value;
//     mangTen.push(themSo)
//     return mangTen

// }
// document.getElementById('btn-them-so').onclick= function (){
//     themSo(ketQua)
//     document.getElementById('nhap-so-nguyen').innerHTML= "["+ ketQua+ "]"
// }

/*----------------Tinh Tong-------------- */

document.getElementById("btn-tinh-tong").onclick = function () {
  var tongSo = 0;
  var output = "";
  for (var index = 0; index < mangTen.length; index++) {
    var ele = mangTen[index];
    if (ele > 0) {
      output = ele;
      tongSo += Number(output);
    }
    console.log(output);
  }

  document.getElementById("ket-qua-bai-1").innerHTML = tongSo;
};
/*----------------Dem So Duong-------------- */

document.getElementById("btn-dem-so-duong").onclick = function () {
  var output = 0;
  for (var index = 0; index < mangTen.length; index++) {
    var ele = mangTen[index];
    if (ele > 0) {
      output++;
    }
  }

  document.getElementById("ket-qua-bai-2").innerHTML = output;
};
/*----------------Tim So Nho Nhat-------------- */

document.getElementById("btn-tim-so-nho-nhat").onclick = function () {
  var eleMin = mangTen[0];
  for (var index = 0; index < mangTen.length; index++) {
    if (eleMin > mangTen[index]) {
      eleMin = mangTen[index];
    }
  }
  document.getElementById("ket-qua-bai-3").innerHTML = eleMin;
};
/*----------------Tìm Số Dương Nhỏ Nhất-------------- */
document.getElementById("btn-tim-so-duong-nho-nhat").onclick = function () {
  var eleMin = mangTen[0];
  for (var index = 0; index < mangTen.length; index++) {
    if (eleMin > 0 && mangTen[index] > 0 && mangTen[index] < eleMin) {
      eleMin = mangTen[index];
    }
    document.getElementById("ket-qua-bai-4").innerHTML = eleMin;
  }
};
/*----------------Tìm Số Chẵn cuối cùng-------------- */
document.getElementById("btn-tim-so-chan").onclick = function () {
  var soChan = -1;
  for (var index = 0; index < mangTen.length; index++) {
    var ele = mangTen[index];
    if (ele % 2 == 0) {
      soChan = ele;
    }
    document.getElementById("ket-qua-bai-5").innerHTML = soChan;
  }
};
/*----------------Đổi chỗ 2 giá trị trong mảng theo vị trí-------------- */
document.getElementById("btn-doi-cho").onclick = function () {
  var viTri1 = document.getElementById("vi-tri-1").value;
  var viTri2 = document.getElementById("vi-tri-2").value;
  var temp = 0;
  var temp = mangTen[viTri1];
  mangTen[viTri1] = mangTen[viTri2];
  mangTen[viTri2] = temp;
  //progress

  document.getElementById("ket-qua-bai-6").innerHTML = mangTen;
};
/*----------------Sắp xếp  mảng tăng dần-------------- */
document.getElementById("btn-sap-xep-tang").onclick = function () {
  mangTen.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("ket-qua-bai-7").innerHTML = mangTen;
  console.log(mangTen);
};
/*----------------Tìm số nguyên tố đầu tiên-------------- */

document.getElementById("btn-tim-so-nguyen-to").onclick = function () {
  for (var index = 0; index < mangTen.length; index++) {
    var ele = mangTen[index];
    var res = soNguyenTo(ele);
    if (res == true) {
      document.getElementById("ket-qua-bai-8").innerHTML = ele;
      break;
    }
    document.getElementById("ket-qua-bai-8").innerHTML = "-1";
  }
};
/*----------------Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?-------------- */
var mangTen2 = [];

document.getElementById("btn-them-so1").onclick = function () {
  var themSo = Number(document.getElementById("them-so1").value);
  mangTen2.push(themSo);
  document.getElementById("nhap-so-nguyen1").innerHTML = "[" + mangTen2 + "]";
  console.log(mangTen2);
};
debugger;
document.getElementById("btn-dem-so-nguyen").onclick = function () {
  var dem = 0;
  for (var index = 0; index < mangTen2.length; index++) {
    var ele = mangTen2[index];
    var res = soNguyen(ele);
    if (res == 1) {
      dem++;
      document.getElementById("ket-qua-bai-9").innerHTML = dem;
    }
  }
};
/*----------------So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.-------------- */
document.getElementById("btn-so-sanh").onclick = function () {
  var soAm = 0;
  var soDuong = 0;
  for (var index = 0; index < mangTen.length; index++) {
    var ele = mangTen[index];
    if (ele < 0) {
      soAm++;
    } else {
      soDuong++;
    }
  }
  if (soAm < soDuong) {
    document.getElementById("ket-qua-bai-10").innerHTML = "Số Âm < Số Dương";
  } else if (soAm > soDuong) {
    document.getElementById("ket-qua-bai-10").innerHTML = "Số Âm > Số Dương";
  } else if ((soAm = soDuong)) {
    document.getElementById("ket-qua-bai-10").innerHTML = "Số Âm = Số Dương";
  }
};
