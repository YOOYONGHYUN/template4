const show = (container) => {
  container
    .querySelector(".date-picker")
    .addEventListener("click", function () {
      container.querySelector(".calendar").classList.add("show");
    });

  document.addEventListener("mouseup", function (e) {
    let calendar = container.querySelector(".calendar");
    if (!calendar.contains(e.target)) {
      calendar.classList.remove("show");
    }
  });
};

export default show;
