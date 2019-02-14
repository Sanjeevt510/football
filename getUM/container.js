const dependable = require('dependable');
const path = require('path');
const container = dependable.container();

const simpleDependices = [
    ['_', 'lodash']
];

simpleDependices.forEach( (val) => {
    container.register(val[0], function()  {
        return require(val[1]);
    });
});
container.load(path.join(__dirname,'controllers'));
container.load(path.join(__dirname,'helper'));

container.register('container',function(){
    return container;
});
module.exports = container;