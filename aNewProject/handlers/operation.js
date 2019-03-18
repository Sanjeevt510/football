
const  lowerCase = require('lower-case');
const Process =  require('./../fixedclass/process.js')
module.exports = {
    
    filterMethod: function (getEvent) {
        let methodnameGet = lowerCase(getEvent.methodname);
        pp = new Process();    
        if (methodnameGet === "ticketoperation") {
          
            console.log('inside the if methods');
            
            pp.ticketoperation()

        }else
        console.log('inside the else method')

    }
}