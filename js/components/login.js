const url = 'https://englishdiary-web-server.herokuapp.com'
// const url = 'http://localhost:5000'

let headersList = {
    "Content-Type": "application/json"
}

function sendAccount() {
    const username = document.getElementById("username").value;
    const password = document.getElementById('password').value;
    console.log("do it")
    fetch(`${url}/users/login`, {
        method: "POST",
        body: JSON.stringify({
            "tendangnhap": username,
            "matkhau": password
        }),
        headers: headersList
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
        let {ID_tk} = data;
        if (ID_tk) {
            console.log(ID_tk);
            localStorage.setItem('userId', ID_tk);
            window.location.href = 'index.html'
        } else {
            alert('Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin đăng nhập!');
            window.location.reload()
        }
    })
}
