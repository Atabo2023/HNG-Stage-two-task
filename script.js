"use strict";

// ------------------ Curent Time In UTC -----------------
const time = document.getElementById("time");
const day = document.getElementById("day");
function updateTime() {
  const now = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const newDay = days[now.getUTCDay()];
  const hours = String(now.getUTCHours()).padStart(2, "0");
  const minutes = String(now.getUTCMinutes()).padStart(2, "0");
  const seconds = String(now.getUTCSeconds()).padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds} UTC`;
  time.textContent = timeString;
  day.textContent = newDay;
}
// Initial call to display the time immediately
updateTime();
// Update the time every second
setInterval(updateTime, 1000);
