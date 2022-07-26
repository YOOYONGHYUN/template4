import { render, date } from "./src/calendar.js";
import show from "./src/show.js";

//이전달로 가기
document.querySelector(".fa-caret-left").addEventListener("click", function () {
  date.setMonth(date.getMonth() - 1);
  render();
});

//다음달로 가기
document
  .querySelector(".fa-caret-right")
  .addEventListener("click", function () {
    date.setMonth(date.getMonth() + 1);
    render();
  });

//현재 날짜 render
render();

//picker input창에 render
show();
