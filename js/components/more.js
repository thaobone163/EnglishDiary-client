const url = 'https://englishdiary-web-server.herokuapp.com'
// const url = 'http://localhost:5000'

let headersList = {
    "Content-Type": "application/json"
}

const id = localStorage.getItem('topicId');

fetch(`${url}/story/id/${id}`, {
    method: "GET",
    headers: headersList
}).then(function (response) {
    return response.json();
}).then(function (data) {
    for (let story = 0; story < data.length; story++) {
        const div1 = document.createElement("div");
        div1.classList.add("col-lg-6", "col-sm-12");
        const h2 = document.createElement("h2");
        h2.classList.add("entry-title", "post-title");
        h2.innerHTML = "story: " + data[story].tentruyen;
        const img = document.createElement("img");
        img.classList.add("img-border");
        img.setAttribute("src", data[story].image);
        const a = document.createElement("a");
        a.classList.add("button", "blue");
        a.setAttribute("href", "story.html");
        a.setAttribute("onclick", "localStorage.setItem('storyId','" + data[story].ID_truyen + "')");
        a.innerHTML = "LET'S GO!";
        const sep = document.createElement("div");
        sep.classList.add("separator");
        div1.appendChild(h2);
        div1.appendChild(img);
        div1.appendChild(a);
        div1.appendChild(sep);
        document.querySelector(".more").appendChild(div1);
    }
})

fetch(`${url}/video/id/${id}`, {
    method: "GET",
    headers: headersList
}).then(function (response) {
    return response.json();
}).then(function (data) {
    for (let video = 0; video < data.length; video++) {
        const div1 = document.createElement("div");
        div1.classList.add("col-lg-6", "col-sm-12");
        const h2 = document.createElement("h2");
        h2.classList.add("entry-title", "post-title");
        h2.innerHTML = "movie: " + data[video].name;
        const img = document.createElement("img");
        img.classList.add("img-border");
        img.setAttribute("src", data[video].image);
        const a = document.createElement("a");
        a.classList.add("button", "blue");
        a.setAttribute("href", "movie.html");
        a.setAttribute("onclick", "localStorage.setItem('movieId','" + data[video].ID_video + "')");
        a.innerHTML = "LET'S GO!";
        const sep = document.createElement("div");
        sep.classList.add("separator");
        div1.appendChild(h2);
        div1.appendChild(img);
        div1.appendChild(a);
        div1.appendChild(sep);
        document.querySelector(".more").appendChild(div1);
    }
})

fetch(`${url}/song/id/${id}`, {
    method: "GET",
    headers: headersList
}).then(function (response) {
    return response.json();
}).then(function (data) {
    for (let song = 0; song < data.length; song++) {
        const div1 = document.createElement("div");
        div1.classList.add("col-lg-6", "col-sm-12");
        const h2 = document.createElement("h2");
        h2.classList.add("entry-title", "post-title");
        h2.innerHTML = "song: " + data[song].tenbai;
        const img = document.createElement("img");
        img.classList.add("img-border");
        img.setAttribute("src", data[song].image);
        const a = document.createElement("a");
        a.classList.add("button", "blue");
        a.setAttribute("href", "song.html");
        a.setAttribute("onclick", "localStorage.setItem('songId','" + data[song].ID_baihat + "')");
        a.innerHTML = "LET'S GO!";
        const sep = document.createElement("div");
        sep.classList.add("separator");
        div1.appendChild(h2);
        div1.appendChild(img);
        div1.appendChild(a);
        div1.appendChild(sep);
        document.querySelector(".more").appendChild(div1);
    }
})
