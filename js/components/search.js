const url = 'https://englishdiary-web-server.herokuapp.com'
// const url = 'http://localhost:5000'

let headersList = {
    "Content-Type": "application/json"
}

function lookUp() {
    const target = document.getElementById("search").value;
    fetch(`${url}/vocabulary/search/${target}`, {
        method: "GET",
        headers: headersList
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        const remove = document.querySelector('.result');
        const all = document.createElement('div');
        all.classList.add("result");
        const alter = document.createElement('p');
        let count = data.length? data.length:0;
        alter.innerHTML = 'Có ' + count + ' kết quả liên quan';
        all.appendChild(alter)
        document.querySelector('.content-bg').replaceChild(all, remove);
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
            document.querySelector(".result").appendChild(div);
        }
    })
}