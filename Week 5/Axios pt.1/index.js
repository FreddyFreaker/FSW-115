
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
       || price: ${item.price} `
        card.appendChild(nameElement)
       
       
       
       
        let deleteButton = document.createElement("button")
        deleteButton.textContent = "DELETE"
       deleteButton.addEventListener("click", deleteItem)
        card.appendChild(deleteButton)


        
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



const deleteItem = () => {

}