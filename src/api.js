// To Do: Load screen, change icons to wildfire image.

let url = 'https://eonet.gsfc.nasa.gov/api/v3/events'
let coordinateArray = [];
let arr = [];

async function fetch_nasa() {
    const response = await fetch(url);
    const result = await response.json();
    arr = [...result.events];

    let i = 0;
    let newArr = [];

    while (i < 300) {
        if (arr[i].categories[0]["id"] == "wildfires") {
            newArr.push(arr[i]);
        } 
        
        i++;
    }

    let lat = 0;
    let lng = 0;
    
    for (let j = 1; j <= 200; j++) {
        lat = newArr[j].geometry[0].coordinates[0];
        lng = newArr[j].geometry[0].coordinates[1];
        console.log(lat, lng);
        coordinateArray.push([parseFloat(lat), parseFloat(lng)]);
    }

    return coordinateArray;
}

fetch_nasa();