document.getElementById('ltdl_form').addEventListener('submit', function(e) {
    e.preventDefault();

    let isValid = true;
    const errorFields = document.querySelectorAll('.ltdl_error');
    errorFields.forEach(el => el.textContent = '');

   //Email
    const email = document.getElementById('ltdl_email');
    if (!email.value.trim()) {
        document.getElementById('error_email').textContent = 'Email không được để trống';
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        document.getElementById('error_email').textContent = 'Email không hợp lệ';
        isValid = false;
    }

    // Password 
    const password = document.getElementById('ltdl_password');
    if (!password.value.trim()) {
        document.getElementById('error_password').textContent = 'Mật khẩu không được để trống';
        isValid = false;
    } else if (password.value.length < 6) {
        document.getElementById('error_password').textContent = 'Mật khẩu phải có ít nhất 6 ký tự';
        isValid = false;
    }

    // Address
    const address = document.getElementById('ltdl_address');
    if (!address.value.trim()) {
        document.getElementById('error_address').textContent = 'Địa chỉ không được để trống';
        isValid = false;
    }

    // City 
    const city = document.getElementById('ltdl_city');
    if (!city.value.trim()) {
        document.getElementById('error_city').textContent = 'Thành phố không được để trống';
        isValid = false;
    }

    // State
    const state = document.getElementById('ltdl_state');
    if (!state.value) {
        document.getElementById('error_state').textContent = 'Vui lòng chọn tiểu bang';
        isValid = false;
    }

    //zip
    const zip = document.getElementById('ltdl_zip');
    if (!zip.value.trim()) {
        document.getElementById('error_zip').textContent = 'Zip không được để trống';
        isValid = false;
    } else if (!/^\d{5}$/.test(zip.value.trim())) {
        document.getElementById('error_zip').textContent = 'Zip phải gồm 5 chữ số';
        isValid = false;
    }

    // Nếu hợp lệ, gửi form (ví dụ alert thành công)
    if (isValid) {
        alert('Đăng nhập thành công!');
    }
});
