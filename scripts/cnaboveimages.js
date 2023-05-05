/* globals jQuery, $, waitForKeyElements */
// ==UserScript==
// @name         Controlnet-AboveResults
// @version      1
// @description  Example script to move an HTML element with jQuery
// @match        *://127.0.0.1:*
// @grant        none
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @run-at   document-start
// @sandbox JavaScript
// ==/UserScript==


(function() {
    'use strict';

    $(window).on('load', function() {
        // move controlnet in txt2img-tab
        var cnt2i = $('#txt2img_controlnet');
        var txt2img_res = $('#txt2img_gallery_container');
        cnt2i.insertBefore(txt2img_res);

        // move controlnet in img2img-tab
        var cni2i = $('#img2img_controlnet');
        var img2img_res = $('#img2img_gallery_container');
        cni2i.insertBefore(img2img_res);

    });

})();