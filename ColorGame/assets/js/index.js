/**
 * Created by fanzhang on 5/25/15.
 */
$(function(){
    $('.gamespace').on('mouseover',function(e){
//        console.log(e.target)
        var cell = $(e.target);
        cell.css({
            'background': 'url(assets/img/Tile.png) no-repeat center center',
            'background-size': '45px auto'
        })
    });
    $('body').on('click',function(){
        resetGamePad();
    })

    //setting up game
    setGameBoard(levels[0]);
});

function resetGamePad(){
    $('.gamespace').css({
        'background': 'url(assets/img/cell.png) no-repeat center center',
        'background-size': '50px 50px'
    })
}