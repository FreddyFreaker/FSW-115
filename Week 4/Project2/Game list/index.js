axios.get("http://api.bryanuniversity.edu/jeremiah1/list/")
.then(response => {

    for (let i =0; i<response.data.length; i++){
        const list= document.createElement("li")
        let gameList = document.getElementById("gameList")
        list.textContent = response.data[i].name + " genre: " + response.data[i].description

        gameList.appendChild(list)

    }


})