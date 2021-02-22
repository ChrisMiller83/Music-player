document.addEventListener('DOMContentLoaded', () => {
  console.log("About page loaded")
})

const submitButton = document.getElementById("button")

submitButton.addEventListener("click", e => {
  e.preventDefault();
  var city = document.getElementById("cityInput").value;
  let stateCode = document.getElementById("stateCode").value
  const apiKey = "005e85f3c7af09f9f5de7c66228bf44f";
  console.log(stateCode)
  console.log(city)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${stateCode}&appid=${apiKey}`;
  console.log(url)


  fetch(url)
  .then(response => response.json())
  .then(data => {
    // do stuff with the data
    let weatherIcon = data.weather[0].icon
    let description = data.weather[0].description
    let temp = ((data.main.temp - 273.15) * (9/5) + 32)
    temp = Math.round(temp)
    console.log(temp)

    var d = new Date()
    h = (d.getHours()<10?'0':'') + d.getHours()
    m = (d.getMinutes()<10?'0':'') + d.getMinutes()
    currentTime = h + ':' + m;
    let wind = data.wind.speed
    let humidity = data.main.humidity
    var iconURL = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
    document.getElementById("icon").innerHTML = `
    <div class="row justify-content-center">
        <div class="col-12 col-md- col-sm-12 col-xs-12 w-100">
            <div class="card p-4 col-8">
                <div class="d-flex">
                    <h6 class="flex-grow-1">${city}</h6>
                    <h6>${currentTime}</h6>
                </div>
                <div class="d-flex flex-column temp mt-5 mb-3">
                    <h1 class="mb-0 font-weight-bold" id="heading"> ${temp}° F </h1> <span class="small grey">${description}</span>
                </div>
                <div class="d-flex">
                    <div class="temp-details flex-grow-1">
                        <p class="my-1"> <img src="https://i.imgur.com/B9kqOzp.png" style = "height: 40px"><span>${wind} mph</span></p>
                        <p class="my-1"> <img src="./Images/humidity-symbol.png" style = "height: 40px" alt=""> <span> ${humidity}% </span> </p>
                    </div>
                    <div> <img src=${iconURL} width="100px"> </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `
  })
  .catch((e) => {
    console.log(e)
    alert("Please search for a valid city")
  });


});