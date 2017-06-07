
function init() {

  let button = document.getElementById("update-button");
  let form = document.getElementById("form");
  let body = document.body;
  let inputValue;

  form.addEventListener("submit",function(e) {
    e.preventDefault();
    inputValue = document.getElementById("input-field").value;
    if(inputValue !== "") {
      body.style.backgroundImage = "url(" + inputValue + ")";
    }
  });


}

init();
