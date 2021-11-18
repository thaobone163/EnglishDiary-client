const url = 'https://englishdiary-web-server.herokuapp.com'
// const url = 'http://localhost:5000'

let headersList = {
    "Content-Type": "application/json"
}

const user = localStorage.getItem('userId');
const basic = document.getElementById('progress1');
const advance = document.getElementById('progress2');

fetch(`${url}/progress/count/${user}`, {
    method: "GET",
    headers: headersList
}).then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data);
    if(data[0].ID_kh === 1) {
        // result1 = data[0].hasDone;
        basic.innerHTML = data[0].hasDone;
        // result2 = data[1].hasDone;
        advance.innerHTML = data[1].hasDone;
    } else {
        // result1 = data[0].hasDone;
        basic.innerHTML = data[1].hasDone;
        // result2 = data[1].hasDone;
        advance.innerHTML = data[0].hasDone;
    }
})

fetch(`${url}/progress/countAll`, {
    method: "GET",
    headers: headersList
}).then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data);
    let result1 = basic.innerHTML;
    let result2 = advance.innerHTML;
    result1 = result1 * 100.0 / data[0].countAll;
    result2 = result2 * 100.0 / data[1].countAll;
    basic.setAttribute("aria-valuenow",result1.toString());
    basic.setAttribute("style", "width:" + result1 +"%");
    basic.innerHTML = result1.toFixed(1) + "%";
    advance.setAttribute("aria-valuenow",result2.toString());
    advance.setAttribute("style", "width:" + result2 +"%");
    advance.innerHTML = result2.toFixed(1) + "%";
})

