let openedCard = null;

function flip(card){

// ha már van nyitott és nem ugyanarra kattintottunk
if(openedCard && openedCard !== card){
openedCard.classList.remove("flipped");
}

// ha ugyanarra kattintottunk → zárja vissza
if(card.classList.contains("flipped")){
card.classList.remove("flipped");
openedCard = null;
return;
}

// új kártya nyitása
card.classList.add("flipped");
openedCard = card;
}


function redeem(e,gift){
e.stopPropagation();

emailjs.send("service_hia57nl","template_4d10e3l",{
name:"Judit",
gift:gift,
email:"ludanyi555@gmail.com"
})
.then(function(){
alert("Beváltás elküldve ❤️");
})
.catch(function(error){
alert("Hiba történt 😢");
console.log(error);
});

document.addEventListener("click", function(e){

if(openedCard && !openedCard.contains(e.target)){
openedCard.classList.remove("flipped");
openedCard = null;
}

});






