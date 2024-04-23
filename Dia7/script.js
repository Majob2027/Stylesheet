function fetchSuperHero(){
    let xhr = new XMLHttpRequest();
    let heroID = document.getElementById("heroId").value;
    console.log(heroID)
    let apiKey = "f62ff62198a3bc82bbd53c14bf386cfb"
    let url = `https://www.superheroapi.com/api.php/${apiKey}/${heroID}`;
    xhr.open("GET",url,true);
    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            displayHero(response);
            displayAllHeroes(response); // Esta línea debe estar dentro del bloque condicional
        } 
        else if(this.readyState == 4){
            console.log("Error:",this.statusText);
        }
    };
    
    xhr.send();
}
function displayHero(data){
    let heroInfo = document.getElementById("superHeroInfo");
    if (data.response === "error"){
        heroInfo.innerHTML = `<p>Error: ${data.error}</p>`
    } else{
        heroInfo.innerHTML = `
        <p>Name: ${data.name}</p>
        `
    }
}


function displayAllHeroes(data) {
    let heroInfo = document.getElementById("superHeroInfo");
    if (data.response === "error") {
        heroInfo.innerHTML = `<p>Error: ${data.error}</p>`;
    } else {
        let heroes = data.results;
        let names = heroes.map(hero => `<p>Name: ${hero.name}</p>`);
        heroInfo.innerHTML = names.join("");
    }
}
