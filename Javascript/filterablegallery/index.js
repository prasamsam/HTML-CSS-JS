

let webDevContent = document.querySelector("#web-dev-content");
let backEndContent = document.querySelector("#backend-content");
let androidContent = document.querySelector("#android-content");

function filterGallery(event){
  if(event.target.id == "webdev"){
    if(webDevContent.classList.contains("hide")){
      webDevContent.classList.remove("hide")
    }
  }else{{
    webDevContent.classList.add("hide")
  }};

  if(event.target.id == "backend"){
    if(backEndContent.classList.contains("hide")){
      backEndContent.classList.remove("hide")
    }
  }else{{
    backEndContent.classList.add("hide")
  }}

  if(event.target.id == "android"){
    if(androidContent.classList.contains("hide")){
      androidContent.classList.remove("hide")
    }
  }else{{
    androidContent.classList.add("hide")
  }}
}