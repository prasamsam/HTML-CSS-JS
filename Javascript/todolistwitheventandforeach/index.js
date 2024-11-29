let inputValues = {
  'title' : '',
  'status' : 'incomplete'
}

let todoItems = [];

let output = document.querySelector(".output");


function changeInput(event){
  inputValues = {
    ...inputValues,
    [event.target.name] : event.target.value
  }
}

function addItems(){
  output.innerHTML = '';

  todoItems.push(inputValues);

  
  todoItems.forEach(todoItem=>{
    if(todoItem['status'] =='complete'){
      output.innerHTML += `<div class="output-box">
            <span class="todo-title">${todoItem['title']}</span>
            <input type="checkbox" class="status-check" checked>
          </div>`
    }else{
      output.innerHTML += `<div class="output-box">
            <span class="todo-title">${todoItem['title']}</span>
            <input type="checkbox" class="status-check">
          </div>`
    }
  })
  inputValues = {
    'title':'',
    'status':'incomplete'
  }

}

function resetForm(){
  document.querySelector("input[name='title']").value = "";
  document.querySelector("#status-check").value = "incomplete"
}


document.querySelector("#todo-form").addEventListener("submit",(event)=>{
  event.preventDefault();
  addItems();
  resetForm();
});