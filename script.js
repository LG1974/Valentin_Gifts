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

let card = e.target.closest(".card");
let button = e.target;

// ha már elküldött
if(card.classList.contains("redeemed")){
return;
}

emailjs.send("service_hia57nl","template_4d10e3l",{
    name:"Judit",
    gift:gift,
    email:"ludanyi555@gmail.com"
})
.then(function(){

    // jelöljük beváltottnak
    card.classList.add("redeemed");

    // gomb eltüntetése
    button.remove();

    // új üzenet hozzáadása
    let message = document.createElement("div");
    message.className = "redeemed-message";
    message.innerText = "Korábban elküldve ❤️";

    card.querySelector(".card-back").appendChild(message);

})
.catch(function(error){
    alert("Hiba történt 😢");
    console.log(error);
});
}










