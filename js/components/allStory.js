const url = 'https://englishdiary-web-server.herokuapp.com'
// const url = 'http://localhost:5000'

let headersList = {
    "Content-Type": "application/json"
}

fetch(`${url}/story/show`, {
    method: "GET",
    headers: headersList
}).then(function (response) {
    return response.json();
}).then(function (data) {
    const pages = Math.ceil(data.length/4.0);
    for (let page = 0; page < pages; page++) {
        const div = document.createElement("div");
        div.classList.add("page");
        for (let story = 0; story < 4 && (4*page+story) < data.length; story++) {
            const cur = data[4*page+story];
            const div1 = document.createElement("div");
            div1.classList.add("col-lg-6", "col-sm-12");
            const h2 = document.createElement("h2");
            h2.classList.add("entry-title", "post-title");
            h2.innerHTML = "story " + cur.ID_truyen + ": " + cur.tentruyen;
            const img = document.createElement("img");
            img.classList.add("img-border");
            img.setAttribute("src",cur.image);
            const a = document.createElement("a");
            a.classList.add("button","blue");
            a.setAttribute("href", "story.html");
            a.setAttribute("onclick", "localStorage.setItem('storyId','"+cur.ID_truyen+"')");
            a.innerHTML = "LET'S GO!";
            const sep = document.createElement("div");
            sep.classList.add("separator");
            div1.appendChild(h2);
            div1.appendChild(img);
            div1.appendChild(a);
            div1.appendChild(sep);
            div.appendChild(div1);
        }
        document.querySelector(".allStory").appendChild(div);
    }
})

function findStory() {
    const content = document.getElementById('typing').value;
    fetch(`${url}/story/search/${content}`, {
        method: "GET",
        headers: headersList
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        const remove = document.querySelector('.allStory');
        const all = document.createElement('div');
        all.classList.add("allStory");
        document.querySelector('.content-bg').replaceChild(all, remove);
        const pages = Math.ceil(data.length/4.0);
        console.log(pages);
        for (let page = 0; page < pages; page++) {
            const div = document.createElement("div");
            div.classList.add("page");
            for (let story = 0; story < 4 && (4*page+story) < data.length; story++) {
                const cur = data[4*page+story];
                const div1 = document.createElement("div");
                div1.classList.add("col-lg-6", "col-sm-12");
                const h2 = document.createElement("h2");
                h2.classList.add("entry-title", "post-title");
                h2.innerHTML = "story " + cur.ID_truyen + ": " + cur.tentruyen;
                const img = document.createElement("img");
                img.classList.add("img-border");
                img.setAttribute("src",cur.image);
                const a = document.createElement("a");
                a.classList.add("button","blue");
                a.setAttribute("href", "story.html");
                a.setAttribute("onclick", "localStorage.setItem('storyId','"+cur.ID_truyen+"')");
                a.innerHTML = "LET'S GO!";
                const sep = document.createElement("div");
                sep.classList.add("separator");
                div1.appendChild(h2);
                div1.appendChild(img);
                div1.appendChild(a);
                div1.appendChild(sep);
                div.appendChild(div1);
            }
            document.querySelector(".allStory").appendChild(div);
        }
    })
    myFunction();
}

