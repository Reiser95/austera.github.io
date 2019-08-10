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
 

    var currentLeftValue = 0,
    	jobValue = 0,
    	litiratureValue = 0,
    	gadjetValue = 0,
    	foodValue = 0;
 
    leftUIEl.click(function() {
        currentLeftValue += 236;
        elementsList.animate({ left : currentLeftValue + "px"}, 500);
    });
 
    rightUIEl.click(function() {
        currentLeftValue -= 236;
        elementsList.animate({ left : currentLeftValue + "px"}, 500);
    });

    jobleft.click(function() {
        jobValue += 236;
        jobList.animate({ left : jobValue + "px"}, 500);
    });
 
    jobright.click(function() {
        jobValue -= 236;
        jobList.animate({ left : jobValue + "px"}, 500);
    });

    litiratureleft.click(function() {
        litiratureValue += 236;
        litiratureList.animate({ left : litiratureValue + "px"}, 500);
    });
 
    litiratureright.click(function() {
        litiratureValue -= 236;
        litiratureList.animate({ left : litiratureValue + "px"}, 500);
    });

    gadjetleft.click(function() {
        gadjetValue += 236;
        gadjetList.animate({ left : gadjetValue + "px"}, 500);
    });
 
    gadjetright.click(function() {
        gadjetValue -= 236;
        gadjetList.animate({ left : gadjetValue + "px"}, 500);
    });

    foodleft.click(function() {
        foodValue += 236;
        foodList.animate({ left : foodValue + "px"}, 500);
    });
 
    foodright.click(function() {
        foodValue -= 236;
        foodList.animate({ left : foodValue + "px"}, 500);
    });
 
});