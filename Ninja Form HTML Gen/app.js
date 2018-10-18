// New Angular Module
var formApp = angular.module('yourAngularApp', [])

//// Global VALUES ////

// Speech Test Words/options
/* ///// global variable example 
.value('answerStrings', ['Bean', 'Chalk', 'Goose', 'Kite', 'Moon', 'Page', 'Puff', 'Shout', 'Take']);
*/

/* ///// controller example
.controller('someController', ['$scope', function($scope) {
  var test = this;

}]);
*/

.controller('testController', [function(){
    var test = this;

    test.testHtml = '';

    var resultsObj = {
        cta_text: '',
        cta_url: '',
        bgNoiseIncrease: 0.05,
        globalVolume: 0.2,
        quizScore: 1,
        quizPerfectScore: 4,
        quizAns: ['restaurant', 'television', 'donuts'],
        quizCompleted: false,
        toneScore: 2,
        tonePerfectScore: 5,
        toneAns: [1000, 2000, 3000],
        toneCompleted: false,
        speechScore: 1,
        speechPerfectScore: 12,
        speechAns: ['bean', 'moon', 'puff', 'hush', 'mush'],
        speechCompleted: false,
        // email section
        email_CTA: 'Email CTA',
        email_OfferDisplay: 'block',
        email_Offer: '$500 off stuff',
        email_Btn_Text: 'Btn Text',
        email_Btn_URL: 'https://www.google.com',
        testComplete: function(someString){
            return this[(someString + 'Completed')];
        },
        restartTest: function(){

            console.log('running restart test');
            // 1. reset Quiz

            this.quizScore = 0;
            this.quizAns = [];
            this.quizCompleted = false;

            // 2. reset Tone

            this.toneScore = 0;
            this.toneAns = [];
            this.toneCompleted = false;

            // 3. reset speech

            this.speechScore = 0;
            this.speechAns = [];
            this.speechCompleted = false;

            // 4. Stop audio
            var idArray = ['#volumeAudio', '#toneAudio', '#bgNoise'];

            idArray.forEach(function(cur){
                console.log(cur);
                console.log(document.querySelector(cur));
                if(document.querySelector(cur) !== null){
                    document.querySelector(cur).autoplay = false;
                    document.querySelector(cur).currentTime = 0;
                    document.querySelector(cur).loop = false;
                    document.querySelector(cur).pause();}
                else {
                    console.log(cur + ' query came back as null');
                }
            });


        }
    }

    test.styleNum;

    test.className = 'normal';
    compileHTML();


    function compileHTML(){

        //// listening environment
        // section color
        var quizColor = '#008aab';

        // listening percent
        var quizPercent = (100 - (100 * (resultsObj.quizScore/resultsObj.quizPerfectScore)));

        quizPercent = Math.round(quizPercent);



        // listening section head
        var quizSection_Head = genEmailSection_Head(quizPercent, 'Listening Environments', 'Environments you may struggle to hear in:', quizColor);


        // listening wrong ans
        var quizSection_Bullets = wrongAns_to_bullets(resultsObj.quizAns, quizColor);

        //// tone test
        // section color
        var toneColor = '#707070';

        // tone percent
        var tonePercent = (100 - (100 * (resultsObj.toneScore/resultsObj.tonePerfectScore)));

        tonePercent = Math.round(tonePercent);

        // listening section head
        var toneSection_Head = genEmailSection_Head(tonePercent, 'Frequency Range', 'Tones you struggled to hear:', toneColor);

        // tone wrong ans
        var toneSection_Bullets = wrongAns_to_bullets(resultsObj.toneAns, toneColor);

        //// speech test
        var speechColor = '#532d6d';
        // speech percent
        var speechPercent = (100 - (100 * (resultsObj.speechScore/resultsObj.speechPerfectScore)));

        speechPercent = Math.round(speechPercent);

        // speech section head
        var speechSection_Head = genEmailSection_Head(speechPercent, 'Speech-in-noise', 'Words you may struggle to hear:', speechColor);

        // speech wrong ans
        var speechSection_Bullets = wrongAns_to_bullets(resultsObj.speechAns, speechColor);

        // email CTA


        // email Offer

        // Email Button text

        // email button url

        var ctaSection = genEmailSection_CTA(resultsObj.email_CTA, resultsObj.email_OfferDisplay, resultsObj.email_Offer, resultsObj.email_Btn_URL, resultsObj.email_Btn_Text);

        var htmlOutput = '<div style="padding: 20px;"><h3 style="font-size: 30px;">Your AGX Hearing Quiz Results</h3>';

        // quiz section 
        htmlOutput += quizSection_Head;
        htmlOutput += quizSection_Bullets;

        // tone section
        htmlOutput += toneSection_Head;
        htmlOutput += toneSection_Bullets;

        // speech section
        htmlOutput += speechSection_Head;
        htmlOutput += speechSection_Bullets;

        // cta section
        htmlOutput += ctaSection;



        test.testHtml += htmlOutput;

    }

    function genEmailSection_Head(percent, title, whatMissed, sectionColor){

        var returnHTML = '<div style="margin-bottom: -20px;"><h4 style="display: inline-block;margin-left: 10px; font-size: 22px;"><span style="display: inline-block; width: 85px; height: 85px; border: 3px solid ' + sectionColor + '; border-radius: 1000px; "><span style="vertical-align: middle; font-size: 30px; text-align:center;display:block;margin-top: 22px; color: ' + sectionColor + '">' + percent + '%</span></span>&nbsp;' + title + '</h4></div><div style="padding-left: 105px;"><p><strong>' + whatMissed + '</strong></p><hr style="border: solid 1px ' + sectionColor + ';"></div>';

        return returnHTML;

    }

    function genEmailSection_Bullet(bullet, sectionColor){



        var returnHTML = '<div style="padding-left: 105px; margin-top: 8px;"><span style="display: inline-block; width: 15px; height: 15px; background-color: ' + sectionColor + '; border-radius: 1000px; vertical-align: middle; font-size: 30px; text-align:center; margin-right: 10px;">&nbsp;</span><span style="font-size: 16px; line-height: 13px;">' + bullet + '</span></div>';

        return returnHTML;

    }

    function genEmailSection_CTA(cta, offerDisplay, offer, buttonURL, buttonCta){
        var returnHTML = '<h4 style="display: block; margin-top: 20px; font-size:18px ;">' + cta + '</h4><div style="display: ' + offerDisplay + '; margin-top: 20px; border: 2px dashed #008aab; padding: 30px; text-align: center; font-size: 20px; max-width: 600px;">' + offer + '</div><a style="display: block; text-align: center; padding: 15px; background-color: #532d6d; color: #fff; font-size: 20px; margin-top: 20px; text-decoration: none; max-width: 600px;" href="' + buttonURL + '">' + buttonCta + '</a></div></div>';

        return returnHTML;
    }

    function wrongAns_to_bullets(ansArray, sectionColor){
        var returnHTML_bullets = '';
        console.log(ansArray);
        ansArray.forEach(function(cur){

            var tempReturn = genEmailSection_Bullet(cur, sectionColor);
            returnHTML_bullets += tempReturn;

        });

        return returnHTML_bullets;

    }
    test.changeClass = function(className){
        console.log(className);
        test.className = className;



    }


}]);