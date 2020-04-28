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
	err.textContent = ''
	ftemp.textContent = ''
	frain.textContent = ''
	fwind.textContent = ''
	fpressure.textContent = ''
	fhumidity.textContent = ''
	ftemp_min.textContent = ''
	ftemp_max.textContent = ''
	fcity.textContent = ''
    fetch(url).then((response) =>{
    response.json().then((data) =>{
		//console.log(data)
		//console.log(data.list.length)
        if(data.list.length === 0){
			err.textContent = 'No data found for your location'
		} else{
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
		}
		
    })

})


})