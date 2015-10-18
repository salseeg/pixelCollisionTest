/**
 * Created by salseeg on 18.10.15.
 */


var collision = require('./collision.js');

var generateBox = function(){
    var box = {};

    box.x0 = Math.min( Math.floor(Math.random() * 45), 40);
    box.x1 = Math.min( Math.floor(Math.random() * 25) + box.x0, 50);
    
    box.y0 = Math.min( Math.floor(Math.random() * 45), 40);
    box.y1 = Math.min( Math.floor(Math.random() * 15) + box.y0, 50);

    return box;
};

console.log('initialized');

for (var i=0 ; i < 1; i += 1){
    var str = '';
    for (var j=0 ; j < 50; j += 1){
        var a = generateBox();
        var b = generateBox();

        var innerRes = collision.isIntersectedInner(a, b);
        var outerRes = collision.isIntersectedOuter(a, b);

        str += (innerRes == outerRes)? '+' : '-';
        if (innerRes != outerRes){
            console.log({a: a, b: b, inner: innerRes, outer: outerRes});
        }
    }
    console.log(str);
}
