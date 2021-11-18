const url = 'https://englishdiary-web-server.herokuapp.com'
// const url = 'http://localhost:5000'

let headersList = {
    "Content-Type": "application/json"
}

fetch(`${url}/song/show`, {
    method: "GET",
    headers: headersList
}).then(function (response) {
    return response.json();
}).then(function (data) {
    const pages = Math.ceil(data.length/4.0);
    for (let page = 0; page < pages; page++) {
        const div = document.createElement("div");
        div.classList.add("page");
        for (let song = 0; song < 4 && (4*page+song) < data.length; song++) {
            const cur = data[4*page+song];
            const div1 = document.createElement("div");
            div1.classList.add("col-lg-6", "col-sm-12");
            const h2 = document.createElement("h2");
            h2.classList.add("entry-title", "post-title");
            h2.innerHTML = "song " + cur.ID_baihat + ": " + cur.tenbai;
            const img = document.createElement("img");
            img.classList.add("img-border");
            img.setAttribute("src",cur.image);
            const a = document.createElement("a");
            a.classList.add("button","blue");
            a.setAttribute("href", "song.html");
            a.setAttribute("onclick", "localStorage.setItem('songId','"+cur.ID_baihat+"')");
            a.innerHTML = "LET'S GO!";
            const sep = document.createElement("div");
            sep.classList.add("separator");
            div1.appendChild(h2);
            div1.appendChild(img);
            div1.appendChild(a);
            div1.appendChild(sep);
            div.appendChild(div1);
        }
        document.querySelector(".allSong").appendChild(div);
    }
})

function findSong() {
    const content = document.getElementById('typing').value;
    fetch(`${url}/song/search/${content}`, {
        method: "GET",
        headers: headersList
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        const remove = document.querySelector('.allSong');
        const all = document.createElement('div');
        all.classList.add("allSong");
        document.querySelector('.content-bg').replaceChild(all, remove);
        const pages = Math.ceil(data.length/4.0);
        console.log(pages);
        for (let page = 0; page < pages; page++) {
            const div = document.createElement("div");
            div.classList.add("page");
            for (let song = 0; song < 4 && (4*page+song) < data.length; song++) {
                const cur = data[4*page+song];
                const div1 = document.createElement("div");
                div1.classList.add("col-lg-6", "col-sm-12");
                const h2 = document.createElement("h2");
                h2.classList.add("entry-title", "post-title");
                h2.innerHTML = "song " + cur.ID_baihat + ": " + cur.tenbai;
                const img = document.createElement("img");
                img.classList.add("img-border");
                img.setAttribute("src",cur.image);
                const a = document.createElement("a");
                a.classList.add("button","blue");
                a.setAttribute("href", "song.html");
                a.setAttribute("onclick", "localStorage.setItem('songId','"+cur.ID_baihat+"')");
                a.innerHTML = "LET'S GO!";
                const sep = document.createElement("div");
                sep.classList.add("separator");
                div1.appendChild(h2);
                div1.appendChild(img);
                div1.appendChild(a);
                div1.appendChild(sep);
                div.appendChild(div1);
            }
            document.querySelector(".allSong").appendChild(div);
        }
    })
    myFunction();
}

