const cityName = document.getElementById('geoplugin_city');

const geoApiUrl = 'http://www.geoplugin.net/javascript.gp';

let getGeoInfo = async ()=> {
    const respose = await fetch(`${geoApiUrl}`);
    const geoApiData = await respose.json();

    cityName.innerText = geoplugin_city;
};

getGeoInfo();
