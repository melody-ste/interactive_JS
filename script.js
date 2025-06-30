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
console.log(editBtnOne)

let secondCard = document.getElementsByClassName("col-md-4")[1]
console.log(CardOne)

editBtnTwo.addEventListener("click", function() {
  
  if (secondCard.style.color === 'green'){

  secondCard.style.color = '' ;

  }else 
  secondCard.style.color="green";
});


