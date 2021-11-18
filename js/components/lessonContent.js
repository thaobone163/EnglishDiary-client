const url = 'https://englishdiary-web-server.herokuapp.com'
// const url = 'http://localhost:5000'

let headersList = {
    "Content-Type": "application/json"
}

const id = localStorage.getItem('lessonId');

fetch(`${url}/lesson/id/${id}`, {
    method: "GET",
    headers: headersList
}).then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data);
    const {tenbai} = data;
    document.getElementById('lesson').innerHTML = "topic: " + tenbai;
})

fetch(`${url}/vocabulary/show/${id}`, {
    method: "GET",
    headers: headersList
}).then(function (response) {
    return response.json();
}).then(function (data) {
    for (let word = 0; word < data.length; word++) {
        const div = document.createElement("div");
        div.classList.add("col-lg-6", "col-sm-12");
        const h2 = document.createElement("h2");
        h2.classList.add("entry-title", "post-title", "textSpeech");
        h2.innerHTML = data[word].tu;
        const div1 = document.createElement("div");
        div1.classList.add("post-meta", "mg-b10");
        const p = document.createElement("p");
        p.innerHTML = data[word].nghia;
        const p1 = document.createElement("p");
        p1.setAttribute("align","justify");
        p1.innerHTML = data[word].phat_am;
        const button = document.createElement("button");
        button.classList.add("button", "blue", "speak");
        button.setAttribute("onclick", "start(this)");
        button.innerHTML = "Phát âm";
        const sep = document.createElement("div");
        sep.classList.add("separator");
        div1.appendChild(p);
        p1.appendChild(button);
        div.appendChild(h2);
        div.appendChild(div1);
        div.appendChild(p1);
        div.appendChild(sep);
        document.querySelector("#all").appendChild(div);
    }
})

const user = localStorage.getItem('userId')
fetch(`${url}/progress/status/${user}/${id}`, {
    method: "GET",
    headers: headersList
}).then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data);
    const {trangthai} = data;
    if(trangthai === 1) {
        document.getElementById('progress').innerHTML = "Bé đã hoàn thành bài học";
    } else {
        document.getElementById('progress').innerHTML = "Hoàn thành bài học";

    }
})

function doneThis() {
    const newStatus = document.getElementById('progress').innerHTML === "Hoàn thành bài học"? 1 : -1;
    fetch(`${url}/progress/update`, {
        method: "POST",
        body: JSON.stringify({
            "ID_nguoihoc": user,
            "ID_baihoc": id,
            "trangthai": newStatus
        }),
        headers: headersList
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
        window.location.reload();
    });
}


