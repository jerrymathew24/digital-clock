function updateClock(){
    const now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
    let ampm = hours > 12 ? 'PM' : "AM"

    hours = hours % 12 || 12
    minutes = minutes.toString().padStart(2,'0')
    seconds = seconds.toString().padStart(2,'0')

    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}${ampm}`
}

setInterval(updateClock,1000)
updateClock()