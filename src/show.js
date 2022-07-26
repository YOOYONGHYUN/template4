const show = () => {
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
};

export default show;
