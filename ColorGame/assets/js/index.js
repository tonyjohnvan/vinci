/**
 * Created by fanzhang on 5/25/15.
 */
var $ = jQuery.noConflict();
jQuery(function ($) {
    "use strict";
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

    $(".startGameBtn").on('tap click', function () {
        $("#splashScreen").addClass("animated fadeOutUpBig");
        setTimeout(function () {
            $('.game-container').show().addClass("animated fadeInDownBig")
        }, 500);
        setTimeout(function () {
            $(".helperHand").fadeIn(800);
        }, 2000);
    });

    $(".gamespace").bind("touchmove", function (evt) {
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


    $('.continueGame').on('touchstart', function () {

        //next level show
        $('.nextLevel').removeClass('animated zoomIn').addClass('animated zoomOut');
        setTimeout(function () {
            $('.nextLevel').hide();
            $('.gameboard').removeClass('animated zoomOut').show().addClass('animated zoomIn');
        }, 500);
        setTimeout(function () {
            startTime = new Date();
        }, 500);
        currentLevel++;
        startLevel();
    });


    //bg animation
//    $(".bganim.dark").each(function () {
//        var container = document.getElementById('bganim');
//        var renderer = new FSS.CanvasRenderer();
//        var scene = new FSS.Scene();
//        var light = new FSS.Light('#111122', '#4b3e7e');
//        var geometry = new FSS.Plane(1920, 980, 25, 14);
//        var material = new FSS.Material('#FFFFFF', '#FFFFFF');
//        var mesh = new FSS.Mesh(geometry, material);
//        var now, start = Date.now();
//
//        function initialise() {
//            scene.add(mesh);
//            scene.add(light);
//            container.appendChild(renderer.element);
//            window.addEventListener('resize', resize);
//        }
//
//        function resize() {
//            renderer.setSize(container.offsetWidth, container.offsetHeight);
//        }
//
//        function animate() {
//            now = Date.now() - start;
//            light.setPosition(300 * Math.sin(now * 0.001), 200 * Math.cos(now * 0.0005), 60);
//            renderer.render(scene);
//            requestAnimationFrame(animate);
//        }
//
//        initialise();
//        resize();
//        animate();
//    });
});

function startLevel() {
    resetGamePad();
    setGameBoard(levels[currentLevel]);
}


function highlightHoveredObject(x, y) {
    $('.gamespace').each(function () {
        // check if is inside boundaries
        if (!(
            x <= $(this).offset().left || x >= $(this).offset().left + $(this).outerWidth() ||
            y <= $(this).offset().top || y >= $(this).offset().top + $(this).outerHeight()
            )) {

//            $('.gamespace').removeClass('green');
            var cell = $(this);
            if (canMove(cell)) {
                // make a move
                $('.gamespace[status="active"]').attr('status', 'passed');
                cell.attr('status', 'active');
                updateBoard(cell);
                if (checkIfWin()) {
                    // Win Animation
                    var endTime = new Date();
                    timeUsed = (endTime - startTime) / 1000;


                    $(".helperHand").fadeOut(400);

                    //next level show
                    $('.gameboard').removeClass('animated zoomIn').addClass('animated zoomOut');
                    $('.timeUsed').html(timeUsed + 's');
                    setTimeout(function () {
                        $('.gameboard').hide();
                        $('.nextLevel').removeClass('animated zoomOut').show().addClass('animated zoomIn');
                    }, 500);
                }
            }
        }
    });
}