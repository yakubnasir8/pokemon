const container = document.querySelector('#containers');
const backURL = 'https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/'
//loop
for (let i=1; i<=151; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon')
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const newImg = document.createElement('img');
newImg.src = `${backURL}${i}.png`
document.body.appendChild(pokemon)
pokemon.appendChild(newImg)
pokemon.appendChild(label)
}