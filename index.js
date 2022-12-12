let houre1 = document.getElementById("hour")
let mine1 = document.getElementById("min")
let sece1 = document.getElementById("sec")
let ampme1 = document.getElementById("am")

function updateclock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let am = "AM"


    if (h > 12) {
        h = h - 12
        am = "PM"
    }
    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s

    houre1.innerText = h
    mine1.innerText = m
    sece1.innerText = s
    ampme1.innerText = am

    setTimeout(() => {
        updateclock()
    }, 1000);
}
updateclock()