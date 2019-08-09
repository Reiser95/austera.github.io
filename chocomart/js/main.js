$(document).ready(function() {
    var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');

    var jobleft = $('.job-arrow-left');
    var jobright = $('.job-arrow-right');
    var jobList = $('.job-list');

    var litiratureleft = $('.litirature-arrow-left');
    var litiratureright = $('.litirature-arrow-right');
    var litiratureList = $('.litirature-list');

    var gadjetleft = $('.gadjet-arrow-left');
    var gadjetright = $('.gadjet-arrow-right');
    var gadjetList = $('.gadjet-list');

    var foodleft = $('.food-arrow-left');
    var foodright = $('.food-arrow-right');
    var foodList = $('.food-list');
 
    var pixelsOffset = 236;
    var currentLeftValue = 0;
 
    leftUIEl.click(function() {
        currentLeftValue += 236;
        elementsList.animate({ left : currentLeftValue + "px"}, 500);
    });
 
    rightUIEl.click(function() {
        currentLeftValue -= 236;
        elementsList.animate({ left : currentLeftValue + "px"}, 500);
    });

    jobleft.click(function() {
        currentLeftValue += 236;
        jobList.animate({ left : currentLeftValue + "px"}, 500);
    });
 
    jobright.click(function() {
        currentLeftValue -= 236;
        jobList.animate({ left : currentLeftValue + "px"}, 500);
    });

    litiratureleft.click(function() {
        currentLeftValue += 236;
        litiratureList.animate({ left : currentLeftValue + "px"}, 500);
    });
 
    litiratureright.click(function() {
        currentLeftValue -= 236;
        litiratureList.animate({ left : currentLeftValue + "px"}, 500);
    });

    gadjetleft.click(function() {
        currentLeftValue += 236;
        gadjetList.animate({ left : currentLeftValue + "px"}, 500);
    });
 
    gadjetright.click(function() {
        currentLeftValue -= 236;
        gadjetList.animate({ left : currentLeftValue + "px"}, 500);
    });

    foodleft.click(function() {
        currentLeftValue += 236;
        foodList.animate({ left : currentLeftValue + "px"}, 500);
    });
 
    foodright.click(function() {
        currentLeftValue -= 236;
        foodList.animate({ left : currentLeftValue + "px"}, 500);
    });
 
});