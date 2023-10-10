const apiKey = "e0f51fbd4d5f4d9383433550232509";
const apiUrl = "http://api.weatherapi.com/v1";

let latitude = undefined;
let longitude = undefined;
let jsonData = undefined
let currentDate = undefined;
let endDate = undefined;


window.onload = function () {
    currentDate = getCurrentDate();
    endDate=getEndDate(); 


    var latitude;  // Variable to store latitude
    var longitude; // Variable to store longitude

    var getLocation = function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.")
        }
    };

    var showPosition = function (position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        maincard_weather(latitude, longitude);
        historical_weather(latitude, longitude,currentDate,endDate);
    };

    // Call the getLocation function to initiate the geolocation process
    getLocation();


};

function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
function getEndDate() {
    const date = new Date();
    date.setDate(date.getDate() - 4);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}





const search_btn = document.getElementById("search-btn");
search_btn.onclick = () => {
    let search_bar = document.getElementById("search-bar").value;
    const location = encodeURIComponent(search_bar);
    console.log(currentDate);
    display_weather(location);


};

function display_weather(location) {
    maincard_weather(location);
}
