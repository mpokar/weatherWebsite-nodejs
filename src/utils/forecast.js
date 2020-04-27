const request = require('request')  

const forecast = (address, callback) =>{

    const url = 'https://api.openweathermap.org/data/2.5/find?q='+ address +'&appid=00b029e1976263ac665d25e2ee6a0685&units=metric'
    request({url, json: true}, (error, {body}) => {
        if (error){
          callback('Unable to connect to weather serivce', undefined)
        }else if(body.count = 0){
          callback('No matching result found', undefined)
  
        }else {   
          callback(undefined,body)
          }
    })
}

module.exports = forecast