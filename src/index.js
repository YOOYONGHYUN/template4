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

  for (let i = 0; i < 7; i++) {
    let div = document.createElement("div");
    div.classList.add("weekday");
    div.innerText = `${days[i]}`;
    document.querySelector(".calendar-grid").appendChild(div);
  }

  date.setDate(1);
  for (let i = date.getDay(); i > 0; i--) {
    let div = document.createElement("div");
    div.classList.add("pre-date");
    div.innerText = `${prevDate - i + 1}`;
    document.querySelector(".calendar-grid").appendChild(div);
  }

  for (let i = 0; i < lastDay; i++) {
    let div = document.createElement("div");
    div.classList.add("present-date");
    div.innerText = `${i + 1}`;
    document.querySelector(".calendar-grid").appendChild(div);
  }

  let length = document.querySelector(".calendar-grid").childNodes.length;
  let count = 1;
  for (let i = 0; i < 49 - length; i++) {
    let div = document.createElement("div");
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
    // console.log("an");
  }

  let presentDate = new Date();
  //   console.log(presentDate);
  //   console.log(presentDate.getMonth());
  //   console.log(presentDate.getDate());
  //   console.log(p[0].innerText);
  //   console.log(months[presentDate.getMonth()]);
  if (p[0].innerText == months[presentDate.getMonth()]) {
    let a =
      document.querySelectorAll(".present-date")[presentDate.getDate() - 1];
    a.style.border = "solid 1px #a52a2a70";
    a.style.borderRadius = "50%";
  }
};

export { date, render };
