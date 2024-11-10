//side bar tab
let tabs = document.querySelectorAll(".sidebar li a");
let tabs_wrap = document.querySelectorAll(".page");

tabs.forEach((tab, tab_index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    tabs_wrap.forEach((content, content_index) => {
      if (content_index == tab_index) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});
//small page
let tabss = document.querySelectorAll(".topbar li a");
let tabss_wrap = document.querySelectorAll(".page");

tabss.forEach((tab, tab_index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    tabss_wrap.forEach((content, content_index) => {
      if (content_index == tab_index) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});

//side bar
const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text"),
  modeSwitchh = body.querySelector(".togglee-switch"),
  modeTextt = body.querySelector(".mode-textt");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

//dark mode
modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerHTML = "Light Mode";
  } else {
    modeText.innerHTML = "Dark Mode";
  }
});

//dark mode for setting
modeSwitchh.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeTextt.innerHTML = "Light Mode";
  } else {
    modeTextt.innerHTML = "Dark Mode";
  }
});

//weather for home page

const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const currentWeatheritemsEl = document.getElementById("current-weather-items");
const timeZone = document.getElementById("time-zone");
const visibility = document.getElementById("Visibility");
const countryEl = document.getElementById("country");
const weatherForecastEl = document.getElementById("weather-forecast");
const currentTempEl = document.getElementById("current-temp");
const HValue_one = document.getElementById("HValue-1");
const WValue_one = document.getElementById("WValue-1");
const PValue_one = document.getElementById("PValue-1");
const current_mon = document.getElementById("current-mon");

//wearher-page
const date_page = document.getElementById("date1");
const userLocation = document.getElementById("userLocation"),
  converter = document.getElementById("converter"),
  city = document.getElementById("city"),
  current_location = document.getElementById("current-location"),
  temperature = document.getElementById("temprature"),
  weather_icon = document.getElementById("weather-icon"),
  HValue = document.getElementById("HValue"),
  WValue = document.getElementById("WValue"),
  PValue = document.getElementById("PValue"),
  CValue = document.getElementById("CValue"),
  SRValue = document.getElementById("SRValue"),
  SSValue = document.getElementById("SSValue"),
  UVValue = document.getElementById("UVValue");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednasday",
  "Thursday ",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const API_KEY = "91f8e9e861e8415cab985556241011";
setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();

  const day = time.getDay();
  const hour = time.getHours();
  const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
  const minutes = time.getMinutes();
  const ampm = hour >= 12 ? "Pm " : "Am";

  timeEl.innerHTML =
    hoursIn12HrFormat +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    "" +
    `<span id="am-pm" class="pm">${ampm}</span>`;

  dateEl.innerHTML = days[day] + "," + date + "" + months[month];
}, 1000);

setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  date_page.innerHTML = days[day] + "," + date + "" + months[month];
}, 1000);

Weather_Api_Endpiont = `http://api.weatherapi.com/v1/current.json/forecast.json?key=${API_KEY}&aqi=no&q=`;

function findUserLocation() {
  fetch(Weather_Api_Endpiont + userLocation.value)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
findUserLocation();

//setting section
const wrappar = document.querySelector(".wrappar"),
  selectBtn = wrappar.querySelector(".select-btn"),
  options = wrappar.querySelector(".options");

let countries = [
  "Nigeria",
  "London",
  "Algeria",
  "Canada",
  "Mali",
  "Afganistan",
];
function addCountry() {
  countries.forEach((country) => {
    let li = ` <li onclick="updateName(this)">${country}</li>`;
    options.insertAdjacentHTML("beforeend", li);
  });
}

function updateName(selectedLi) {
  wrappar.classList.remove("active");
  selectBtn.firstElementChild.innerText = selectedLi.innerText;

  function getWeatherData() {
    fetch(Weather_Api_Endpiont + selectedLi.innerText)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        timeZone.innerHTML = data.location.tz_id;
        visibility.innerHTML = data.current.vis_km + "km";
        countryEl.innerHTML = data.location.name;

        WValue_one.innerHTML = data.current.wind_mph + "mph";
        PValue_one.innerHTML = data.current.pressure_in;
        HValue_one.innerHTML = data.current.humidity + "%";
      });
  }
  getWeatherData();
}
addCountry();

selectBtn.addEventListener("click", () => {
  wrappar.classList.toggle("active");
});
