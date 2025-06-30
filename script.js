// Fonctionnalité 1

let footer = document.querySelector("footer");


footer.addEventListener("click", function() {
  console.log("clique");
});

// Fonctionnalité 1-bis

let count = 1;

footer.addEventListener("click", function() {
  console.log("clic numéro " + count);
  count++;
});


// Fonctionnalité 2

let hamburgerButton = document.querySelector(".navbar-toggler");

let navbarHeader = document.getElementById("navbarHeader");

hamburgerButton.addEventListener("click", function() {
  // console.log("bouton toggle");
  navbarHeader.classList.toggle("collapse");
});


// Fonctionnalité 3

let editBtnOne = document.getElementsByClassName("btn")[3] 
// console.log(editBtnOne)

let CardOne = document.getElementsByClassName("col-md-4")[0]
// console.log(CardOne)

editBtnOne.addEventListener("click", function() {
  
  CardOne.style.color="red";
});


// Fonctionnalité 4

let editBtnTwo = document.getElementsByClassName("btn")[5] 
// console.log(editBtnTwo)

let secondCard = document.getElementsByClassName("col-md-4")[1]
// console.log(secondCard)

editBtnTwo.addEventListener("click", function() {
  
  if (secondCard.style.color === 'green'){

  secondCard.style.color = '' ;

  }else 
  secondCard.style.color="green";
});


// Fonctionnalité 5

let navbar = document.querySelector('.navbar');

let bootstrapLink = document.querySelector('link[href*="bootstrap"]');

navbar.addEventListener("dblclick", function() {
  // console.log("Double-clic");
  
  if (bootstrapLink.disabled === false){

  bootstrapLink.disabled = true;

  }else 
  bootstrapLink.disabled = false;
});


// Fonctionnalité 6

const cards = document.getElementsByClassName("col-md-4");
const btnViews = document.getElementsByClassName("btn-success");


for (let i = 0; i < btnViews.length; i++) {
  let btn = btnViews[i];
  let card = cards[i];
  let text = card.querySelector(".card-text");
  let image = card.querySelector(".card-img-top");

  btn.addEventListener("mouseenter", function () {
    text.style.display = "none";
    image.style.width = "20%";
  });

  btn.addEventListener("mouseleave", function () {
    text.style.display = "";
    image.style.width = "";
  });
}


// Fonctionnalité 7

let graybtn = document.querySelector(".btn-secondary");
// console.log(graybtn);
let cardDiv = document.querySelector(".album .row");
// console.log(cardDiv);

graybtn.addEventListener("click",function () {
  const cards = cardDiv.querySelectorAll('.col-md-4');

  const lastCard = cards[cards.length - 1];
  const firstCard = cards[0];

  cardDiv.insertBefore(lastCard, firstCard);
});


// Fonctionnalité 8
let bluebtn = document.querySelector('.btn-primary');

bluebtn.addEventListener("click", function (event) {
  event.preventDefault(); 

  const cards = cardDiv.querySelectorAll('.col-md-4');
  const firstCard = cards[0];
  cardDiv.appendChild(firstCard); // appenChild place en dernier enfant du parent
  
});
