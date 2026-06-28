// =========================
// Typing Animation
// =========================

const message = document.querySelector(".message");

const originalText = message.innerHTML;

message.innerHTML = "";

let i = 0;

function typeWriter(){

    if(i < originalText.length){

        message.innerHTML += originalText.charAt(i);

        i++;

        setTimeout(typeWriter,25);

    }

}

window.onload = ()=>{

    setTimeout(typeWriter,800);

}


// =========================
// Floating Hearts
// =========================

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML="🤍";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="100vh";

    heart.style.fontSize=(15+Math.random()*20)+"px";

    heart.style.opacity=Math.random();

    heart.style.pointerEvents="none";

    heart.style.animation="floatHeart 6s linear forwards";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },6000);

}

setInterval(createHeart,700);


// =========================
// Heart Animation CSS
// =========================

const style=document.createElement("style");

style.innerHTML=`

@keyframes floatHeart{

0%{

transform:translateY(0) scale(.5);

opacity:0;

}

20%{

opacity:1;

}

100%{

transform:translateY(-120vh) scale(1.5);

opacity:0;

}

}

`;

document.head.appendChild(style);


// =========================
// Button Click
// =========================

const btn=document.querySelector(".btn");

btn.addEventListener("click",()=>{

    btn.innerHTML="❤️ Stay Happy ❤️";

    btn.style.transform="scale(1.1)";

    setTimeout(()=>{

        btn.style.transform="scale(1)";

    },300);

});


// =========================
// Card Glow Pulse
// =========================

const card=document.querySelector(".card");

setInterval(()=>{

card.animate([

{boxShadow:"0 0 20px #00e5ff"},

{boxShadow:"0 0 60px #00e5ff"},

{boxShadow:"0 0 20px #00e5ff"}

],{

duration:2500

});

},2500);
