function soNguyenTo(giaTri) {
  var dem = 0;
  var output = false;
  for (var uoc = 1; uoc <= giaTri; uoc++) {
    if (giaTri % uoc == 0) {
      dem++;
    }
  }
  if (dem == 2) {
    output = true;
  }
  return output;
}
function soNguyen(giaTri) {
  //flag = 1 => là số nguyên
  //flag = 0 => không phải là số nguyên

  var flag = 1;
  if (Math.ceil(giaTri) != Math.floor(giaTri)) flag = 0;
  return flag;
}
function hoanDoi(array, vitri1, vitri2) {
  var temp = array(vitri1);
  array(vitri1)= array(vitri1);
  array(vitri2)=temp;
  console.log(array)


}
