/**
 * Created by salseeg on 18.10.15.
 */


var collision = require('./collision.js');

var showErrors = false;

var generateBox = function(){
    var box = {};

    box.x0 = Math.min( Math.floor(Math.random() * 45), 40);
    box.x1 = Math.min( Math.floor(Math.random() * 25) + box.x0, 50);
    
    box.y0 = Math.min( Math.floor(Math.random() * 45), 40);
    box.y1 = Math.min( Math.floor(Math.random() * 15) + box.y0, 50);

    return box;
};

console.log('initialized');

for (var i=0 ; i < 100; i += 1){
    var str = '';
    for (var j=0 ; j < 100; j += 1){
        var a = generateBox();
        var b = generateBox();

        var innerRes = collision.isIntersectedInner(a, b);
        var innerRes1 = collision.isIntersectedInner1(a, b);
        var outerRes = collision.isIntersectedOuter(a, b);
        var setRes = collision.isIntersectedSet(a,b);

        var char = '.';

        if (setRes != outerRes){
            char = 'O';
            showErrors && console.log({a: a, b: b, outer: outerRes, set: setRes});
        }
        if (setRes != innerRes){
            char = 'i';
            showErrors && console.log({a: a, b: b, inner: innerRes, set: setRes});
        }
        if (setRes != innerRes1){
            char = '1';
            showErrors && console.log({a: a, b: b, inner1: innerRes1, set: setRes});
        }
        str += char;

        //str += (innerRes == outerRes)? '+' : '-';
        //if (innerRes != outerRes){

        //}
    }
    console.log(str);

}
