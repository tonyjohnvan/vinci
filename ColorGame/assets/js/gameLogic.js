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
        'stage': 2,
        'active': [9,10,11,12,13,20,18,17,16,23,24,25,26,32,33],
        'startPos': '32'
    },
    {
        'stage': 3,
        'active': [50,43,36,37,44,51,52,45,38,39,40],
        'startPos': '50'
    },
    {
        'stage': 4,
        'active': [31,32,33,30,29,24,25,26,23,37,38,22],
        'startPos': '31'
    },
    {
        'stage': 5,
        'active': [15,16,17,25,24,23,30,29,36,37,38,31,32],
        'startPos': '23'
    },
    {
        'stage': 6,
        'active': [51,44,37,30,23,24,31,38,45,52,53,54,47,40,33,39],
        'startPos': '51'
    }
];

var currentLevel = 0;

var timeUsed;

function setGameBoard(level) {

    $('.game-container').css({
        'background': 'url(assets/img/color' + levels[currentLevel].stage + '.png) no-repeat center center',
        'background-size': 'auto 100% '
    });
    var cells = $('.gameboard').children();

    for (var actIn in level.active) {
        $(cells[level.active[actIn]]).attr('status', 'open').css({
            'opacity': '1'
        });
    }

    $(cells[level.startPos]).attr('status', 'active').css({
        'background': 'url(assets/img/activeTile' + levels[currentLevel].stage + '.png) no-repeat center center',
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
                'background': 'url(assets/img/activeTile' + levels[currentLevel].stage + '.png) no-repeat center center',
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
        'background': 'url(assets/img/activeTile' + levels[currentLevel].stage + '.png) no-repeat center center',
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



//image preloader
var images = new Array();
function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i]
    }
}
preload(
    "assets/img/color1.png",
    "assets/img/color2.png",
    "assets/img/color3.png",
    "assets/img/color4.png",
    "assets/img/color5.png",
    "assets/img/color6.png"
);