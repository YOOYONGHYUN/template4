import { render, date } from "./src/calendar.js";

document.querySelector(".fa-caret-left").addEventListener("click", function () {
  date.setMonth(date.getMonth() - 1);
  render();
});

document
  .querySelector(".fa-caret-right")
  .addEventListener("click", function () {
    date.setMonth(date.getMonth() + 1);
    render();
  });

render();

document.querySelector(".date-picker").addEventListener("click", function () {
  document.querySelector(".calendar").classList.add("show");
});

document.addEventListener("mouseup", function (e) {
  console.log(e.target);
  let calendar = document.querySelector(".calendar");
  if (!calendar.contains(e.target)) {
    calendar.classList.remove("show");
  }
});
