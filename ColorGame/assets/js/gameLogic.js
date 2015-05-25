/**
 * Created by fanzhang on 5/25/15.
 */

// ranging from 0 to 62, active cells

/* - game board layout -
 0  1  2  3  4  5  6  7
 8  9 10 11 12 13 14 15
 16 17 18 19 20 21 22 23
 24 25 26 27 28 29 30 31
 32 33 34 35 36 37 38 39
 40 41 42 43 44 45 46 47
 48 49 50 51 52 53 54 55
 56 57 58 59 60 61 62 63
 */
var levels = [
    {
        'stage': 0,
        'active': [27, 35, 34, 42, 43, 44, 36, 28, 29, 30]
    },
];

var currentLevel = 0;

function setGameBoard(level) {
    var cells = $('.gameboard').children();

    for (var actIn in level.active) {
        $(cells[level.active[actIn-1]]).css({
            'opacity':'1'
        })
    }
}