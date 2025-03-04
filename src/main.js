const numberEl = document.querySelector("#display");
const keysEl = document.querySelectorAll("input");

keysEl.forEach((key) => {
  key.addEventListener("click", () => {
    if (key.value === "=") {
      numberEl.value = eval(numberEl.value);
    } else if (key.value ===  "C") {
      numberEl.value = "";
    } else if (key.value === "<-"){ 
      numberEl.value = numberEl.value.slice(0, -1)
    } else {
      numberEl.value += key.value;
    }
  })
})