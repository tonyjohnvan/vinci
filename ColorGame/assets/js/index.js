/**
 * Created by fanzhang on 5/25/15.
 */
$(function(){
    var startTime = new Date();

    $('.gamespace').on('mouseover',function(e){
//        console.log(e.target);
        var cell = $(e.target);
        if(canMove(cell)){
            // make a move
            $('.gamespace[status="active"]').attr('status','passed');
            cell.attr('status','active');
            updateBoard(cell);
            if (checkIfWin()){
                // Win Animation
                var endTime = new Date();
                timeUsed = (endTime - startTime)/1000;

                //next level show
                $('.gameboard').removeClass('animated zoomIn').addClass('animated zoomOut');
                $('.timeUsed').html(timeUsed+'s');
                setTimeout(function(){
                    $('.gameboard').hide();
                    $('.nextLevel').removeClass('animated zoomOut').show().addClass('animated zoomIn');
                },500);
            }
        }
    });

    startLevel();

    $('body').on('click',function(){
        startLevel()
    });


    $('.continueGame').on('click',function(){

        //next level show
        $('.nextLevel').removeClass('animated zoomIn').addClass('animated zoomOut');
        setTimeout(function(){
            $('.nextLevel').hide();
            $('.gameboard').removeClass('animated zoomOut').show().addClass('animated zoomIn');
        },500);
        setTimeout(function(){
            startTime = new Date();
        },500);
        currentLevel++;
        startLevel();
    });
});

function startLevel() {
    resetGamePad();
    setGameBoard(levels[currentLevel]);
}