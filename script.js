let toggle_btn;
let big_wrapper;
let hamburger_menu;
let btn_expense;
let recalculateBtn_expense;
let resultElement_expense;
let btn2;
let recalculateBtn2;
let resultElement2;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
  btn_expense = document.getElementById("calculate1");
  recalculateBtn_expense = document.getElementById("try-again1");
  resultElement_expense = document.getElementById("result");
  btn2 = document.getElementById("calculate2");
  recalculateBtn2 = document.getElementById("try-again2");
  resultElement2 = document.querySelector("#result2");
}

function attachEventListeners() {
  toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
  btn_expense.addEventListener("click", calculateExpense1);
  recalculateBtn_expense.addEventListener("click", resetInputs1);
  btn2.addEventListener("click", calculateExpense2);
  recalculateBtn2.addEventListener("click", resetInputs2);
}

const main = document.querySelector("main");
declare();
attachEventListeners();

let dark = false;

function toggleAnimation() {
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    declare();
    attachEventListeners();
  });
}

function calculateExpense1() {
  let allowance = parseFloat(document.querySelector("#allowance1").value);
  let expense = parseFloat(document.querySelector("#expense1").value);

  if (isNaN(allowance) || isNaN(expense)) {
    alert("Please fill out all the input fields with valid numbers!");
    return;
  }

  const daysInWeek = 7;
  let remainingAmount = (allowance - expense) / daysInWeek;

  if (remainingAmount < 0) {
    resultElement_expense.style.color = "red";
    recalculateBtn_expense.style.display = "inline";
  } else {
    resultElement_expense.style.color = "skyblue";
    recalculateBtn_expense.style.display = "inline";
  }

  resultElement_expense.textContent = remainingAmount.toFixed(2);
}

function resetInputs1() {
  document.querySelector("#result").textContent = "00.00";
  document.querySelector("#allowance1").value = "";
  document.querySelector("#expense1").value = "";
  recalculateBtn_expense.style.display = "none";
}

function calculateExpense2() {
  let allowance = parseFloat(document.querySelector("#allowance2").value);
  let expense = parseFloat(document.querySelector("#expense2").value);
  let wantExpense = parseFloat(document.querySelector("#wantexpense2").value);

  if (isNaN(allowance) || isNaN(expense) || isNaN(wantExpense)) {
    alert("Please fill out all the input fields with valid numbers!");
    return;
  }

  const daysInWeek = 7;
  let remainingAmount = allowance - expense * daysInWeek - wantExpense;

  if (wantExpense > remainingAmount || remainingAmount < 0) {
    resultElement2.innerHTML = "Exceeding total allowance!";
    recalculateBtn2.style.display = "inline";
  } else {
    resultElement2.innerHTML = "Within your budget!";
    recalculateBtn2.style.display = "none";
  }
}

function resetInputs2() {
  document.querySelector("#result2").innerHTML = "";
  document.querySelector("#allowance2").value = "";
  document.querySelector("#expense2").value = "";
  document.querySelector("#wantexpense2").value = "";
  recalculateBtn2.style.display = "none";
}
