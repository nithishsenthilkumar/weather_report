var apikey  = 'd3c1450b0f021a1473e7810e627bd664';
const button = document.querySelector('#submit');

button.onclick = ()=>{
  getdata();
}
function getdata(){
    var city = document.getElementById("city").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    fetch(url)
    .then(response =>response.json())
    .then(data =>{
        console.log(data)
        document.getElementById("p1").innerHTML = "Temperature : " + data.main.temp;
    })
    fetch(url)
    .then(response => response.json())
    .then(data1 => {
      console.log(data1)
      document.getElementById("p2").innerHTML = "Maximum temperature : " + data1.main.temp_max;
    })
    fetch(url)
    .then(response => response.json())
    .then(data2 => {
      console.log(data2)
      document.getElementById("p3").innerHTML = "Speed of wind : " + data2.wind.speed;
    })
    fetch(url)
    .then(response => response.json())
    .then(data3 => {
      console.log(data3)
      document.getElementById("p4").innerHTML = "Degree of wind blow : " + data3.wind.deg;
    })
}