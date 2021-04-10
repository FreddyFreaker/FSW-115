

axios.get("http://api.bryanuniversity.edu/jeremiah/list/")
.then(response => {
    
    

    
    
    for (let i =0; i<response.data.length; i++){
        
        
        
        if(response.data[i].isComplete === true){
            
           
            
            const h1 = document.createElement("p")
            
            h1.textContent = response.data[i].name + ": " +  response.data[i].isComplete
            h1.style.textDecoration = "line-through"
    
            document.body.appendChild(h1)
        
        
        
        }
        else{
            const h1 = document.createElement("p")
            h1.textContent = response.data[i].name + ": " +  response.data[i].isComplete
            document.body.appendChild(h1)
            console.log(typeof(response.data[i].isComplete))
        }
    

        
    }
    
})
.catch(error => console.log(error))

