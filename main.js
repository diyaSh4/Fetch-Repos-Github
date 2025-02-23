let button = document.querySelector(".button");
theInput = document.querySelector(".get-repos input");
reposData = document.querySelector(".show-data");

function getRepos() {
    if (theInput.value == ""){
        reposData.innerHTML = "<span> Please Enter Github Username.</span>";
    }else{
        fetch(`https://api.github.com/users/${theInput.value}/repos`)
        .then((res) => {
            return res.json();
        })
        .then((data) =>{
            reposData.innerHTML = "";
            data.forEach(rep =>{
                let myDiv = document.createElement("div");
                let repName = document.createTextNode(rep.name);
                myDiv.appendChild(repName);

                // URL Visit
                let url = document.createElement("a");
                let urlText = document.createTextNode("visit");
                url.appendChild(urlText);
                url.href = `https://github.com/${theInput.value}/${rep.name}`;

                // Stars Count
                let myStars = document.createElement("span");
                let starsText = document.createTextNode(`Stars ${rep.stargazers_count}`);
                myStars.appendChild(starsText);

                // New Blank
                url.setAttribute('target', '_blank');

                // AppendChild MainDiv
                myDiv.className = "rep";
                myDiv.appendChild(url);
                myDiv.appendChild(myStars);
                reposData.appendChild(myDiv);
            })
        });
    }
}
button.onclick = function(){
    getRepos();
}