function check()
{
	//Lưu ý: đặt tên cho form là f
	var username = f.TenDangNhap.value;
	var password = f.MatKhau.value;
	if(username == '')
	{
		alert('Tên đăng nhập không được bỏ trống!');
		return false;
	}
	if(Password == '')
	{
		alert('Mật khẩu không được bỏ trống!');
		return false;
	}
	return true;
}