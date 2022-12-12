let hourE1 = document.getElementById("hour")
let minE1 = document.getElementById("min")
let secE1 = document.getElementById("sec")
let ampmE1 = document.getElementById("am")

function updateclock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let am1 = "AM"

    if (h > 12) {
        h = h - 12
        am1 = "PM"
    }

    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s

    hourE1.innerText = h
    minE1.innerText = m
    secE1.innerText = s
    ampmE1.innerText = am1

    setTimeout(() => {
        updateclock()
    }, 1000);
}
updateclock()