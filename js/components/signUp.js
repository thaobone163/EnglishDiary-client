const url = 'https://englishdiary-web-server.herokuapp.com'
// const url = 'http://localhost:5000'

let headersList = {
    "Content-Type": "application/json"
}

function createAccount() {
    const fullName = document.getElementById("fullName").value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById("username").value;
    const password = document.getElementById('password').value;
    console.log("do it")
    fetch(`${url}/profile/create`, {
        method: "POST",
        body: JSON.stringify({
            "fullname": fullName,
            "email": email,
            "sdt": phone,
            "ngaysinh": dob,
            "diachi": address
        }),
        headers: headersList
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
    });
    fetch(`${url}/account/create`, {
        method: "POST",
        body:JSON.stringify({
            "tendangnhap": username,
            "matkhau": password
        }),
        headers : headersList
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data)
        let {message} = data;
        if(!message) {
            alert('Đăng ký thành công');
            window.location.href = 'login.html';
        } else {
            alert('Đăng ký thất bại. Vui lòng kiểm tra lại format đăng ký!');
            window.location.reload();
        }
    })
}
