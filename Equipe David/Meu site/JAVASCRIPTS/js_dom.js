function trocaCor() {
    document.getElementById("hover").style.backgroundColor = "red"
}

function voltaCor() {
    document.getElementById("hover").style.backgroundColor = "blueviolet"
}

let btnClick = document.getElementById("btnClick")
btnClick.addEventListener("click", ()=>{
    window.alert("Voce clicou")
})

document.getElementById("img").src = "https://cdn-icons-png.flaticon.com/512/1088/1088537.png"

let inptNome = document.getElementById("nome")
inptNome.addEventListener("input", ()=>{
    if(inptNome.value.match(/\d/) || inptNome.value.match(/\W/)){
        inptNome.style.backgroundColor = "red"
    } else if (inptNome.value == "") {
        inptNome.style.backgroundColor = "initial"
    } else {
        inptNome.style.backgroundColor = "green"
    }
})

let form1 = document.getElementById("form1")
form1.addEventListener("submit", (event)=>{
    if(inptNome.value == ""){
        window.alert("Campo obrigatorio vazio")
        event.preventDefault()
    }
})