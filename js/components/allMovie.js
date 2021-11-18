// const url = 'https://englishdiary-web-server.herokuapp.com'
const url = 'http://localhost:5000'

let headersList = {
    "Content-Type": "application/json"
}

fetch(`${url}/video/show`, {
    method: "GET",
    headers: headersList
}).then(function (response) {
    return response.json();
}).then(function (data) {
    const pages = Math.ceil(data.length/4.0);
    for (let page = 0; page < pages; page++) {
        const div = document.createElement("div");
        div.classList.add("page");
        for (let movie = 0; movie < 4 && (4*page+movie) < data.length; movie++) {
            const cur = data[4*page+movie];
            const div1 = document.createElement("div");
            div1.classList.add("col-lg-6", "col-sm-12");
            const h2 = document.createElement("h2");
            h2.classList.add("entry-title", "post-title");
            h2.innerHTML = "movie " + cur.ID_video + ": " + cur.name;
            const img = document.createElement("img");
            img.classList.add("img-border");
            img.setAttribute("src",cur.image);
            const a = document.createElement("a");
            a.classList.add("button","blue");
            a.setAttribute("href", "movie.html");
            a.setAttribute("onclick", "localStorage.setItem('movieId','"+cur.ID_video+"')");
            a.innerHTML = "LET'S GO!";
            const sep = document.createElement("div");
            sep.classList.add("separator");
            div1.appendChild(h2);
            div1.appendChild(img);
            div1.appendChild(a);
            div1.appendChild(sep);
            div.appendChild(div1);
        }
        document.querySelector(".allMovie").appendChild(div);
    }
})

function findMovie() {
    const content = document.getElementById('typing').value;
    fetch(`${url}/video/search/${content}`, {
        method: "GET",
        headers: headersList
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        const remove = document.querySelector('.allMovie');
        const all = document.createElement('div');
        all.classList.add("allMovie");
        document.querySelector('.content-bg').replaceChild(all, remove);
        const pages = Math.ceil(data.length/4.0);
        console.log(pages);
        for (let page = 0; page < pages; page++) {
            const div = document.createElement("div");
            div.classList.add("page");
            for (let movie = 0; movie < 4 && (4*page+movie) < data.length; movie++) {
                const cur = data[4*page+movie];
                const div1 = document.createElement("div");
                div1.classList.add("col-lg-6", "col-sm-12");
                const h2 = document.createElement("h2");
                h2.classList.add("entry-title", "post-title");
                h2.innerHTML = "movie " + cur.ID_video + ": " + cur.name;
                const img = document.createElement("img");
                img.classList.add("img-border");
                img.setAttribute("src",cur.image);
                const a = document.createElement("a");
                a.classList.add("button","blue");
                a.setAttribute("href", "movie.html");
                a.setAttribute("onclick", "localStorage.setItem('movieId','"+cur.ID_video+"')");
                a.innerHTML = "LET'S GO!";
                const sep = document.createElement("div");
                sep.classList.add("separator");
                div1.appendChild(h2);
                div1.appendChild(img);
                div1.appendChild(a);
                div1.appendChild(sep);
                div.appendChild(div1);
            }
            document.querySelector(".allMovie").appendChild(div);
        }
    })
    myFunction();
}

