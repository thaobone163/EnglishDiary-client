const url = 'https://englishdiary-web-server.herokuapp.com'
// const url = 'http://localhost:5000'

let headersList = {
    "Content-Type": "application/json"
}

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
