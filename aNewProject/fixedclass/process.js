const fp = require('./finalpacket')

class Process {
    constructor() {
console.log('i am consts')
    }
    ticketoperation(getEvent) {
        let mArray = ['executeA','executeB','executeC'];
        mArray.forEach(function(value){
            //console.log(value);
            fp.finalp(value)
          })
    }
}
module.exports = Process