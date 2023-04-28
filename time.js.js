let sadomsanie = 0
let sanie = 0
let = daghighe = 0
let saat = 0
let shomarande=0
let startEl = document.getElementById("btnstart")
let stopEl = document.getElementById("btnstop")
let timerEl = document.getElementById("timer")
function tick() {
    sadomsanie += 1
    if (sadomsanie > 99) {
        sadomsanie = 0
        sanie += 1
    }
    if (sanie > 59) {
        sanie = 0
        daghighe += 1
    }
    if (daghighe > 59) {
        daghighe = 0
        saat += 1
    }
    timerEl.innerHTML = saat+':'+ daghighe+':'+ sanie+':'+sadomsanie
}
startEl.addEventListener("click",salam)
let timerInterval
function salam() {
    timerInterval = setInterval(tick,10)//500/1000=0/5

}
let jadval=[]
let tableEl=document.getElementById("table-rout")

function stopEnterval() {
    clearInterval(timerInterval)
jadval.push(saat+':'+ daghighe+':'+ sanie+':'+sadomsanie)
   sadomsanie=0
    sanie=0
    daghighe=0
    saat=0
    tableEl.innerHTML=""
    
    for(let i=jadval.length-1;i>jadval.length-11;i-=1){
        let trEl= document.createElement("tr")
        tableEl.appendChild(trEl)
        let tdEl2= document.createElement("td")
        trEl.appendChild(tdEl2)
        if(jadval[i]!==undefined){
            tdEl2.innerHTML=jadval[i]}
    }   
}
stopEl.addEventListener("click",stopEnterval)