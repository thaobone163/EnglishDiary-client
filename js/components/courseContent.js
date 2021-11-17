const url = 'https://englishdiary-web-server.herokuapp.com'
// const url = 'http://localhost:5000'

let headersList = {
    "Content-Type": "application/json"
}

const id = localStorage.getItem('courseID');

fetch(`${url}/course/id/${id}`, {
    method: "GET",
    headers: headersList
}).then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data);
    const {mota} = data;
    document.getElementById('describe').innerHTML = mota;
})

fetch(`${url}/topic/show/${id}`, {
    method: "GET",
    headers: headersList
}).then(function (response) {
    return response.json();
}).then(function (data) {
    const pages = Math.ceil(data.length/4.0);
    for (let page = 0; page < pages; page++) {
        const div = document.createElement("div");
        div.classList.add("page");
        for (let topic = 0; topic < 4 && (4*page+topic) < data.length; topic++) {
            const cur = data[4*page+topic];
            const div1 = document.createElement("div");
            div1.classList.add("col-lg-6", "col-sm-12");
            const h2 = document.createElement("h2");
            h2.classList.add("entry-title", "post-title");
            h2.innerHTML = "topic " + cur.ID_chude + ": " + cur.tenchude;
            const img = document.createElement("img");
            img.classList.add("img-border");
            img.setAttribute("src",cur.image);
            const a = document.createElement("a");
            a.classList.add("button","blue");
            a.setAttribute("href", "allLesson.html");
            a.setAttribute("onclick", "localStorage.setItem('topicId','"+cur.ID_chude+"')");
            a.innerHTML = "LET'S GO!";
            const sep = document.createElement("div");
            sep.classList.add("separator");
            div1.appendChild(h2);
            div1.appendChild(img);
            div1.appendChild(a);
            div1.appendChild(sep);
            div.appendChild(div1);
        }
        document.querySelector(".allTopic").appendChild(div);
    }
})

function findTopic() {
    const content = document.getElementById('typing').value;
    fetch(`${url}/topic/search/${content}/${id}`, {
        method: "GET",
        headers: headersList
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        const remove = document.querySelector('.allTopic');
        const all = document.createElement('div');
        all.classList.add("allTopic");
        document.querySelector('.content-bg').replaceChild(all, remove);
        const pages = Math.ceil(data.length/4.0);
        console.log(pages);
        for (let page = 0; page < pages; page++) {
            const div = document.createElement("div");
            div.classList.add("page");
            for (let topic = 0; topic < 4 && (4*page+topic) < data.length; topic++) {
                const cur = data[4*page+topic];
                const div1 = document.createElement("div");
                div1.classList.add("col-lg-6", "col-sm-12");
                const h2 = document.createElement("h2");
                h2.classList.add("entry-title", "post-title");
                h2.innerHTML = "topic " + cur.ID_chude + ": " + cur.tenchude;
                const img = document.createElement("img");
                img.classList.add("img-border");
                img.setAttribute("src",cur.image);
                const a = document.createElement("a");
                a.classList.add("button","blue");
                a.setAttribute("href", "allLesson.html");
                a.setAttribute("onclick", "localStorage.setItem('topicId','"+cur.ID_chude+"')");
                a.innerHTML = "LET'S GO!";
                const sep = document.createElement("div");
                sep.classList.add("separator");
                div1.appendChild(h2);
                div1.appendChild(img);
                div1.appendChild(a);
                div1.appendChild(sep);
                div.appendChild(div1);
            }
            document.querySelector(".allTopic").appendChild(div);
        }
    })
    myFunction();
}

