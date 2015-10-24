var _  = require('underscore');

// pixel collision detection
//
//
//  coord like { x0, x1, y0, y1}

/**
 *
 * @param a
 * @param a.x0
 * @param a.x1
 * @param a.y0
 * @param a.y1
 * @param b
 * @param b.x0
 * @param b.x1
 * @param b.y0
 * @param b.y1
 * @returns {boolean}
 */
exports.isIntersectedOuter = function(a, b){
    return !(
        (a.x1 < b.x0)
        ||
        (a.y1 < b.y0)
        ||
        (b.x1 < a.x0)
        ||
        (b.y1 < a.y0)
    );
};

/**
 *
 * @param a
 * @param b
 * @param a.x0
 * @param a.x1
 * @param a.y0
 * @param a.y1
 * @param b.x0
 * @param b.x1
 * @param b.y0
 * @param b.y1
 * @returns {boolean|*}
 */
exports.isIntersectedInner = function(a,b){
    return (
      ( ( b.x0 > a.x0 ) && ( b.x0 < a.x1 ) && ( b.y0 > a.y0 ) && ( b.y0 < a.y1 ) )
      || ( ( a.x0 > b.x0 ) && ( a.x0 < b.x1 ) && (a.y0 > b.y0 ) && ( a.y0 < b.y1 ) )
      || ( ( b.x1 > a.x0 ) && ( b.x1 < a.x1 ) && ( b.y1 > a.y0 ) && ( b.y1 < a.y1 ) )
      || ( ( a.x1 > b.x0 ) && ( a.x1 < b.x1 ) && (a.y1 > b.y0 ) && ( a.y1 < b.y1 ) )
    )
};

/**
 *
 * @param a
 * @param b
 * @param a.x0
 * @param a.x1
 * @param a.y0
 * @param a.y1
 * @param b.x0
 * @param b.x1
 * @param b.y0
 * @param b.y1
 * @returns {boolean|*}
 */
exports.isIntersectedInner1 = function(a,b){
    return (
      ( ( b.x0 >= a.x0 ) && ( b.x0 <= a.x1 ) && ( b.y0 >= a.y0 ) && ( b.y0 <= a.y1 ) )
      || ( ( a.x0 >= b.x0 ) && ( a.x0 <= b.x1 ) && (a.y0 >= b.y0 ) && ( a.y0 <= b.y1 ) )
      || ( ( b.x1 >= a.x0 ) && ( b.x1 <= a.x1 ) && ( b.y1 >= a.y0 ) && ( b.y1 <= a.y1 ) )
      || ( ( a.x1 >= b.x0 ) && ( a.x1 <= b.x1 ) && (a.y1 >= b.y0 ) && ( a.y1 <= b.y1 ) )
    )
};


/**
 *
 * @param a
 * @param b
 * @param a.x0
 * @param a.x1
 * @param a.y0
 * @param a.y1
 * @param b.x0
 * @param b.x1
 * @param b.y0
 * @param b.y1
 * @returns {boolean|*}
 */
exports.isIntersectedSet = function(a,b){
    /**
     *
     * @param b
     * @param b.x0
     * @param b.x1
     * @param b.y0
     * @param b.y1
     *
     */
    var boxToSet = function(b){
        var set = [];
        for (var x = b.x0; x <= b.x1; x += 1){
            for (var y = b.y0; y <= b.y1; y += 1){
                set.push(x*1000 + y);
            }
        }
        return set;
    };

    var intersection = _.intersection(boxToSet(a), boxToSet(b));
    return intersection.length > 0 ;
};






