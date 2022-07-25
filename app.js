import { render, date } from "./src/index.js";

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
