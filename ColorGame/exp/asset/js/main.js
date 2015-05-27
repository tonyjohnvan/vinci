/*!
 Theme Name: TheONE
 Theme URI: http://themeforest.net/user/Pooyaa/portfolio
 Author: Pooyaa
 Author URI: http://themeforest.net/user/Pooyaa
 Description: TheONE coming soon page
 */
var $ = jQuery.noConflict();
jQuery(function ($) {
    "use strict";
    //origami
    $(".origami.dark").each(function () {
        var container = document.getElementById('origami');
        var renderer = new FSS.CanvasRenderer();
        var scene = new FSS.Scene();
        var light = new FSS.Light('#111122', '#4b3e7e');
        var geometry = new FSS.Plane(1920, 980, 25, 14);
        var material = new FSS.Material('#FFFFFF', '#FFFFFF');
        var mesh = new FSS.Mesh(geometry, material);
        var now, start = Date.now();

        function initialise() {
            scene.add(mesh);
            scene.add(light);
            container.appendChild(renderer.element);
            window.addEventListener('resize', resize);
        }

        function resize() {
            renderer.setSize(container.offsetWidth, container.offsetHeight);
        }

        function animate() {
            now = Date.now() - start;
            light.setPosition(300 * Math.sin(now * 0.001), 200 * Math.cos(now * 0.0005), 60);
            renderer.render(scene);
            requestAnimationFrame(animate);
        }

        initialise();
        resize();
        animate();
    });


});