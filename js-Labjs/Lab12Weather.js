// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

//api weather calling

const weatherApi = {
    key: "4030bb46ab3899e7e4454b7788cc2002",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
}



const searchInputBox = document.getElementById('input-box');
const searchbtn=document.getElementById('searchbtn');

searchbtn.onclick = function() {  
    getWeatherReport(searchInputBox.value);
    document.querySelector('.weather-body').style.display = "block";
    }; 

// // Event Listener Function on keypress
// searchInputBox.addEventListener('keypress', (event) => {
    
//     if(event.keyCode == 13) {
//         // console.log(searchInputBox.value);
//         getWeatherReport(searchInputBox.value);
//         document.querySelector('.weather-body').style.display = "block";
//     }

// });

// Get Weather Report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then((weatherdata) => weatherdata.json())
    .then(showWeatherReport)
    .catch(erro=>{
        document.querySelector('.weather-body').style.display = "";
        console.log("invalid name")
        alert("YOU HAVE ENTER INVALID PLACE NAME.");
    });
}

// Show Weather Report
//we math.round(), math.floor()
function showWeatherReport(weatherdata){
    console.log(weatherdata);
    // console.log("${weatherdata.name}"); 
    //  wrong syntax inverted comma cannot access the data of json
    console.log(`${weatherdata.name}`); 

    let city = document.getElementById('city');
    city.innerText = `${weatherdata.name}, ${weatherdata.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${weatherdata.main.temp}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${weatherdata.main.temp_min}&deg;C (min)/ ${weatherdata.main.temp_max}&deg;C (max) `;

    console.log(`${weatherdata.weather[0].main}`); 


    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weatherdata.weather[0].main}`;
    

    let date = document.getElementById('date');
    let todayDate = new Date();
    // date.innerText = dateManage(todayDate);
    date.innerText=todayDate;

    iconweather= document.getElementById('weather_icon');

    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('https://th.bing.com/th/id/OIP.fWA9-Y0DdcMxDfNxUNK-_gHaE7?pid=ImgDet&rs=1')";
        // iconweather.src="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";
        iconweather.src="https://cdn2.iconfinder.com/data/icons/weather-icons-8/512/day-clear-512.png";
    
    } else if(weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('https://th.bing.com/th/id/R.869a92d9dfb90229eb55096d342ac2b1?rik=ybjExXwqiJbxdA&riu=http%3a%2f%2fwww.asisbiz.com%2fPhotos%2fClouds%2fimages%2fCumulonimbus-Clouds-Formations-Sky-Storms-Weather-Phenomena-13.jpg&ehk=nw5f7R4SNRMnu5NKflwFD7HzqbREAEutpCeglHxh9zw%3d&risl=&pid=ImgRaw&r=0')";
        iconweather.src="https://th.bing.com/th/id/R.56afe5a3c9cb93d0c7f2477222b7ab12?rik=bPIcwR7mcJNLAg&riu=http%3a%2f%2fwww.dailyfreepsd.com%2fwp-content%2fuploads%2f2013%2f06%2fCloudy-Overcast-weather-icon-vector.png&ehk=nlIwMQFA1xyB1XvDAj4TUWQq0vL417qvE8KOUPO4jfs%3d&risl=&pid=ImgRaw&r=0";
        
    } else if(weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url('https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAcub1.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg')";
        // iconweather.src="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";
        iconweather.src="https://image.flaticon.com/icons/png/512/1809/1809343.png";

    }     else if(weatherType.textContent == 'Rain') {
        
        document.body.style.backgroundImage = "url('https://calcoastnews.com/images/2016/01/Rain-4.jpg')";
        iconweather.src="https://cdn.onlinewebfonts.com/svg/img_53121.png";

    } else if(weatherType.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url('images/snow.jpg')";
        iconweather.src="https://cdn.dribbble.com/users/2120934/screenshots/6193458/13_snow.gif";


    } else if(weatherType.textContent == 'Thunderstorm') {
    
        document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
        iconweather.src="https://th.bing.com/th/id/R.b24a551ee9f9ef5236943ab3f9c826df?rik=xT7P4t3gGbLfTw&riu=http%3a%2f%2ficon-park.com%2fimagefiles%2fsimple_weather_icons_thunderstorms.png&ehk=9WEP8c30BSD%2fAPOAFsTt09llLdHdDf3fspMhKYYn6Ys%3d&risl=&pid=ImgRaw&r=0";
    } 
}





