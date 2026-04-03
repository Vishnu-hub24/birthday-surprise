function nextPage(n){

document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"))
document.getElementById("s"+n).classList.add("active")

// start photo animation on page 3
if(n === 3){
document.getElementById("photos").innerHTML = ""
p = 0
showPhoto()
}

}

function start(){
let name=document.getElementById("nameInput").value
document.getElementById("hello").innerHTML="Hello "+"Swathi"+" ❤️"
document.getElementById("bgMusic").play()
nextPage(2)
}

function openGift(){
fireworks()
nextPage(5)
}

function blowCandles(){
document.getElementById("flame").style.display="none"
document.getElementById("blowText").innerHTML =
"✨ Wish made... Happy Birthday ❤️"
}

/* hacker typing */

let lines=[
"Connecting to memory database...",
"Scanning friendship data...",
"Friendship level: 100%",
"Preparing birthday surprise..."
]

let i=0

function type(){
if(i<lines.length){
document.getElementById("hackText").innerHTML+=lines[i]+"<br>"
i++
setTimeout(type,1000)
}else{
setTimeout(()=>nextPage(1),2000)
}
}

type()

/* balloons */

for(let i=0;i<20;i++){
let b=document.createElement("div")
b.className="balloon"
b.style.left=Math.random()*100+"%"
b.style.background="hsl("+Math.random()*360+",70%,60%)"
b.style.animationDuration=(5+Math.random()*5)+"s"
document.body.appendChild(b)
}

/* photos auto every 2 sec */

let imgs=[
"photo1.jpg",
"photo2.jpg",
"photo3.jpg",
"photo4.jpg",
"photo5.jpg",
"photo6.jpg"
]

let p=0

function showPhoto(){

if(p < imgs.length){

let img=document.createElement("img")
img.src=imgs[p]

document.getElementById("photos").appendChild(img)

p++

setTimeout(showPhoto,2000)

}

}

/* fireworks */

function fireworks(){
for(let i=0;i<30;i++){
let f=document.createElement("div")
f.className="firework"
f.style.left=Math.random()*100+"%"
f.style.top=Math.random()*100+"%"
document.body.appendChild(f)
setTimeout(()=>f.remove(),1000)
}
}
