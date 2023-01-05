// 1 - MASALA;

// let newArray = [];

// let arrayOfMultiples = (a, b) => {
// for (i = 1; i <= b; i++) {
// let numbers = a * i;
// newArray.push(numbers);
// }
// return newArray;
// };

// console.log(arrayOfMultiples(7, 5));

// 2 - MASALA;

// let compact = (arr) => arr.filter((val) => val);
// console.log(compact([0, 1, 2, false, "", 3]));

// 3-MASALA

// 4-MASALA

// let str = "I am Nemo finding";
// let splitted = str.split(" ");
// let findedNemo = splitted.findIndex((val, index) => val == "Nemo");

// let findNemo = () => findedNemo + 1;

// console.log(findNemo(str));

// 5-MASALA

// const func = (arr) => {
//   for (i = 0; i < arr.length - 1; i++) {

//   }
// };

// console.log(func(["rsq", "6hi", "g", "rsq6hig"]));

// =====================================================Uy ishi ===================================================================

let btnPositive = document.querySelector("#btn-positive");
let btnNegative = document.querySelector("#btn-negative");
let btnNeutral = document.querySelector("#btn-neutral");
let elForm = document.querySelector(".js-form");
let elInput = document.querySelector(".js-input");
let textTab = document.querySelector(".text__tab");

function btnPositivee() {
  btnPositive.classList.remove("text-secondary");
  btnNegative.classList.add("text-secondary");
  btnNeutral.classList.add("text-secondary");
  textTab.innerHTML = "Positive content";
}

btnPositive.addEventListener("click", () => {
  btnPositivee();
});

function btnNegativee() {
  btnPositive.classList.add("text-secondary");
  btnNegative.classList.remove("text-secondary");
  btnNeutral.classList.add("text-secondary");
  textTab.innerHTML = "Negative content";
}

btnNegative.addEventListener("click", () => {
  btnNegativee();
});

function btnNeutrale() {
  btnPositive.classList.add("text-secondary");
  btnNegative.classList.add("text-secondary");
  btnNeutral.classList.remove("text-secondary");
  textTab.innerHTML = "Neutral content";
}

btnNeutral.addEventListener("click", () => {
  btnNeutrale();
});

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  if ((elInput.value === "1", "2", "3")) {
    if (elInput.value == "1") {
      btnPositivee();
    }
    if (elInput.value == "2") {
      btnNegativee();
    }
    if (elInput.value == "3") {
      btnNeutrale();
    }
  }
  if (elInput.value != "1" && elInput.value != "2" && elInput.value != "3") {
    alert("Invalid index");
  }
  elInput.value = "";
});
