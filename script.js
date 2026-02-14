let openedCard = null;

// kártyák kattintása
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", function(e){

        // ha gombra kattintott, ne flipeljen
        if(e.target.tagName === "BUTTON") return;

        // ha már van nyitott és nem ugyanaz
        if(openedCard && openedCard !== card){
            openedCard.classList.remove("flipped");
        }

        // ha ugyanarra kattintottunk → zárja
        if(card.classList.contains("flipped")){
            card.classList.remove("flipped");
            openedCard = null;
            return;
        }

        // új kártya nyitása
        card.classList.add("flipped");
        openedCard = card;

        e.stopPropagation();
    });
});


// háttérre kattintás bezárja
document.addEventListener("click", function(e){
    if(openedCard && !openedCard.contains(e.target)){
        openedCard.classList.remove("flipped");
        openedCard = null;
    }
});


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
}







