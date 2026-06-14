emailjs.init("YOUR_PUBLIC_KEY");

function playMusic(){
document.getElementById("bgMusic").play();
}

const noBtn = document.getElementById("noBtn");

const texts = [
"Are You Sure? 🥺",
"Really Sure? 😭",
"Please Say Yes ❤️",
"I'll Buy Ice Cream 🍦",
"Come On 😂",
"Say Yes ❤️"
];

let counter = 0;

noBtn.addEventListener("mouseover",()=>{

counter++;

if(counter < texts.length){
noBtn.innerText=texts[counter];
}

const x=Math.random()*300;
const y=Math.random()*300;

noBtn.style.transform=
`translate(${x}px,${y}px)`;

});

function loveAccepted(){

document.getElementById("hiddenSection")
.style.display="block";

alert("Yessss! ❤️❤️❤️");
}

for(let i=0;i<40;i++){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.classList.add("heart");

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=
(Math.random()*5+5)+"s";

document.body.appendChild(heart);
}

document
.getElementById("dateForm")
.addEventListener("submit",function(e){

e.preventDefault();

const date=
document.getElementById("date").value;

const time=
document.getElementById("time").value;

const food=
document.querySelector(
'input[name="food"]:checked'
)?.value;

const message=
document.getElementById("message").value;

const whatsappMessage=
`❤️ DATE CONFIRMED ❤️

Date: ${date}
Time: ${time}
Food: ${food}

Message:
${message}

Love,
Mueletshedzi ❤️`;

window.open(
`https://wa.me/27712646166?text=${encodeURIComponent(whatsappMessage)}`
);

emailjs.send(
"YOUR_SERVICE_ID",
"YOUR_TEMPLATE_ID",
{
date,
time,
food,
message,
to_email:"[kgopaneanza1@gmail.com](mailto:kgopaneanza1@gmail.com)"
}
);

alert("Date Sent ❤️");
});

const timer=document.getElementById("timer");

setInterval(()=>{

const target=
new Date("2026-12-31");

const now=
new Date();

const diff=
target-now;

const days=
Math.floor(diff/(1000*60*60*24));

timer.innerHTML=
days+" Days Left ❤️";

},1000);
