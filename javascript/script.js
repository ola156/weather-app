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
const currentInformationEl = document.getElementById("current-information");

const HValue_one = document.getElementById("HValue-1");
const WValue_one = document.getElementById("WValue-1");
const PValue_one = document.getElementById("PValue-1");
const current_mon = document.getElementById("current-mon");

//wearher-page
const date_page = document.getElementById("date1");
const userLocation = document.getElementById("userLocation"),
  converter = document.getElementById("converter"),
  converterP = document.getElementById("converterP"),
  converterW = document.getElementById("converterW"),
  city = document.getElementById("city"),
  current_location = document.getElementById("current-location"),
  temperature = document.getElementById("temprature"),
  weather_icon = document.getElementById("weather-icon"),
  weather_text = document.getElementById("weather-text"),
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
Weather_Api_Endpiont_Forecast = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=07112&days=7`;

function findUserLocation() {
  fetch(Weather_Api_Endpiont + userLocation.value)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      city.innerHTML = data.location.tz_id;
      current_location.innerHTML = data.location.name;
      WValue.innerHTML = windConverter(data.current.wind_mph);
      PValue.innerHTML = pConverter(data.current.pressure_in);
      HValue.innerHTML = Math.round(data.current.humidity) + "<span>%</span>";
      UVValue.innerHTML = Math.round(data.current.uv);
      CValue.innerHTML = Math.round(data.current.cloud) + "<span>%</span>";
      temperature.innerHTML = TempConverter(data.current.temp_c);
      weather_text.innerHTML = data.current.condition.text;
      weather_icon.innerHTML = `  <img
                src=" https:${data.current.condition.icon}"
                alt="weater icon"
                class="weather-icon"
              />`;
      SRValue.innerHTML = data.forecast.forecastday[0].astro.sunset;
      SSValue.innerHTML = data.forecast.forecastday[0].astro.sunrise;
    });
}

findUserLocation();

//setting section
const wrappar = document.querySelector(".wrappar"),
  selectBtn = wrappar.querySelector(".select-btn"),
  searchInp = wrappar.querySelector("input"),
  options = wrappar.querySelector(".options");

let countries = [
  "Nigeria",
  "London",
  "Algeria",
  "Canada",
  "Mali",
  "Afganistan",
  "China",
  "America",
  "South Africa",
  "Denmark",
  "Niger",
];
//add countries setting section
function addCountry() {
  countries.forEach((country) => {
    let li = ` <li onclick="updateName(this)">${country}</li>`;
    options.insertAdjacentHTML("beforeend", li);
  });
}
addCountry();
function updateName(selectedLi) {
  options.innerHTML = "";
  searchInp.value = "";
  addCountry();
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
        WValue_one.innerHTML = windConverter(data.current.wind_mph);
        PValue_one.innerHTML = pConverter(data.current.pressure_in);
        HValue_one.innerHTML = data.current.humidity + "%";
      });
  }
  getWeatherData();

  function getForecast() {
    fetch(Weather_Api_Endpiont_Forecast)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let otherDayForecast = "";
        data.forecast.forecastday.forEach((forecastday, idx) => {
          if (idx == 0) {
            currentTempEl.innerHTML = `
             <img
              src=" https:${forecastday.day.condition.icon}"
              alt="weater icon"
              class="weather-icon"
            />
            <div class="others">
              <div class="day" id="current-mon">${forecastday.date}</div>
              <div class="temp">AvgTemp ${TempConverter(
                forecastday.day.avgtemp_c
              )}</div>
              <div class="temp">MaxTemp  ${TempConverter(
                forecastday.day.maxtemp_c
              )}</div>
            </div>`;
          } else {
            otherDayForecast += `
             <div class="weather forecast-item">
              <div class="day">${forecastday.date}</div>
              <img
                src=" https:${forecastday.day.condition.icon}"
                alt="weater icon"
                class="weather-icon"
              />

              <div class="temp">AvgTemp ${TempConverter(
                forecastday.day.avgtemp_c
              )}</div>
              <div class="temp">MaxTemp  ${TempConverter(
                forecastday.day.maxtemp_c
              )}</div>
            </div>
            
            `;
          }
        });
        weatherForecastEl.innerHTML = otherDayForecast;
      });
  }
  getForecast();
}

searchInp.addEventListener("keyup", () => {
  let arr = [];
  let searchedVal = searchInp.value.toLowerCase();
  arr = countries
    .filter((data) => {
      return data.toLowerCase().startsWith(searchedVal);
    })
    .map((data) => ` <li onclick="updateName(this)">${data}</li>`)
    .join("");
  options.innerHTML = arr ? arr : `<p>!Oops country not found </p>`;
  console.log(arr);
});
selectBtn.addEventListener("click", () => {
  wrappar.classList.toggle("active");
});
// convert temp
function TempConverter(temp) {
  let tempValue = Math.round(temp);
  let message = "";
  if (converter.value == "° C") {
    message = tempValue + "<span>" + "\xB0C</span>";
  } else {
    let ctof = (tempValue * 9) / 5 + 32;
    message = ctof + "<span>" + "\xB0F</span>";
  }
  return message;
}

// convert wind
function windConverter(wind) {
  let windValue = Math.round(wind);
  let message = "";
  if (converterW.value == "Mph") {
    message = windValue + "<span>" + " Mph</span>";
  } else {
    let mtok = (windValue * 160934) / 100000;
    message = mtok + "<span>" + " km/hr</span>";
  }
  return message;
}
// convert pressure
function pConverter(pressure) {
  let pValue = Math.round(pressure);
  let message = "";
  if (converterP.value == "Mbar") {
    message = pValue + "<span>" + " Mbar</span>";
  } else {
    let mtoa = pValue / 1013;
    message = mtoa + "<span>" + " Atm </span>";
    message = mtoa.toFixed(3);
  }
  return message;
}
