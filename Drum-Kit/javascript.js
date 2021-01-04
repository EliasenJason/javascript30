const sounds = [
    boom = {
        name: 'Boom',
        url: './sounds/boom.wav',
        letter: 'A'
    },
    clap = {
        name: 'Clap',
        url: './sounds/clap.wav',
        letter: 'S'
    },
    hihat = {
        name: 'Hihat',
        url: './sounds/hihat.wav',
        letter: 'D'
    },
    kick = {
        name: 'Kick',
        url: './sounds/kick.wav',
        letter: 'F'
    },
    openhat = {
        name: 'Openhat',
        url: './sounds/openhat.wav',
        letter: 'G'
    },
    ride = {
        name: 'Ride',
        url: './sounds/ride.wav',
        letter: 'H'
    },
    snare = {
        name: 'Snare',
        url: './sounds/snare.wav',
        letter: 'J'
    },
    tink = {
        name: 'Tink',
        url: './sounds/tink.wav',
        letter: 'K'
    },
    tom = {
        name: 'Tom',
        url: './sounds/tom.wav',
        letter: 'L'
    },

]

const container = document.getElementById('container')

document.addEventListener('keydown', (event) => {
    let key = event.key.toUpperCase()
    let ThisOne = sounds.find(item => item.letter === key)
    playAudio(ThisOne.url)
    activateKey(ThisOne.letter)
})

sounds.forEach(sound => {
    let child = document.createElement('section')
    child.addEventListener('click', () => {
        playAudio(`${sound.url}`)
        activateKey(sound.letter)
    })
    child.innerHTML = `
        <h3>${sound.letter}</h3>
        <p>${sound.name}</p>
    `
    child.id = sound.letter
    child.classList.add('key')
    container.appendChild(child)
})


function playAudio(url) {
    new Audio(url).play();
  }

function activateKey(letter) {
    document.getElementById(letter).style.color = 'black'
    document.getElementById(letter).style.backgroundColor = 'white'
    setTimeout(() => {
        document.getElementById(letter).style.color = 'white'
        document.getElementById(letter).style.backgroundColor = 'black'
    }, 100)
}