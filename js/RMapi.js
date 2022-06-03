const container = document.querySelector("main")
const btn = document.querySelector(".next")

function pj(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}/`)
        .then(res => res.json())
        .then(data => {
            pjShow(data)
        })
}
let desde = 1;


function pjs(desde) {
    for (let p = desde; p <= desde + 19; p++) {
        pj(p)
    }
}

function pjShow(data) {
    const d = document;
    const content = d.createElement("div")
    content.classList.add("content")

    const figure = d.createElement("figure")
    const img = d.createElement("img")
    img.classList.add("char-img")
    img.src = data.image
    figure.appendChild(img)
    content.appendChild(figure)

    if (data.name.length <= 15) {
        const name = d.createElement("div")
        name.classList.add("content-title")
        name.textContent = data.name
        figure.appendChild(name)
    } else {
        const name = d.createElement("div")
        name.classList.add("content-title")
        name.textContent = data.name.slice(0, 16) + "..."
        figure.appendChild(name)
    }


    const textC = d.createElement("div")
    textC.classList.add("text-C")

    const statusC = d.createElement("div")
    statusC.classList.add("statusC")



    if (data.species.length <= 9) {
        const statusC = d.createElement("div")
        statusC.classList.add("statusC")
        statusC.textContent = `${data.status} - ${data.species}`
        textC.appendChild(statusC)

    } else {
        const statusC = d.createElement("div")
        statusC.classList.add("statusC")
        statusC.textContent = `${data.status} - ${data.species.slice(0, 10)}...`
        textC.appendChild(statusC)
    }


    const divPin = d.createElement("figure")

    const pin = d.createElement("img")
    pin.classList.add("pin")
    pin.src = "assets/map-pin.png"
    container.appendChild(pin)

    divPin.appendChild(pin)
    textC.appendChild(divPin)




    if (data.origin.name.length <= 13) {
        const originC = d.createElement("div")
        originC.classList.add("originC")
        originC.textContent = data.origin.name
        textC.appendChild(originC)

    } else {
        const originC = d.createElement("div")
        originC.classList.add("originC")
        originC.textContent = data.origin.name.slice(0, 12) + "..."
        textC.appendChild(originC)

    }


    if (data.status === "Alive") {
        const newState = d.createElement("div")
        newState.classList.add("alive")
        newState.textContent = "🟢"
        textC.appendChild(newState)
    } else if (data.status === "Dead") {
        const newState2 = d.createElement("div")

        newState2.classList.add("dead")
        newState2.textContent = "🔴"
        textC.appendChild(newState2)
    } else {
        const newState3 = d.createElement("div")
        newState3.classList.add("unknown")
        newState3.textContent = "⚪"
        textC.appendChild(newState3)
    };

    content.appendChild(textC)
    container.appendChild(content)

}

next.addEventListener("click", e => {
    desde += 20
    pjs(desde)
})

pjs(desde)

const d = document,
    w = window

function btn_scroll_up(btn) {
    const $scrollBtn = d.querySelector(btn)
    w.addEventListener("scroll", e => {
        let scroll_up = w.pageYOffset || d.documentElement.scrollTop
        if (scroll_up > 850) {
            $scrollBtn.classList.remove("hidden")

        } else {
            $scrollBtn.classList.add("hidden")
        }
    })
    d.addEventListener("click", e => {
        if (e.target.matches(btn)) {
            w.scrollTo({
                behavior: "smooth",
                top: 0


            })
        }
    })


}
d.addEventListener("DOMContentLoaded", (e) => {
    btn_scroll_up(".btn-scroll-up")
})