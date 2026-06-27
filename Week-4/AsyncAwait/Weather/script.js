const input = document.getElementById("city-input")
const search = document.getElementById("search-btn")
const cityName  =document.getElementById("city-name")
const temp = document.getElementById("temperature")
const feel = document.getElementById("feels-like")
const humidity  = document.getElementById("humidity")
const wind  = document.getElementById("wind-speed")
const pressure  = document.getElementById("pressure")

input.addEventListener('input',async ()=>{
  const city = input.value
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=8f1eb7f4053d403880c00453262101&q=${city}&aqi=no`)
  const data = await response.json()
  cityName.textContent = `${city}`
  temp.textContent = `${data.current.temp_c}`
  feel.textContent = `${data.current.condition.text}`
  humidity.textContent = `${data.current.humidity}`
  wind.textContent = `${data.current.wind_kph} km/h`
  pressure.textContent = `${data.current.pressure_mb} mb`
})

search.addEventListener('click',async ()=>{
  const city = input.value
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=8f1eb7f4053d403880c00453262101&q=${city}&aqi=no`)
  const data = await response.json()
  cityName.textContent = `${city}`
  temp.textContent = `${data.current.temp_c}`
  feel.textContent = `${data.current.condition.text}`
  humidity.textContent = `${data.current.humidity}`
  wind.textContent = `${data.current.wind_kph} km/h`
  pressure.textContent = `${data.current.pressure_mb} mb`
})