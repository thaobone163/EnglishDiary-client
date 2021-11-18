const url = 'https://englishdiary-web-server.herokuapp.com'
// const url = 'http://localhost:5000'

let headersList = {
    "Content-Type": "application/json"
}

const id = localStorage.getItem('userId');

fetch(`${url}/profile/id/${id}`, {
    method: "GET",
    headers: headersList
}).then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data);
    const {fullname} = data;
    const {email} = data;
    const {sdt} = data;
    const {ngaysinh} = data;
    const {diachi} = data;
    document.getElementById('fullName').value = fullname;
    document.getElementById('dob').value = ngaysinh;
    document.getElementById('address').value = diachi;
    document.getElementById('phone').value = sdt;
    document.getElementById('email').value = email;
})

function updateAccount() {
    const id = localStorage.getItem('userId');
    const fullName = document.getElementById("fullName").value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    console.log("do it")
    fetch(`${url}/profile/update`, {
        method: "PUT",
        body: JSON.stringify({
            "ID_nguoihoc": id,
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
    window.location.href = 'info.html'
}
