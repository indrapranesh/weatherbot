/**
  *
  * main() will be run when you invoke this action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */

 let rp = require('request-promise')

 function main(params) {
     const options = {
         method : 'POST',
         uri: "https://dry-dawn-36234.herokuapp.com",
         body:params,
         json: true
     }
     return rp(options)
     .then(res => {
         return { response: res }
     })
 }

