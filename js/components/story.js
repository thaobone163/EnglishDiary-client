const url = 'https://englishdiary-web-server.herokuapp.com'
// const url = 'http://localhost:5000'

let headersList = {
    "Content-Type": "application/json"
}

const id = localStorage.getItem('storyId');

fetch(`${url}/story/load/${id}`, {
    method: "GET",
    headers: headersList
}).then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data);
    const {ID_truyen} = data;
    const {tentruyen} = data;
    const {link} = data;
    const {noidung} = data;
    const {dich} = data;
    document.getElementById('title').innerHTML = "story "+ ID_truyen + ": " + tentruyen;
    document.getElementById('link').setAttribute("src", link);
    document.getElementById('contentStory').innerHTML = noidung;
    document.getElementById('translate').innerHTML = dich;
    document.getElementById('translate').style.display = "none";
})

function translateStory() {
    document.querySelector('.green').classList.toggle("translate")
    const button = document.getElementById('button');
    if(document.querySelector('.green').classList.contains("translate")) {
        document.getElementById('contentStory').style.display = "none";
        document.getElementById('translate').style.display = "block";
        button.innerHTML = "Xem lời kể tiếng Anh";
    } else {
        document.getElementById('translate').style.display = "none";
        document.getElementById('contentStory').style.display = "block";
        button.innerHTML = "Dịch câu chuyện";

    }
}
