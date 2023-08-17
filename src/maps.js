function initMap() {
    let arr3 = [];
    // Map options
    var defaults = {
        zoom: 6,
        center: {lat:40.7128, lng:-74.0060}
    }

    // Create new map
    let map = new google.maps.Map(document.getElementById("map"), defaults)
    
    // Add markers
    async function getData() {
            let data = await fetch_nasa();
            console.log(data)

            for (let i = 0; i <= 399; i++) {
                
                new google.maps.Marker({
                    position: {lat:data[i][1], lng:data[i][0]},
                    map: map
                }) 
            }

    }
    
    getData();

    /* let marker2 = new google.maps.Marker({
        position: {lat:40.7605265,lng:-73.8756116},
        map: map
    }); */

    /*                 
    let wildfireLat = 0;
    let wildfireLong = 0;

    for (let i = 0; i <= wildfires.length; i++) {
        wildfireLat = wildfires[i][1];
        wildfireLong = wildfires[i][0];

        new google.maps.Marker({
            position: {lat:wildfireLat, lng:wildfireLong},
            map: map
        }) 
    }
    */
}