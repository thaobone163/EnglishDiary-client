const url = 'https://englishdiary-web-server.herokuapp.com'
// const url = 'http://localhost:5000'

let headersList = {
    "Content-Type": "application/json"
}

const id = localStorage.getItem('topicId');

fetch(`${url}/topic/id/${id}`, {
    method: "GET",
    headers: headersList
}).then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data);
    const {tenchude} = data;
    const {image} = data;
    document.getElementById('topic').innerHTML = "topic: " + tenchude;
    document.getElementById('img').setAttribute("src",image)
})

fetch(`${url}/lesson/show/${id}`, {
    method: "GET",
    headers: headersList
}).then(function (response) {
    return response.json();
}).then(function (data) {
    for (let lesson = 0; lesson < data.length; lesson++) {
        const div = document.createElement("div");
        div.classList.add("col-lg-6", "col-sm-12");
        div.style.width = "800px";
        const h2 = document.createElement("h2");
        h2.classList.add("entry-title", "post-title");
        const a = document.createElement("a");
        a.setAttribute("href","lesson.html");
        a.innerHTML = "lesson " + data[lesson].ID_baihoc + ": " + data[lesson].tenbai;
        a.setAttribute("onclick", "localStorage.setItem('lessonId','"+data[lesson].ID_baihoc+"')");
        const clear = document.createElement("div");
        clear.classList.add("clearfix");
        h2.appendChild(a);
        div.appendChild(h2);
        document.querySelector(".gallery").appendChild(div);
        document.querySelector(".gallery").appendChild(clear);
    }
})