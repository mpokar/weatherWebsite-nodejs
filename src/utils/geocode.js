const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoibWl0ZXNocG9rYXIiLCJhIjoiY2s5NDdvaWQxMDhwNDNtbzExb2h5dGI5ZSJ9.fbd-OCHhoSjOlgnyBbOvIQ&limit=1'

    request({url, json: true}, (error, {body}=[]) =>{

        if(error){
            callback('Unable to connect to giocoding serivce', undefined)

        }else if(body.features == ''){
            callback('No matching result found', undefined)

        }else {
            callback(undefined, {
                longitude : body.features[0].center[0],
                latitude : body.features[0].center[1],
                location : body.features[0].place_name
            })
           
        }
      

  })

}

module.exports = geocode