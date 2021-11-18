const url = 'https://englishdiary-web-server.herokuapp.com'
// const url = 'http://localhost:5000'

let headersList = {
    "Content-Type": "application/json"
}

const id = localStorage.getItem('songId');

fetch(`${url}/song/load/${id}`, {
    method: "GET",
    headers: headersList
}).then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data);
    const {ID_baihat} = data;
    const {tenbai} = data;
    const {baihat} = data;
    const {loibaihat} = data;
    document.getElementById('title').innerHTML = "song "+ ID_baihat + ": " + tenbai;
    document.getElementById('link').setAttribute("src", baihat);
    document.getElementById('contentSong').innerHTML = loibaihat;
})
