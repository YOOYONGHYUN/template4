import { render, next, previous } from "./src/calendar.js";
import show from "./src/show.js";

let containers = [...document.querySelectorAll(".container")];

containers.forEach((container) => {
  show(container);
  render(container);

  next(container);
  previous(container);
});
//현재 날짜 render
// render();

// //picker input창에 render
// show();
