const input = document.querySelector("#main");
const add = document.getElementById("add");
const cls = document.getElementById("clear");
const tasks = document.querySelector(".tasks");



input.addEventListener("focus", (e) => {
  if (e.target.value == "") {
    e.target.style.border = "1px solid red";
  } else e.target.style.border = "1px solid green";
});
input.addEventListener("focusout", (e) => {
  e.target.style.border = "1px solid rgb(0, 0, 63)";
});
input.addEventListener("keyup", (e) => {
  if (e.target.value == "") {
    e.target.style.border = "1px solid red";
  } else {
    e.target.style.border = "1px solid green";
  }
});

add.addEventListener("click", () => {
  if (input.value == "") {
    alert("Task cant be empty");
  } else {
    const n = document.createElement("div");
    n.innerHTML = `<div class="task">
    <div class="check">
    <input onchange="check(this)" type="checkbox"  />
    <input type="text" readonly value=${input.value} >
    </div>
    <div class="dualBtn">
    <button onclick="edit(this)">Edit</button>
    <button onclick="del(this)">Delete</button>
    </div>
    </div>`;
    tasks.appendChild(n);
    input.value = "";
  }
});

cls.addEventListener("click", () => {
  tasks.innerHTML = "";
});

function del(a) {
  a.parentNode.parentNode.parentNode.remove();
}
function edit(a) {
  const content = a.parentNode.previousElementSibling.lastElementChild;
  let l = content.value.length;
  content.toggleAttribute("readonly");
  if (a.innerHTML == "Edit") {
    content.focus();
    content.style.color = "cyan";
    content.setSelectionRange(l, l);
    a.innerHTML = "Save";
  } else {
    content.style.color = "white";
    a.innerHTML = "Edit";
  }
}

function check(a) {
  if (a.checked) {
    a.nextElementSibling.style.textDecoration = "line-through";
  } else {
    a.nextElementSibling.style.textDecoration = "none";
  }
}
