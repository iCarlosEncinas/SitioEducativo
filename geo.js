const countryName = document.getElementById('Name');
const countryFlag = document.getElementById('Flag');

const countryApiUrl = "http://countryapi.gear.host/v1/Country/getCountries";

let getCountries = async ()=> {
    const respose = await fetch(`${countryApiUrl}`);
    const CountryData = await respose.json();

    countryName.innerText = Name;
    countryFlag.src = Flag;
    
};

getCountries();
