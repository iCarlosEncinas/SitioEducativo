const Htmlkanji = document.getElementById('kanji');
const Htmlreading = document.getElementById('reading');
const Htmlmean = document.getElementById('meaning');

const ApiUrl = ('https://kanjiapi.dev/v1/');

getKanjiData = async ()=>{
    const response = await fetch(`${ApiUrl}kanji/僕`);
    const Datakanji = await response.json();
    console.log(Datakanji);
    const {kanji , kun_readings , meanings} = Datakanji;
    Htmlkanji.innerHTML = kanji; 
    Htmlreading.innerHTML = kun_readings;
    Htmlmean.innerHTML = meanings; 
}

getKanjiData();