
const grabData = async () =>{
 
    try{
        const response = await  axios.get("https://swapi.dev/api/people/2")
        const homeWorld = await axios.get(response.data.homeworld)
        console.log(response.data.name)
        console.log(homeWorld.data.name)
        
        const title = () =>{
           const name = document.getElementById("name")
        const h1 = document.createElement("h1")
        h1.textContent = response.data.name
        name.appendChild(h1)  
        }
        
       

       const planet = () => {
           const planet = document.getElementById("planet")
           const h2 = document.createElement("h2")
           h2.textContent = homeWorld.data.name
           planet.appendChild(h2)
       }
        
        title()
        planet()
        
        
    }

    catch(error){
        console.log(error)
    }


}

const grabAllMovies = async () =>{
    const c3p0 = await axios.get("https://swapi.dev/api/people/2")
    const films = c3p0.data.films
        const pendingFilms = []


    for(let i =0; i < films.length; i++){
        pendingFilms.push(axios.get(films[i]))
    }
    
    Promise.all(pendingFilms)
    .then(res =>{ 
        const film = res
        
       for(let i=0; i < res.length; i++){
            console.log(film[i].data.title)

            const li = document.createElement("li")
            li.textContent = film[i].data.title
            const list = document.getElementById("list")

            list.appendChild(li)
           
        }

        })
    .catch(err => console.log(err))

 

    

}



grabData ()
grabAllMovies ()


