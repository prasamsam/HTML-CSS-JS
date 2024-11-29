let displayContent = document.querySelector('#display');


let enteredData = "";

function calculateData(data){
  enteredData = enteredData + data;
  displayContent.innerHTML = enteredData;
}

function totalValue(){
  let total = eval(enteredData);
  displayContent.innerHTML = `The total is ${total}`;
}

function reset(){
  enteredData = "";
  displayContent.innerHTML = enteredData;
}

