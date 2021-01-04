
function adjustTime() {
    let date = new Date()
    let digital = document.querySelector('#digital p')
    digital.innerHTML = `${date.getHours()}:${date.getMinutes()}.${date.getSeconds() < 10 ? 0 + date.getSeconds().toString() : date.getSeconds()}`
}


setInterval(() => {
    adjustTime()
}, 1000)