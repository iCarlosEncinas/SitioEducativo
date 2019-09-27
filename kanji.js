const Htmlkanji = document.getElementById('kanji');
const Htmlreading = document.getElementById('reading');
const Htmlmean = document.getElementById('meaning');


const ApiUrl = ('https://kanjiapi.dev/v1/kanji/');


const getKanji = async ()=>{    
    //Obtención de datos
    const response = await fetch(`${ApiUrl}春`);
    
    //Conversión a json
    const Datakanji = await response.json();
    
    console.log(Datakanji);

    const {kanji , kun_readings , meanings} = Datakanji;
    Htmlkanji.innerHTML = `Kanji: ${kanji}`;
    Htmlreading.innerHTML = `Lectura en hiragana:　${kun_readings}`;

    //imprime los significados de los kanjis
    meanings.forEach(meanings => {
        Htmlmean.innerHTML += `<li>${meanings}</li>`;
    });
}

const Htmlkanji2 = document.getElementById('kanji2');
const Htmlreading2 = document.getElementById('reading2');
const Htmlmean2 = document.getElementById('meaning2');

const getKanji2 = async ()=>{    
    //Obtención de datos
    const response = await fetch(`${ApiUrl}夏`);
    
    //Conversión a json
    const Datakanji = await response.json();
    
    console.log(Datakanji);

    const {kanji , kun_readings , meanings} = Datakanji;
    Htmlkanji2.innerHTML = `Kanji: ${kanji}`;
    Htmlreading2.innerHTML = `Lectura en hiragana:　${kun_readings}`;

    //imprime los significados de los kanjis
    meanings.forEach(meanings => {
        Htmlmean2.innerHTML += `<li>${meanings}</li>`;
    });
}

const Htmlkanji3 = document.getElementById('kanji3');
const Htmlreading3 = document.getElementById('reading3');
const Htmlmean3 = document.getElementById('meaning3');

const getKanji3 = async ()=>{    
    //Obtención de datos
    const response = await fetch(`${ApiUrl}秋`);
    
    //Conversión a json
    const Datakanji = await response.json();
    
    console.log(Datakanji);

    const {kanji , kun_readings , meanings} = Datakanji;
    Htmlkanji3.innerHTML = `Kanji: ${kanji}`;
    Htmlreading3.innerHTML = `Lectura en hiragana:　${kun_readings}`;

    //imprime los significados de los kanjis
    meanings.forEach(meanings => {
        Htmlmean3.innerHTML += `<li>${meanings}</li>`;
    });
}

const Htmlkanji4 = document.getElementById('kanji4');
const Htmlreading4 = document.getElementById('reading4');
const Htmlmean4 = document.getElementById('meaning4');

const getKanji4 = async ()=>{    
    //Obtención de datos
    const response = await fetch(`${ApiUrl}冬`);
    
    //Conversión a json
    const Datakanji = await response.json();
    
    console.log(Datakanji);

    const {kanji , kun_readings , meanings} = Datakanji;
    Htmlkanji4.innerHTML = `Kanji: ${kanji}`;
    Htmlreading4.innerHTML = `Lectura en hiragana:　${kun_readings}`;

    //imprime los significados de los kanjis
    meanings.forEach(meanings => {
        Htmlmean4.innerHTML += `<li>${meanings}</li>`;
    });
}

//Arranca la función
getKanji();
getKanji2();
getKanji3();
getKanji4();
