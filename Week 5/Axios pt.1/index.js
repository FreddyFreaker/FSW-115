
const getData = () =>{

axios.get("http://api.bryanuniversity.edu/jeremiah/list/")
.then(res => {
    displayItems(res.data)
})
.catch(error => console.log(error))

}

getData()


const displayItems = (items) => {
    let list = document.getElementById("itemList")  
    items.forEach(item => {
        let card = document.createElement("div")
        let nameElement = document.createElement("p")
        nameElement.textContent = `${item.name} ||
        desc. ${item.description} 
       || price: ${item.price} || Is Complete: ${item.isComplete} `
        card.appendChild(nameElement)
       
       
       
        let deleteButton = document.createElement("button")
        deleteButton.textContent = "DELETE"
        deleteButton.value = item._id
       deleteButton.addEventListener("click", deleteItem)
        card.appendChild(deleteButton)

        let updateButton = document.createElement("input")
        updateButton.setAttribute("type", "checkbox")
        let updateText = ""
        if(item.isComplete === false) {
            updateText = "Mark Complete"

        }else{
            updateText = "Mark incomplete"
        }

        updateButton.textContent = updateText
        updateButton.id = item._id
        updateButton.value = item.isComplete
       updateButton.addEventListener("click", updateItem)
        card.appendChild(updateButton)
        
        list.appendChild(card)


    }) 



}

const putItem = (e) => {
    e.preventDefault()
    console.log("post")

 
  
  
    let itemName = document.getElementById("itemName").value
    let itemDescription = document.getElementById("itemDescription").value
    let itemPrice = document.getElementById("itemPrice").value
    
     let data = {
    name: itemName,
    description: itemDescription,
    price: itemPrice

  }
  

    axios.post("http://api.bryanuniversity.edu/jeremiah/list/",data)
    .then(res => {
        console.log(res.data)
    })
    .catch(err => console.error(err))

}

let form = document.getElementById("inputForm")
form.addEventListener("submit", putItem)



const deleteItem = (e) => {
    let itemId= e.target.value

    axios.delete(`http://api.bryanuniversity.edu/jeremiah/list/${itemId}`)
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.error(err); 
    })
}


const updateItem = (e) =>{
    let itemId= e.target.id
    let itemComplete = e.target.value

    let completed = null

    itemComplete === "false" ? completed = true : completed = false

    let updatedItem = {
        isComplete: completed
    }
    axios.put(`http://api.bryanuniversity.edu/jeremiah/list/${itemId}`, updatedItem)
    .then(res => {
        console.log(res.data)
        location.reload()
    })
    .catch(err => {
        console.error(err); 
    })
}