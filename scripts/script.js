var containerElement = $('.container');
var refAboutElement = $('#ref-about');
var refSkillsElement = $('#ref-skills');
var refEducationElement = $('#ref-education');
var refContactElement = $('#ref-contact');
var svgContainer=[];
var activeLink = null;
var links = [refAboutElement, refSkillsElement, refEducationElement, refContactElement];
$('div','.coding').each(function(){
      svgContainer.push($(this).attr('id')); 
    });


function showAbout(targetContainer){
    var typewriter=require('typewriter');
    targetContainer.show();
    _removeCaret=$('.caret');
    _addCaret=$('<span class="caret">&nbsp;</span>')
    _removeCaret.remove();
    var _targetContainer=targetContainer[0];
    var _tw=new typewriter(_targetContainer)
            .withAccuracy(90)
            .withMinimumSpeed(5)
            .withMaximumSpeed(20)
            .build();
    _addCaret.insertAfter("#"+targetContainer[0].id);
    _tw.clear()
        .type('Hello!')
        .wait(3000)
        .clear()
        .type('I am a 20 year old aspiring front-end developer. I like to play video games and design awesome websites like this one :D')
        .wait(2000)
        .clear()
        .type('I am fluent in English, know some French and I started learning German.');


}

function showSkills(targetContainer) {
    var _coding=$('div.coding');
    var typewriter=require('typewriter')
    targetContainer.show();
    var i=0;
    var j=0;
    svgContainer.forEach(function(svgContainer){
         $("#"+svgContainer).empty();
     });
    var _tw=new typewriter(_coding.children().get(j))
            .withAccuracy(90)
            .withMinimumSpeed(5)
            .withMaximumSpeed(10)
            .build();
    _tw.clear()
    .put(' ')
    .type('HTML');
    j=j+2;
    var html = new ProgressBar.Circle('#'+svgContainer[i], {
               color: '#00FF00',
               strokeWidth: 3,
               trailWidth: 1,
               duration: 1500,
               text: {
                   value: '0'
               },
               step: function (state, bar) {
                   bar.setText((bar.value() * 100).toFixed(0));
               }
           });
    
    html.animate(0.8);
    i++;

    _tw=new typewriter(_coding.children().get(j))
            .withAccuracy(90)
            .withMinimumSpeed(5)
            .withMaximumSpeed(10)
            .build();
    _tw.clear()
    .put(' ')
    .type('CSS');
    j=j+2;
    var css = new ProgressBar.Circle('#'+svgContainer[i], {
               color: '#00FF00',
               strokeWidth: 3,
               trailWidth: 1,
               duration: 1500,
               text: {
                   value: '0'
               },
               step: function (state, bar) {
                   bar.setText((bar.value() * 100).toFixed(0));
               }
           });
    
    css.animate(0.7);
    i++;
    _tw=new typewriter(_coding.children().get(j))
            .withAccuracy(90)
            .withMinimumSpeed(5)
            .withMaximumSpeed(10)
            .build();
    _tw.clear()
    .put(' ')
    .type('C/C++');
    j=j+2;
    var c = new ProgressBar.Circle('#'+svgContainer[i], {
               color: '#00FF00',
               strokeWidth: 3,
               trailWidth: 1,
               duration: 1500,
               text: {
                   value: '0'
               },
               step: function (state, bar) {
                   bar.setText((bar.value() * 100).toFixed(0));
               }
           });
    
    c.animate(0.85);
    i++;
    _tw=new typewriter(_coding.children().get(j))
            .withAccuracy(90)
            .withMinimumSpeed(5)
            .withMaximumSpeed(10)
            .build();
    _tw.clear()
    .put(' ')
    .type('Javascript');
    j=j+2;
           var js = new ProgressBar.Circle('#'+svgContainer[i], {
               color: '#00FF00',
               strokeWidth: 3,
               trailWidth: 1,
               duration: 1500,
               text: {
                   value: '0'
               },
               step: function (state, bar) {
                   bar.setText((bar.value() * 100).toFixed(0));
               }
           });
    
    js.animate(0.75);
    i++;
    _tw=new typewriter(_coding.children().get(j))
            .withAccuracy(90)
            .withMinimumSpeed(5)
            .withMaximumSpeed(10)
            .build();
    _tw.clear()
    .put(' ')
    .type('Python');
    j=j+2;
    var py = new ProgressBar.Circle('#'+svgContainer[i], {
               color: '#00FF00',
               strokeWidth: 3,
               trailWidth: 1,
               duration: 1500,
               text: {
                   value: '0'
               },
               step: function (state, bar) {
                   bar.setText((bar.value() * 100).toFixed(0));
               }
           });
    
     py.animate(0.78);
     i++;
}
   

function showEducation(targetContainer) {
    targetContainer.show();
    var typewriter=require('typewriter');
     var _tw=new typewriter($('#uni')[0])
            .withAccuracy(90)
            .withMinimumSpeed(5)
            .withMaximumSpeed(25)
            .build();
    _tw.clear()
       .type('2014-present')
       .put('<br>')
       .type('Academy of Economic Studies')
       .put('<br>')
       .type('Faculty of Economic Cybernetics, Statistics and Informatics');

    _tw=new typewriter($('#hs')[0])
            .withAccuracy(90)
            .withMinimumSpeed(5)
            .withMaximumSpeed(25)
            .build();
    _tw.clear()
       .type('2010-2014')
       .put('<br>')
       .type('"Vladimir Streinu" National College Gaesti')
       .put('<br>')
       .type('Mathematics-Informatics');

}
function showContact(targetContainer) {
    targetContainer.show();
    var typewriter=require('typewriter');
     var _tw=new typewriter($('#phone')[0])
            .withAccuracy(90)
            .withMinimumSpeed(5)
            .withMaximumSpeed(10)
            .build();
    _tw.clear()
       .type('+40765900479');

    _tw=new typewriter($('#email')[0])
            .withAccuracy(90)
            .withMinimumSpeed(5)
            .withMaximumSpeed(10)
            .build();
    _tw.clear()
       .type('eduard.florin.predescu@gmail.com');


    _tw=new typewriter($('#fb')[0])
            .withAccuracy(90)
            .withMinimumSpeed(5)
            .withMaximumSpeed(10)
            .build();
    _tw.clear()
       .type('Eduard Florin Predescu');
}

function showInitialize(){
    $('.container').show();
    $('#init').siblings().hide();
    var typewriter=require('typewriter');
     var _tw=new typewriter($('#init')[0])
            .withAccuracy(100)
            .withMinimumSpeed(5)
            .withMaximumSpeed(10)
            .build();
         
         _tw.clear()
            .put('&nbsp;')
            .type('Initializing AwesomeWebsiteOS v0.8...')
            .wait(2000)
            .clear()
            .put('&nbsp;')
            .type('Welcome!')
            .wait(2000);
            .clear()
}

$(document).ready(function () {
    showInitialize();
    links.forEach(function (link) {
        link.on("click", function () {
            var _container = $('.container');

            if (activeLink == link) {
                _container.stop().hide();
                activeLink = null;
                return;
            }

            activeLink = link;

            var _target = link[0].id.split('ref-')[1];
            var _targetContainer = $('#' + _target);

            _container.show();
            _targetContainer
                .stop()
                .siblings()
                .hide();

            switch (_target) {
                case 'about':
                    showAbout(_targetContainer);
                    break;
                case 'skills':
                    showSkills(_targetContainer);
                    break;
                case 'education':
                    showEducation(_targetContainer);
                    break;
                case 'contact':
                    showContact(_targetContainer);
                    break;
                default:
                    showAbout(_targetContainer);
                    break;
            }
        });
    });
});