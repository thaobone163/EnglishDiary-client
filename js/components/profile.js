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
    const {ID_nguoihoc} = data;
    const {fullname} = data;
    const {email} = data;
    const {sdt} = data;
    const {ngaysinh} = data;
    const {diachi} = data;
    document.getElementById('id').innerHTML = ID_nguoihoc;
    document.getElementById('fullName').innerHTML = fullname;
    document.getElementById('dob').innerHTML = ngaysinh;
    document.getElementById('address').innerHTML = diachi;
    document.getElementById('phone').innerHTML = sdt;
    document.getElementById('email').innerHTML = email;
})
