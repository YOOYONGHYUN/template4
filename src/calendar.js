const date = new Date();

const render = () => {
  while (document.querySelector(".calendar-grid").hasChildNodes()) {
    document
      .querySelector(".calendar-grid")
      .removeChild(document.querySelector(".calendar-grid").firstChild);
  }

  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let p = document.querySelector(".calendar-nav-txt").querySelectorAll("p");
  console.log(p);
  p[0].innerText = months[date.getMonth()];
  p[1].innerText = date.getFullYear();

  //날짜 채우기
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  console.log(lastDay);

  const prevDate = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  console.log(prevDate);

  //day 채우기
  for (let i = 0; i < 7; i++) {
    let div = document.createElement("div");
    div.classList.add("weekday");
    div.innerText = `${days[i]}`;
    document.querySelector(".calendar-grid").appendChild(div);
  }

  //이전 달의 날짜 채우기
  date.setDate(1);
  for (let i = date.getDay(); i > 0; i--) {
    let div = document.createElement("div");
    div.classList.add("date");
    div.classList.add("pre-date");
    div.innerText = `${prevDate - i + 1}`;
    document.querySelector(".calendar-grid").appendChild(div);
  }

  //이번달의 날짜 채우기
  for (let i = 0; i < lastDay; i++) {
    let div = document.createElement("div");
    div.classList.add("date");
    div.classList.add("present-date");
    div.innerText = `${i + 1}`;
    document.querySelector(".calendar-grid").appendChild(div);
  }

  //다음달의 날짜 채우기
  let length = document.querySelector(".calendar-grid").childNodes.length;
  let count = 1;
  for (let i = 0; i < 49 - length; i++) {
    let div = document.createElement("div");
    div.classList.add("date");
    div.classList.add("next-date");
    div.innerText = `${count}`;
    count++;
    document.querySelector(".calendar-grid").appendChild(div);
  }

  //일요일 date 구하기.
  let sunday = 0;
  for (let i = 1; i <= 7; i++) {
    date.setDate(i);
    if (date.getDay() == 0) {
      console.log(date.getDay(), date.getDate());
      sunday = date.getDate();
    }
  }
  //   console.log(sunday);

  //일요일 빨간색으로 나타내기.
  while (sunday <= lastDay) {
    document.querySelectorAll(".present-date")[sunday - 1].style.color = "red";
    sunday += 7;
  }

  //현재 날짜 초록색 원으로 표시해주기
  let presentDate = new Date();
  //   console.log(presentDate);
  //   console.log(presentDate.getMonth());
  //   console.log(presentDate.getDate());
  //   console.log(p[0].innerText);
  //   console.log(months[presentDate.getMonth()]);
  if (
    p[0].innerText == months[presentDate.getMonth()] &&
    p[1].innerText == presentDate.getFullYear()
  ) {
    let a =
      document.querySelectorAll(".present-date")[presentDate.getDate() - 1];
    a.style.border = "solid 1px #44c379";
    a.style.borderRadius = "50%";
  }

  //mouseover시 클래스 추가
  let hoverDate = document.querySelectorAll(".date");
  for (let i = 0; i < hoverDate.length; i++) {
    hoverDate[i].addEventListener("mouseover", function () {
      hoverDate[i].classList.add("hovered");
    });

    hoverDate[i].addEventListener("mouseout", function () {
      hoverDate[i].classList.remove("hovered");
    });
  }
  //날짜 찍으면 date-picker에 render
  let pickerYear = date.getFullYear();

  //전달에 포함된 날짜 찍을시
  let pre = document.querySelectorAll(".pre-date");
  for (let i = 0; i < pre.length; i++) {
    pre[i].addEventListener("click", function () {
      let pickerMonth = date.getMonth();
      let pickerDate = pre[i].innerText;
      document.querySelector(
        ".date-picker"
      ).value = `${pickerYear}-${pickerMonth
        .toString()
        .padStart(2, "0")}-${pickerDate.toString().padStart(2, "0")}`;

      document.querySelector(".calendar").classList.remove("show");
    });
  }

  //이번달에 포함된 날짜 찍을시
  let present = document.querySelectorAll(".present-date");
  for (let i = 0; i < present.length; i++) {
    present[i].addEventListener("click", function () {
      let pickerMonth = date.getMonth() + 1;
      let pickerDate = present[i].innerText;
      document.querySelector(
        ".date-picker"
      ).value = `${pickerYear}-${pickerMonth
        .toString()
        .padStart(2, "0")}-${pickerDate.toString().padStart(2, "0")}`;

      document.querySelector(".calendar").classList.remove("show");
    });
  }

  //다음달에 포함된 날짜 찍을시
  let next = document.querySelectorAll(".next-date");
  for (let i = 0; i < next.length; i++) {
    next[i].addEventListener("click", function () {
      let pickerMonth = date.getMonth() + 2;
      let pickerDate = next[i].innerText;
      document.querySelector(
        ".date-picker"
      ).value = `${pickerYear}-${pickerMonth
        .toString()
        .padStart(2, "0")}-${pickerDate.toString().padStart(2, "0")}`;

      document.querySelector(".calendar").classList.remove("show");
    });
  }
};

export { date, render };
