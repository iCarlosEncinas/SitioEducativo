const Htmlkanji = document.getElementById('kanji');
const Htmlreading = document.getElementById('reading');
const Htmlmean = document.getElementById('meaning');
const Htmlsearch = document.getElementById('SearchKanji').nodeValue = '僕';
const btnSearch = document.getElementById('btn-search');

const ApiUrl = ('https://kanjiapi.dev/v1/kanji/');

const getKanjiData = async ()=>{
    const response = await fetch(`${ApiUrl}${Htmlsearch}`);
    const Datakanji = await response.json();
    console.log(Datakanji);
    console.log(Htmlsearch); 
    const {kanji , kun_readings , meanings} = Datakanji;
    Htmlkanji.innerHTML = kanji;
    Htmlreading.innerHTML = kun_readings;
    meanings.forEach(element => {
        Htmlmean.innerHTML += element.meanings;
    });
    
}

btnSearch.addEventListener('click', getKanjiData);
