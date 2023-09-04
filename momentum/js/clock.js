/* 시계 */
const clock = document.querySelector(".content_clock span");

function getTime() {
  let date = new Date();
  let hours = String(date.getHours()).padStart(2, "0");
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let secconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours} : ${minutes} : ${secconds}`;
}


setInterval(getTime, 1000);

/* 날짜 */
const today = document.querySelector(".content_date span");

function getDate() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  let todayDate = new Date();
  let year = String(todayDate.getFullYear());
  let month = String(todayDate.getMonth() + 1).padStart(2, "0");
  let date = String(todayDate.getDate()).padStart(2, "0");
  let day = days[String(todayDate.getDay())];

  today.innerText = `${year} . ${month} . ${date} . ${day}`;
}
getDate();