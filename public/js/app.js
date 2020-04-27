const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const today = new Date()

const date = today.getDate()
const month = monthsArray[today.getMonth()];

weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault()

const location = search.value
   //Production server heroku api call address
    const url = '/weather?address='+ location

	date.textContent = ''
    fetch(url).then((response) =>{
    response.json().then((data) =>{
        if(data.count === '0'){
            //return console.log(data.error)
            return console.log ("No data found for desierd location")
		}
		fcity.textContent = data.list[0].name
		fdate.textContent = date
		fmonth.textContent = month
		ftemp.textContent = data.list[0].main.temp
		frain.textContent = data.list[0].wind.rain
		fwind.textContent = data.list[0].wind.speed
		fpressure.textContent = data.list[0].main.pressure
		fhumidity.textContent = data.list[0].main.humidity
		ftemp_min.textContent = data.list[0].main.temp_min
		ftemp_max.textContent = data.list[0].main.temp_max
		console.log(data.list[0].name)
    })

})


})