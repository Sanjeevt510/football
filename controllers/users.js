'use strict'

module.exports = function() {

return {
    SetRouting : function(router){
        router.get('/',function(req,res){
            res.render('index',{test:'this is for the testin from the user module'});
        });
    }
}

}