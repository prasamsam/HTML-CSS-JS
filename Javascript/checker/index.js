
// odd even checker

let enteredValueInput = document.getElementById("odd-even-number");
let oddEvenMessage = document.querySelector("#odd-even-message");

function checkOddEven(){
  if(enteredValueInput.value%2 == 0){
    oddEvenMessage.innerHTML = "The number you have entered is even."
  }else{
    oddEvenMessage.innerHTML = "The number you have entered is odd."
  }
}

// simple interest calculator

let principle = document.querySelector("#principle");
let interestRate = document.querySelector("#interest-rate");
let time = document.querySelector("#time");
let interest = "";
let interestMessage = document.querySelector("#interest-message");


function calculateInterest(){
  let p = principle.value;
  let r = interestRate.value;
  let t = time.value;

  interest = (p*r*t)/100;

  interestMessage.innerHTML = `The interest is ${interest}.`
}

// circle area and circumference calculator

let radius = document.querySelector("#radius");
let areaMessage = document.querySelector("#area-message")
let circumferenceMessage = document.querySelector("#circumference-message");
let area = "";
let circumference = "";
const pi = 3.14;

function circleArea(){
  let r = radius.value;

  area = pi*r*r;

  areaMessage.innerHTML = `The area of the circle is ${area}.`

}

function circleCircumference(){
  let r = radius.value;

  circum = 2*pi*r;

  circumferenceMessage.innerHTML = `The circumference of the circle is ${circum}.`
}

// biggest number checker

let number1 = document.querySelector("#number1");
let number2 = document.querySelector("#number2");
let number3 = document.querySelector("#number3");

let biggestMessage = document.querySelector("#biggest-message");

function biggestNumberChecker(){
  let a = number1.value;
  let b = number2.value;
  let c = number3.value;

  if(a>b && a>c){
    biggestMessage.innerHTML =`The biggest number is ${a}.`;
  }else if(b>a && b>c){
    biggestMessage.innerHTML = `The biggest number is ${b}.`;
  }else{
    biggestMessage.innerHTML = `The biggest number is ${c}`;
  }
}

// positive and negative number checker

let number = document.querySelector("#int-number");
let posNegMessage = document.querySelector("#positive-negative-message");

function positiveNegativeChecker(){
  if(number.value >= 0 ){
    posNegMessage.innerHTML = `The number is Positive.`
  }else{
    posNegMessage.innerHTML = `The number is negative.`
  }
}

// voting eligibilty checker

let age = document.querySelector("#age");
let votingAgeMessage = document.querySelector("#voting-age-message");

function votingAgeChecker(){
  if(age.value >= 18){
    votingAgeMessage.innerHTML = `Congratulations!! You are eligible for voting.`
  }else{
    votingAgeMessage.innerHTML = `Unfortunately, you are not eligible for voting.`
  }
}

// result checker

let physics = document.querySelector("#physics");
let chemistry = document.querySelector("#chemistry");
let maths = document.querySelector("#maths");
let biology = document.querySelector("#biology");
let english = document.querySelector("#english");
let resultMessage = document.querySelector("#result-message");

function resultChecker(){
  resultSum = physics.value + chemistry.value + maths.value + biology.value + english.value;

  if(resultSum <250){
    resultMessage.innerHTML = `Sorry!! You have failed!!`
  }else{
    resultMessage.innerHTML = `Congratulations!! You have passed.`
  }
}


