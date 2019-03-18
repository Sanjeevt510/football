
var operation    = require('./operation.js');
module.exports =  {
    
filterEventBasedRouting:function(asteriskEvent) {
    console.log(asteriskEvent);
     operation.filterMethod(asteriskEvent);
    
}

}