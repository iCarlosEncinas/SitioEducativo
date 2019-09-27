//1
const pokemonName1 = document.getElementById('pokemon-name1');
const pokemonHeight1 = document.getElementById('pokemon-height1');
const pokemonFrontImg1 = document.getElementById('pokemon-img-front1');
const pokemonNumber1 = document.getElementById('pokemon-number1');
const pokemonWeight1 = document.getElementById('pokemon-weight1');
const pokemonAbilities1 = document.getElementById('pokemon-abilities1'); 


//var pokemonSearch = HTMLInputElement.value('search');
//console.log(pokemonSearch);
//const pokemonAbilitiesApi = document.getElementById('pokemon-abilities-api'); 
//const btnSearch = document.getElementById('btn-search');

//pokemonName1.innerText = 'El nombre de mi pokémon es: ';

const pokemonApiUrl = 'https://pokeapi.co/api/v2/';
//const pokemonAbilitiesApi = 'https://pokeapi.co/api/v2/ability/';

const getPokemonAbilityData1 = async url=>{
    const responses1 = await fetch(url);
    const abilityData1 = await responses1.json();
    return abilityData1;

}

const getPokemonData1 = async ()=>{
    //var pokemonSearch = document.getElementById('pokemon-search').value;
    //console.log(pokemonSearch);
    const response1 = await fetch(`${pokemonApiUrl}pokemon/1/`);
    console.log(response1);
    const pokemon1 = await response1.json();
    console.log(pokemon1);
    const {name , height, abilities}= pokemon1;
    const frontImg1 = pokemon1.sprites.front_default;
    pokemonName1.innerText = name;
    pokemonNumber1.innerText = `El número de la pokédex es: ${pokemon1.id}`;
    pokemonHeight1.innerText = `La altura es: ${pokemon1.height} pulgadas`;
    pokemonWeight1.innerText = `Su peso es de: ${pokemon1.weight}kg`;
    pokemonFrontImg1.src = frontImg1;

    abilities.forEach(async element => {
        const abilityData1 = await getPokemonAbilityData1(element.ability.url);
        const effect_entries = abilityData1.effect_entries;

        pokemonAbilities1.innerHTML +=
        `<li>
            ${element.ability.name}
            <div>Efecto:
                <ul>
                    ${effect_entries[0].effect}
                </ul>
            </div>
        </li>`
    });
};

//btnSearch.addEventListener('click', getPokemonData);
getPokemonData1();
getPokemonAbilityData1();

//2
const pokemonName2 = document.getElementById('pokemon-name2');
const pokemonHeight2 = document.getElementById('pokemon-height2');
const pokemonFrontImg2 = document.getElementById('pokemon-img-front2');
const pokemonNumber2 = document.getElementById('pokemon-number2');
const pokemonWeight2 = document.getElementById('pokemon-weight2');
const pokemonAbilities2 = document.getElementById('pokemon-abilities2'); 

const getPokemonAbilityData2 = async url=>{
    const responses2 = await fetch(url);
    const abilityData2 = await responses2.json();
    return abilityData2;

}
const getPokemonData2 = async ()=>{
    const response2 = await fetch(`${pokemonApiUrl}pokemon/2/`);
    console.log(response2);
    const pokemon2 = await response2.json();
    console.log(pokemon2);
    const {name , height, abilities}= pokemon2;
    const frontImg2 = pokemon2.sprites.front_default;
    pokemonName2.innerText = name;
    pokemonNumber2.innerText = `El número de la pokédex es: ${pokemon2.id}`;
    pokemonHeight2.innerText = `La altura es: ${height} pulgadas`;
    pokemonWeight2.innerText = `Su peso es de: ${pokemon2.weight}kg`;
    pokemonFrontImg2.src = frontImg2;

    abilities.forEach(async element => {
        const abilityData2 = await getPokemonAbilityData2(element.ability.url);
        effect_entries = abilityData2.effect_entries;

        pokemonAbilities2.innerHTML +=
        `<li>
            ${element.ability.name}
            <div>Efecto:
                <ul>
                    ${effect_entries[0].effect}
                </ul>
            </div>
        </li>`
    });
};

getPokemonData2();
getPokemonAbilityData2();
//3
const pokemonName3 = document.getElementById('pokemon-name3');
const pokemonHeight3 = document.getElementById('pokemon-height3');
const pokemonFrontImg3 = document.getElementById('pokemon-img-front3');
const pokemonNumber3 = document.getElementById('pokemon-number3');
const pokemonWeight3 = document.getElementById('pokemon-weight3');
const pokemonAbilities3 = document.getElementById('pokemon-abilities3'); 

const getPokemonAbilityData3 = async url=>{
    const responses3 = await fetch(url);
    const abilityData3 = await responses3.json();
    return abilityData3;

}
const getPokemonData3 = async ()=>{
    const response3 = await fetch(`${pokemonApiUrl}pokemon/3/`);
    console.log(response3);
    const pokemon3 = await response3.json();
    console.log(pokemon3);
    const {name , height, abilities}= pokemon3;
    const frontImg3 = pokemon3.sprites.front_default;
    pokemonName3.innerText = name;
    pokemonNumber3.innerText = `El número de la pokédex es: ${pokemon3.id}`;
    pokemonHeight3.innerText = `La altura es: ${height} pulgadas`;
    pokemonWeight3.innerText = `Su peso es de: ${pokemon3.weight}kg`;
    pokemonFrontImg3.src = frontImg3;

    abilities.forEach(async element => {
        const abilityData3 = await getPokemonAbilityData2(element.ability.url);
        effect_entries = abilityData3.effect_entries;

        pokemonAbilities3.innerHTML +=
        `<li>
            ${element.ability.name}
            <div>Efecto:
                <ul>
                    ${effect_entries[0].effect}
                </ul>
            </div>
        </li>`
    });
};

getPokemonData3();
getPokemonAbilityData3();
//4
const pokemonName4 = document.getElementById('pokemon-name4');
const pokemonHeight4 = document.getElementById('pokemon-height4');
const pokemonFrontImg4 = document.getElementById('pokemon-img-front4');
const pokemonNumber4 = document.getElementById('pokemon-number4');
const pokemonWeight4 = document.getElementById('pokemon-weight4');
const pokemonAbilities4 = document.getElementById('pokemon-abilities4'); 

const getPokemonAbilityData4 = async url=>{
    const responses4 = await fetch(url);
    const abilityData4 = await responses4.json();
    return abilityData4;

}
const getPokemonData4 = async ()=>{
    const response4 = await fetch(`${pokemonApiUrl}pokemon/4/`);
    console.log(response4);
    const pokemon4 = await response4.json();
    console.log(pokemon4);
    const {name , height, abilities}= pokemon4;
    const frontImg4 = pokemon4.sprites.front_default;
    pokemonName4.innerText = name;
    pokemonNumber4.innerText = `El número de la pokédex es: ${pokemon4.id}`;
    pokemonHeight4.innerText = `La altura es: ${height} pulgadas`;
    pokemonWeight4.innerText = `Su peso es de: ${pokemon4.weight}kg`;
    pokemonFrontImg4.src = frontImg4;

    abilities.forEach(async element => {
        const abilityData4 = await getPokemonAbilityData2(element.ability.url);
        effect_entries = abilityData4.effect_entries;

        pokemonAbilities4.innerHTML +=
        `<li>
            ${element.ability.name}
            <div>Efecto:
                <ul>
                    ${effect_entries[0].effect}
                </ul>
            </div>
        </li>`
    });
};

getPokemonData4();
getPokemonAbilityData4();
//5
const pokemonName5 = document.getElementById('pokemon-name5');
const pokemonHeight5 = document.getElementById('pokemon-height5');
const pokemonFrontImg5 = document.getElementById('pokemon-img-front5');
const pokemonNumber5 = document.getElementById('pokemon-number5');
const pokemonWeight5 = document.getElementById('pokemon-weight5');
const pokemonAbilities5 = document.getElementById('pokemon-abilities5'); 

const getPokemonAbilityData5 = async url=>{
    const responses5 = await fetch(url);
    const abilityData5 = await responses5.json();
    return abilityData5;

}
const getPokemonData5 = async ()=>{
    const response5 = await fetch(`${pokemonApiUrl}pokemon/5/`);
    console.log(response5);
    const pokemon5 = await response5.json();
    console.log(pokemon5);
    const {name , height, abilities}= pokemon5;
    const frontImg5 = pokemon5.sprites.front_default;
    pokemonName5.innerText = name;
    pokemonNumber5.innerText = `El número de la pokédex es: ${pokemon5.id}`;
    pokemonHeight5.innerText = `La altura es: ${height} pulgadas`;
    pokemonWeight5.innerText = `Su peso es de: ${pokemon5.weight}kg`;
    pokemonFrontImg5.src = frontImg5;

    abilities.forEach(async element => {
        const abilityData5 = await getPokemonAbilityData2(element.ability.url);
        effect_entries = abilityData5.effect_entries;

        pokemonAbilities5.innerHTML +=
        `<li>
            ${element.ability.name}
            <div>Efecto:
                <ul>
                    ${effect_entries[0].effect}
                </ul>
            </div>
        </li>`
    });
};

getPokemonData5();
getPokemonAbilityData5();

//6
const pokemonName6 = document.getElementById('pokemon-name6');
const pokemonHeight6 = document.getElementById('pokemon-height6');
const pokemonFrontImg6 = document.getElementById('pokemon-img-front6');
const pokemonNumber6 = document.getElementById('pokemon-number6');
const pokemonWeight6 = document.getElementById('pokemon-weight6');
const pokemonAbilities6 = document.getElementById('pokemon-abilities6'); 

const getPokemonAbilityData6 = async url=>{
    const responses6 = await fetch(url);
    const abilityData6 = await responses6.json();
    return abilityData6;

}
const getPokemonData6 = async ()=>{
    const response6 = await fetch(`${pokemonApiUrl}pokemon/6/`);
    console.log(response6);
    const pokemon6 = await response6.json();
    console.log(pokemon6);
    const {name , height, abilities}= pokemon6;
    const frontImg6 = pokemon6.sprites.front_default;
    pokemonName6.innerText = name;
    pokemonNumber6.innerText = `El número de la pokédex es: ${pokemon6.id}`;
    pokemonHeight6.innerText = `La altura es: ${height} pulgadas`;
    pokemonWeight6.innerText = `Su peso es de: ${pokemon6.weight}kg`;
    pokemonFrontImg6.src = frontImg6;

    abilities.forEach(async element => {
        const abilityData6 = await getPokemonAbilityData6(element.ability.url);
        effect_entries = abilityData6.effect_entries;

        pokemonAbilities6.innerHTML +=
        `<li>
            ${element.ability.name}
            <div>Efecto:
                <ul>
                    ${effect_entries[0].effect}
                </ul>
            </div>
        </li>`
    });
};

getPokemonData6();
getPokemonAbilityData6();
//7
const pokemonName7 = document.getElementById('pokemon-name7');
const pokemonHeight7 = document.getElementById('pokemon-height7');
const pokemonFrontImg7 = document.getElementById('pokemon-img-front7');
const pokemonNumber7 = document.getElementById('pokemon-number7');
const pokemonWeight7 = document.getElementById('pokemon-weight7');
const pokemonAbilities7 = document.getElementById('pokemon-abilities7'); 

const getPokemonAbilityData7 = async url=>{
    const responses7 = await fetch(url);
    const abilityData7 = await responses7.json();
    return abilityData7;

}
const getPokemonData7 = async ()=>{
    const response7 = await fetch(`${pokemonApiUrl}pokemon/7/`);
    console.log(response7);
    const pokemon7 = await response7.json();
    console.log(pokemon7);
    const {name , height, abilities}= pokemon7;
    const frontImg7 = pokemon7.sprites.front_default;
    pokemonName7.innerText = name;
    pokemonNumber7.innerText = `El número de la pokédex es: ${pokemon7.id}`;
    pokemonHeight7.innerText = `La altura es: ${height} pulgadas`;
    pokemonWeight7.innerText = `Su peso es de: ${pokemon7.weight}kg`;
    pokemonFrontImg7.src = frontImg7;

    abilities.forEach(async element => {
        const abilityData7 = await getPokemonAbilityData6(element.ability.url);
        effect_entries = abilityData7.effect_entries;

        pokemonAbilities7.innerHTML +=
        `<li>
            ${element.ability.name}
            <div>Efecto:
                <ul>
                    ${effect_entries[0].effect}
                </ul>
            </div>
        </li>`
    });
};

getPokemonData7();
getPokemonAbilityData7();
//8
const pokemonName8 = document.getElementById('pokemon-name8');
const pokemonHeight8 = document.getElementById('pokemon-height8');
const pokemonFrontImg8 = document.getElementById('pokemon-img-front8');
const pokemonNumber8 = document.getElementById('pokemon-number8');
const pokemonWeight8 = document.getElementById('pokemon-weight8');
const pokemonAbilities8 = document.getElementById('pokemon-abilities8'); 

const getPokemonAbilityData8 = async url=>{
    const responses8 = await fetch(url);
    const abilityData8 = await responses8.json();
    return abilityData8;

}
const getPokemonData8 = async ()=>{
    const response8 = await fetch(`${pokemonApiUrl}pokemon/8/`);
    console.log(response8);
    const pokemon8 = await response8.json();
    console.log(pokemon8);
    const {name , height, abilities}= pokemon8;
    const frontImg8 = pokemon8.sprites.front_default;
    pokemonName8.innerText = name;
    pokemonNumber8.innerText = `El número de la pokédex es: ${pokemon8.id}`;
    pokemonHeight8.innerText = `La altura es: ${height} pulgadas`;
    pokemonWeight8.innerText = `Su peso es de: ${pokemon8.weight}kg`;
    pokemonFrontImg8.src = frontImg8;

    abilities.forEach(async element => {
        const abilityData8 = await getPokemonAbilityData8(element.ability.url);
        effect_entries = abilityData8.effect_entries;

        pokemonAbilities8.innerHTML +=
        `<li>
            ${element.ability.name}
            <div>Efecto:
                <ul>
                    ${effect_entries[0].effect}
                </ul>
            </div>
        </li>`
    });
};

getPokemonData8();
getPokemonAbilityData8();
//9
const pokemonName9 = document.getElementById('pokemon-name9');
const pokemonHeight9 = document.getElementById('pokemon-height9');
const pokemonFrontImg9 = document.getElementById('pokemon-img-front9');
const pokemonNumber9 = document.getElementById('pokemon-number9');
const pokemonWeight9 = document.getElementById('pokemon-weight9');
const pokemonAbilities9 = document.getElementById('pokemon-abilities9'); 

const getPokemonAbilityData9 = async url=>{
    const responses9 = await fetch(url);
    const abilityData9 = await responses9.json();
    return abilityData9;

}
const getPokemonData9 = async ()=>{
    const response9 = await fetch(`${pokemonApiUrl}pokemon/9/`);
    console.log(response9);
    const pokemon9 = await response9.json();
    console.log(pokemon9);
    const {name , height, abilities}= pokemon9;
    const frontImg9 = pokemon9.sprites.front_default;
    pokemonName9.innerText = name;
    pokemonNumber9.innerText = `El número de la pokédex es: ${pokemon9.id}`;
    pokemonHeight9.innerText = `La altura es: ${height} pulgadas`;
    pokemonWeight9.innerText = `Su peso es de: ${pokemon9.weight}kg`;
    pokemonFrontImg9.src = frontImg9;

    abilities.forEach(async element => {
        const abilityData9 = await getPokemonAbilityData9(element.ability.url);
        effect_entries = abilityData9.effect_entries;

        pokemonAbilities9.innerHTML +=
        `<li>
            ${element.ability.name}
            <div>Efecto:
                <ul>
                    ${effect_entries[0].effect}
                </ul>
            </div>
        </li>`
    });
};

getPokemonData9();
getPokemonAbilityData9();