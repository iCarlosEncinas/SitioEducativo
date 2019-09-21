const Htmlkanji = document.getElementById('kanji')
const Htmlmean = document.getElementById('meaning');

const ApiUrl = ('https://kanjiapi.dev/v1/');

getKanjiData = async ()=>{
    const response = await fetch(`${ApiUrl}kanji/夏`);
    const Datakanji = await response.json();
    console.log(Datakanji);
    const {kanji , kun_readings} = Datakanji;
    Htmlkanji.innerHTML = kanji; 
    Htmlmean.innerHTML = kun_readings;
}

getKanjiData();