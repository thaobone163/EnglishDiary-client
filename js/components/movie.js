const url = 'https://englishdiary-web-server.herokuapp.com'
// const url = 'http://localhost:5000'

let headersList = {
    "Content-Type": "application/json"
}

const id = localStorage.getItem('movieId');

fetch(`${url}/video/load/${id}`, {
    method: "GET",
    headers: headersList
}).then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data);
    const {ID_video} = data;
    const {name} = data;
    const {noidung} = data;
    document.getElementById('title').innerHTML = "movie "+ ID_video + ": " + name;
    document.getElementById('link').setAttribute("src", noidung);
})
