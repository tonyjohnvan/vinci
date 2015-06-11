/**
 * Created by fanzhang on 5/25/15.
 */

// ranging from 0 to 62, active cells

/* - game board layout -
 0  1  2  3  4  5  6
 7  8  9  10 11 12 13
 14 15 16 17 18 19 20
 21 22 23 24 25 26 27
 28 29 30 31 32 33 34
 35 36 37 38 39 40 41
 42 43 44 45 46 47 48
 49 50 51 52 53 54 55
 56 57 58 59 60 61 62
 */
var levels = [
    {
        'stage': 1,
        'active': [24, 31, 30, 29, 36, 37, 38, 39, 40, 33],
        'startPos': '24'
    },

    {
        'stage': 1,
        'active': [42, 43, 50, 49],
        'startPos': '42'
    },
    {
        'stage': 2,
        'active': [7, 14, 15, 8, 1, 0],
        'startPos': '7'
    },
    {
        'stage': 3,
        'active': [7, 8, 9, 10, 3, 2, 1, 0],
        'startPos': '7'
    },
    {
        'stage': 4,
        'active': [16, 15, 22, 21, 14, 7, 8, 1, 0],
        'startPos': '16'
    },
    {
        'stage': 5,
        'active': [23, 22, 15, 14, 21, 28, 35, 36, 37, 30, 29],
        'startPos': '23'
    },
    {
        'stage': 6,
        'active': [39, 32, 31, 30, 29, 36, 35, 42, 43, 50, 49],
        'startPos': '39'
    },
    {
        'stage': 7,
        'active': [44, 51, 52, 45, 38, 39, 40, 47, 54, 53, 46],
        'startPos': '44'
    },
    {
        'stage': 8,
        'active': [3, 10, 17, 18, 25, 26, 27, 20, 19, 12, 5, 4, 11],
        'startPos': '3'
    },
    {
        'stage': 9,
        'active': [2, 9, 10, 17, 18, 11, 12, 19, 20, 13, 6, 5, 4, 3],
        'startPos': '2'
    },
    {
        'stage': 10,
        'active': [32, 25, 26, 33, 34, 27, 20, 13, 6, 5, 12, 11, 18, 19],
        'startPos': '32'
    },
    {
        'stage': 11,
        'active': [6, 13, 20, 27, 34, 41, 48, 47, 40, 39, 32, 25, 26, 33],
        'startPos': '6'
    },
    {
        'stage': 12,
        'active': [17, 24, 31, 30, 37, 36, 43, 44, 51, 52, 53, 54, 47, 48, 55],
        'startPos': '17'
    },
    {
        'stage': 13,
        'active': [42, 35, 36, 29, 28, 21, 22, 23, 16, 17, 24, 31, 38, 37, 30],
        'startPos': '42'
    },
    {
        'stage': 14,
        'active': [39, 46, 53, 54, 55, 48, 47, 40, 33, 26, 27, 20, 19, 12, 5, 6, 13],
        'startPos': '39'
    },
    {
        'stage': 15,
        'active': [30, 37, 44, 43, 42, 35, 36, 29, 28, 21, 14, 15, 16, 17, 24, 23, 22],
        'startPos': '30'
    },
    {
        'stage': 16,
        'active': [33, 32, 39, 46, 45, 38, 37, 30, 23, 16, 9, 2, 1, 8, 15, 14, 7, 0],
        'startPos': '33'
    },
    {
        'stage': 17,
        'active': [8, 1, 0, 7, 14, 21, 28, 35, 42, 49, 50, 43, 36, 37, 30, 23, 22, 29],
        'startPos': '8'
    },
    {
        'stage': 18,
        'active': [1, 0, 7, 8, 15, 16, 9, 10, 17, 18, 11, 12, 19, 20, 13, 6, 5, 4, 3, 2],
        'startPos': '1'
    },
    {
        'stage': 19,
        'active': [14, 7, 8, 15, 22, 23, 30, 37, 44, 51, 50, 49, 42, 43, 36, 35, 28, 21],
        'startPos': '14'
    },
    {
        'stage': 20,
        'active': [40, 47, 46, 39, 32, 31, 30, 29, 22, 21, 14, 7, 8, 15, 16, 17, 24, 23],
        'startPos': '40'
    },
    {
        'stage': 21,
        'active': [15, 8, 1, 2, 3, 4, 5, 6, 13, 12, 19, 26, 25, 24, 17, 16, 9, 10, 11, 18],
        'startPos': '15'
    },
    {
        'stage': 22,
        'active': [5, 4, 3, 10, 17, 18, 11, 12, 19, 26, 25, 24, 31, 38, 39, 40, 33, 34, 27, 20, 13, 6],
        'startPos': '5'
    },
    {
        'stage': 23,
        'active': [36, 43, 44, 45, 46, 39, 38, 37, 30, 23, 22, 29, 28, 21, 14, 7, 8, 1, 0],
        'startPos': '36'
    },
    {
        'stage': 24,
        'active': [6, 13, 12, 11, 4, 3, 2, 1, 0, 7, 14, 15, 22, 21, 28, 29, 30, 31, 24, 17, 10, 9, 16, 23],
        'startPos': '6'
    },
    {
        'stage': 25,
        'active': [12, 19, 26, 27, 20, 13, 6, 5, 4, 11, 10, 17, 24, 31, 38, 39, 40, 47, 54, 53, 52, 45, 46],
        'startPos': '12'
    },
    {
        'stage': 26,
        'active': [30, 23, 22, 15, 16, 9, 2, 3, 10, 11, 4, 5, 12, 13, 20, 19, 18, 25, 32, 39, 38, 31, 24, 17],
        'startPos': '30'
    },
    {
        'stage': 27,
        'active': [36, 43, 44, 45, 46, 39, 38, 37, 30, 23, 22, 29, 28, 21, 14, 7, 8, 1, 0],
        'startPos': '36'
    },
    {
        'stage': 28,
        'active': [36, 43, 44, 45, 46, 39, 38, 37, 30, 23, 22, 29, 28, 21, 14, 7, 8, 1, 0],
        'startPos': '36'
    },
    {
        'stage': 29,
        'active': [38, 37, 30, 23, 16, 15, 8, 1, 2, 9, 10, 11, 18, 19, 20, 27, 34, 41, 48, 47, 40, 33, 26, 25, 24, 17],
        'startPos': '38'
    },
    {
        'stage': 30,
        'active': [19, 26, 25, 32, 31, 30, 37, 38, 39, 40, 41, 48, 47, 46, 45, 52, 53, 54, 55],
        'startPos': '19'
    },
    {
        'stage': 31,
        'active': [42, 35, 28, 21, 22, 29, 30, 37, 36, 43, 44, 51, 52, 45, 38, 39, 40, 41, 34, 33, 26, 19, 20, 13, 12, 5, 6],
        'startPos': '42'
    },
    {
        'stage': 32,
        'active': [53, 52, 51, 44, 43, 36, 37, 38, 39, 40, 33, 34, 41, 48, 55, 54, 47, 46, 45],
        'startPos': '53'
    },
    {
        'stage': 33,
        'active': [44, 37, 38, 31, 30, 29, 22, 21, 14, 15, 8, 1, 2, 3, 10, 11, 4, 5, 12, 19, 18, 25, 32, 33, 26, 27, 20, 13, 6],
        'startPos': '44'
    },
    {
        'stage': 34,
        'active': [17, 16, 23, 30, 29, 22, 21, 14, 7, 8, 9, 10, 11, 12, 19, 26, 33, 40, 41, 34, 27, 20, 13, 6, 5, 4, 3, 2, 1, 0],
        'startPos': '17'
    },
    {
        'stage': 35,
        'active': [4, 5, 12, 13, 20, 27, 34, 33, 26, 19, 18, 25, 24, 17, 16, 23, 22, 29, 28, 21, 14, 15, 8, 9, 10, 3, 2, 1, 0, 7],
        'startPos': '4'
    },
    {
        'stage': 36,
        'active': [53, 54, 47, 46, 45, 38, 31, 24, 17, 16, 15, 22, 21, 28, 35, 42, 43, 50, 49],
        'startPos': '53'
    },
    {
        'stage': 37,
        'active': [9, 10, 17, 24, 23, 30, 31, 38, 39, 46, 45, 52, 53, 54, 47, 48, 41, 34, 33, 26, 27, 20, 13, 6, 5, 4, 11, 18, 25, 32],
        'startPos': '9'
    },
    {
        'stage': 38,
        'active': [41, 40, 33, 32, 31, 38, 39, 46, 45, 44, 37, 36, 35, 28, 21, 22, 15, 8, 7, 14],
        'startPos': '41'
    },
    {
        'stage': 39,
        'active': [11, 10, 17, 18, 25, 26, 33, 32, 31, 38, 37, 36, 43, 42, 35, 28, 21, 22, 23, 24],
        'startPos': '11'
    },
    {
        'stage': 40,
        'active': [52, 45, 38, 31, 24, 17, 16, 15, 22, 23, 30, 37, 44, 51, 50, 43, 36, 35, 42, 49],
        'startPos': '52'
    },
    {
        'stage': 41,
        'active': [20, 27, 26, 25, 24, 31, 38, 39, 46, 45, 44, 51, 52, 53, 54, 47, 48, 41, 40, 33, 32],
        'startPos': '20'
    },
    {
        'stage': 42,
        'active': [34, 27, 26, 25, 24, 23, 30, 37, 44, 51, 52, 53, 54, 55, 48, 41, 40, 33, 32, 39, 38, 31],
        'startPos': '34'
    },
    {
        'stage': 43,
        'active': [23, 24, 25, 26, 33, 34, 27, 20, 13, 12, 5, 4, 11, 10, 9, 2, 1, 8, 7, 14, 15, 16, 17, 18, 19],
        'startPos': '23'
    },
    {
        'stage': 44,
        'active': [13, 6, 5, 12, 11, 4, 3, 2, 1, 0, 7, 14, 21, 28, 29, 22, 23, 24, 31, 30, 37, 36, 35, 42, 43, 50, 49],
        'startPos': '13'
    },
    {
        'stage': 45,
        'active': [55, 54, 53, 46, 39, 38, 45, 52, 51, 44, 37, 36, 29, 30, 23, 16, 15, 22, 21, 14, 7, 8, 1, 2, 3, 10, 9],
        'startPos': '55'
    },
    {
        'stage': 46,
        'active': [8, 7, 14, 21, 22, 29, 30, 31, 32, 33, 26, 19, 20, 27, 34, 41, 48, 47, 46, 45, 44, 51, 52, 53, 54, 55],
        'startPos': '8'
    },
    {
        'stage': 47,
        'active': [29, 36, 43, 42, 35, 28, 21, 14, 7, 0, 1, 8, 9, 16, 17, 24, 31, 30, 37, 44, 45, 38, 39, 40, 41, 34, 33, 32, 25, 26, 27, 20, 19, 12, 13, 6, 5, 4, 11, 18],
        'startPos': '29'
    },
    {
        'stage': 48,
        'active': [16, 17, 10, 3, 2, 1, 0, 7, 14, 21, 28, 29, 36, 43, 42, 49, 50, 51, 52, 45, 46, 39, 32, 33, 40, 47, 54, 53],
        'startPos': '16'
    },
    {
        'stage': 49,
        'active': [17, 24, 25, 32, 31, 30, 23, 22, 29, 28, 21, 14, 15, 16, 9, 2, 3, 10, 11, 18, 19, 26, 27, 20, 13, 6, 5, 12],
        'startPos': '17'
    },
    {
        'stage': 50,
        'active': [17, 18, 25, 24, 23, 16, 15, 22, 29, 30, 37, 38, 39, 46, 45, 52, 51, 50, 49, 42, 35, 28, 21, 14, 7, 8, 1, 0],
        'startPos': '17'
    },
    {
        'stage': 51,
        'active': [9,10,11,12,13,20,18,17,16,23,24,25,26,32,33],
        'startPos': '32'
    },
    {
        'stage': 52,
        'active': [50,43,36,37,44,51,52,45,38,39,40],
        'startPos': '50'
    },
    {
        'stage': 53,
        'active': [31,32,33,30,29,24,25,26,23,37,38,22],
        'startPos': '31'
    },
    {
        'stage': 54,
        'active': [15,16,17,25,24,23,30,29,36,37,38,31,32],
        'startPos': '23'
    },
    {
        'stage': 55,
        'active': [51,44,37,30,23,24,31,38,45,52,53,54,47,40,33,39],
        'startPos': '51'
    }
];

var currentLevel = 0;

var timeUsed;

var startTime;

function setGameBoard(level) {

    startTime = new Date();

    $('.game-container').css({
        'background': 'url(assets/img/color' + Math.round(levels[currentLevel].stage / 9 + 1) + '.png) no-repeat center center',
        'background-size': 'auto 100% '
    });
    var cells = $('.gameboard').children();

    for (var actIn in level.active) {
        $(cells[level.active[actIn]]).attr('status', 'open').css({
            'opacity': '1'
        });
    }

    $(cells[level.startPos]).attr('status', 'active').css({
        'background': 'url(assets/img/activeTile' + Math.round(levels[currentLevel].stage / 9 + 1) + '.png) no-repeat center center',
        'background-size': '45px auto'
    })

}

function updateBoard(cell) {
    var cells = $('.gamespace[status]');
    for (var ind = 0; ind < cells.length; ind++) {
        if ($(cells[ind]).attr('status') == 'passed') {
            $(cells[ind]).css({
                'background': 'url(assets/img/Tile.png) no-repeat center center',
                'background-size': '45px auto'
            })
        } else if ($(cells[ind]).attr('status') == 'active') {
            $(cells[ind]).css({
                'background': 'url(assets/img/activeTile' + Math.round(levels[currentLevel].stage / 9 + 1) + '.png) no-repeat center center',
                'background-size': '45px auto'
            })
        }
    }
}

function resetGamePad() {
    $('.gamespace').css({
        'background': 'url(assets/img/cell.png) no-repeat center center',
        'background-size': '50px 50px',
        'opacity':0
    }).removeAttr('status');
    var cells = $('.gameboard').children();
    $(cells[levels[currentLevel].startPos]).attr('status', 'active').css({
        'background': 'url(assets/img/activeTile' + Math.round(levels[currentLevel].stage / 9 + 1) + '.png) no-repeat center center',
        'background-size': '45px auto'
    });
}

function canMove(cell) {
    return ( (cell.attr('status') == 'open'
        || cell.attr('status') == 'active')
        && checkAround(cell) );
}

function checkAround(cell) {
    var cells = $('.gameboard').children();
    return (
        //check left
        ($(cells[parseInt(cell.attr("id")) - 1]).attr('status') == 'active')
        //check right
        || ($(cells[parseInt(cell.attr("id")) + 1]).attr('status') == 'active')
        //check up
        || ($(cells[parseInt(cell.attr("id")) - 7]).attr('status') == 'active')
        //check down
        || ($(cells[parseInt(cell.attr("id")) + 7]).attr('status') == 'active')
        //check self
//        || ($(cells[parseInt(cell.attr("id"))]).attr('status') == 'active')
        )
}

function checkIfWin(){
    return ($('.gamespace[status="open"]').length==0)
}