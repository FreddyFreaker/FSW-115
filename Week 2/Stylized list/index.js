var myJSON = {
    "name": "R5-D4",
    "height": "97",
    "mass": "32",
    "hair_color": "n/a",
    "skin_color": "white, red",
    "eye_color": "red",
    "birth_year": "unknown",
    "gender": "n/a",
    "homeworld": "http://swapi.dev/api/planets/1/",
    "films": [
        "http://swapi.dev/api/films/1/"
    ],
    "species": [
        "http://swapi.dev/api/species/2/"
    ],
    "vehicles": ["N/A"],
    "starships": ["N/A"],
    "created": "2014-12-10T15:57:50.959000Z",
    "edited": "2014-12-20T21:17:50.321000Z",
    "url": "http://swapi.dev/api/people/8/"
}



var myArray = Object.values(myJSON) 



var dataList = document.getElementById("data")

for (var i = 0; i < myArray.length; i++) {
    dataList.innerHTML += "<li>" + myArray[i] + "</li>"
}

console.log(myArray)