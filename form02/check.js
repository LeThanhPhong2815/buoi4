function KiemTra()
{
	var hoten = f.HoTen.value;
	var diachi = f.DiaChi.value;
	var email = f.Email.value;
	var dienthoai = f.DienThoai.value;
	if(hoten == '')
	{
		alert('Họ tên không được bỏ trống!');
		return false;
	}
	if(diachi == '')
	{
		alert('Địa chỉ không được bỏ trống!');
		return false;
	}
		if(email == '')
	{
		alert('Email không được bỏ trống!');
		return false;
	}
		if(dienthoai == '')
	{
		alert('Điện Thoại không được bỏ trống!');
		return false;
	}
	return true;
}