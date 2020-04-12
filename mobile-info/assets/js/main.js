(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
     // -- start work -- //
     var cricle = document.getElementById("cricle");
     var upBtn = document.getElementById("upBtn");
     var downBtn = document.getElementById("downBtn");


     var rotateValue = cricle.style.transform;
     var rotateSum;

     upBtn.onclick = function(){
        rotateSum = rotateValue + "rotate(-90deg)";
        cricle.style.transform = rotateSum;
        rotateValue = rotateSum;
     }
     downBtn.onclick = function(){
        rotateSum = rotateValue + "rotate(90deg)";
        cricle.style.transform = rotateSum;
        rotateValue = rotateSum;
     }


     // -- End work -- //
            
    });

   jQuery(window).load(function(){

   });

}(jQuery));	