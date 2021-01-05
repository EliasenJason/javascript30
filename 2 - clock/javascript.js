
function adjustTime() {
    let date = new Date()
    let digital = document.querySelector('#digital p')
    digital.innerHTML = `${date.getHours()}:${date.getMinutes() < 10 ? 0 + date.getMinutes().toString() : date.getMinutes()}.${date.getSeconds() < 10 ? 0 + date.getSeconds().toString() : date.getSeconds()}`
    document.getElementById('hours').style.transform = `rotate(${date.getHours() > 12 ? (date.getHours() / 12) * 360 : (((date.getHours() - 12) / 12) * 360)}deg`
    
    document.getElementById('minutes').style.transform = `rotate(${(date.getMinutes() / 60) * 360}deg)`
    document.getElementById('seconds').style.transform = `rotate(${(date.getSeconds() / 60) * 360}deg)`
    if (date.getSeconds() == 0) {
        document.getElementById('seconds').classList.add('no-transition')
    } else {
        document.getElementById('seconds').classList.remove('no-transition')
    }
}

setInterval(() => {
    adjustTime()
}, 1000)