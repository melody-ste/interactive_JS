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
  // console.log("Double-clic détecté !");
  
  if (bootstrapLink.disabled === false){

  bootstrapLink.disabled = true;

  }else 
  bootstrapLink.disabled = false;
});


// Fonctionnalité 6

