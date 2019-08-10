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

    var specialleft = $('.special-arrow-left');
    var specialright = $('.special-arrow-right');
    var specialList = $('.special-list');
 

    var currentLeftValue = 0,
    	jobValue = 0,
    	litiratureValue = 0,
    	gadjetValue = 0,
    	foodValue = 0,
    	specialValue = 0,
    	animate = 400;
 
    leftUIEl.click(function() {
        currentLeftValue += 236;
        elementsList.animate({ left : currentLeftValue + "px"}, animate);
    });
 
    rightUIEl.click(function() {
        currentLeftValue -= 236;
        elementsList.animate({ left : currentLeftValue + "px"}, animate);
    });

    jobleft.click(function() {
        jobValue += 236;
        jobList.animate({ left : jobValue + "px"}, animate);
    });
 
    jobright.click(function() {
        jobValue -= 236;
        jobList.animate({ left : jobValue + "px"}, animate);
    });

    litiratureleft.click(function() {
        litiratureValue += 236;
        litiratureList.animate({ left : litiratureValue + "px"}, animate);
    });
 
    litiratureright.click(function() {
        litiratureValue -= 236;
        litiratureList.animate({ left : litiratureValue + "px"}, animate);
    });

    gadjetleft.click(function() {
        gadjetValue += 236;
        gadjetList.animate({ left : gadjetValue + "px"}, animate);
    });
 
    gadjetright.click(function() {
        gadjetValue -= 236;
        gadjetList.animate({ left : gadjetValue + "px"}, animate);
    });

    foodleft.click(function() {
        foodValue += 236;
        foodList.animate({ left : foodValue + "px"}, animate);
    });
 
    foodright.click(function() {
        foodValue -= 236;
        foodList.animate({ left : foodValue + "px"}, animate);
    });

    specialleft.click(function() {
        specialValue += 236;
        specialList.animate({ left : specialValue + "px"}, animate);
    });
 
    specialright.click(function() {
        specialValue -= 236;
        specialList.animate({ left : specialValue + "px"}, animate);
    });
 
});