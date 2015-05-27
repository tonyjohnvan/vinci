/**
 * Created by fanzhang on 5/25/15.
 */
$(function(){

    document.body.addEventListener('touchmove', function (event) {
        event.preventDefault();
    }, false);


//    $('.gamespace').on('swipe mouseover touchmove touchstart',function(e){
//    $('.gamespace').on(' touchmove',function(e){
//        console.log($(e.target).attr('id'));
//        var cell = $(e.target);
//        if(canMove(cell)){
//            // make a move
//            $('.gamespace[status="active"]').attr('status','passed');
//            cell.attr('status','active');
//            updateBoard(cell);
//            if (checkIfWin()){
//                // Win Animation
//                var endTime = new Date();
//                timeUsed = (endTime - startTime)/1000;
//
//                //next level show
//                $('.gameboard').removeClass('animated zoomIn').addClass('animated zoomOut');
//                $('.timeUsed').html(timeUsed+'s');
//                setTimeout(function(){
//                    $('.gameboard').hide();
//                    $('.nextLevel').removeClass('animated zoomOut').show().addClass('animated zoomIn');
//                },500);
//            }
//        }
//    });

    $(".gamespace").bind("touchmove", function(evt){
        var touch = evt.originalEvent.touches[0];
        highlightHoveredObject(touch.clientX, touch.clientY);
    });

    $('.undoBtn').on('touchstart', function (e) {
        startLevel();
    });

    startLevel();

//    $('body').on('click',function(){
//        startLevel()
//    });


    $('.continueGame').on('touchstart',function(){

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


function highlightHoveredObject(x, y) {
    $('.gamespace').each(function() {
        // check if is inside boundaries
        if (!(
            x <= $(this).offset().left || x >= $(this).offset().left + $(this).outerWidth() ||
            y <= $(this).offset().top  || y >= $(this).offset().top + $(this).outerHeight()
            )) {

//            $('.gamespace').removeClass('green');
            var cell = $(this);
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
        }
    });
}