function flip(card){
card.classList.toggle("flipped");
}

function redeem(e,gift){
e.stopPropagation();

emailjs.send("service_hia57nl","template_4d10e3l",{
name:"Judit",
gift:gift,
email:"ludanyi555@gmail.com"
}).then(function(){
alert("Beváltás elküldve ❤️");
});
}
