var xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.vschool.io/pokemon", true )
xhr.send()

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        //console.log(xhr.responseText)
        let data = JSON.parse(xhr.responseText)
        console.log(data)

        showData(data.objects[0].pokemon)

         

        
        }
        
        function showData (data){
            console.log(data)
            for(let i =0; i < data.length; i++){
            const list = document.createElement("h1")
            list.textContent = data[i].name + ": " + data[i].resource_uri
            document.body.appendChild(list)
            }
            
        
        }

}








