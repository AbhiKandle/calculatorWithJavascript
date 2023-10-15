let val = document.querySelectorAll("#first>div");

val.forEach(function (el) {
  el.addEventListener("click", myfun);
});

let bag = "";

function myfun(event) {
  let No = event.target.innerText;
  if (No == "c") {
    bag = "";
    document.querySelector("#in").value = "";
  } else if (No == "=") {
    document.querySelector("#in").value = eval(bag);
  } else if (document.querySelector("#in").value == undefined) {
    document.querySelector("#in").value = " ";
  } else {
    bag = bag + No;
    document.querySelector("#in").value = bag;
  }
}
