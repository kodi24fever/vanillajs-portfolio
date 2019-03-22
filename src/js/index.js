import $ from "jquery";
import 'bootstrap';
import '../style/index.scss';
import './testing.js';

window.onload = function(){
	
    console.log('Made by Frank Izquierdo - A Passionate Full-Stack Web Developer!');
    
    window.addEventListener("scroll", updateYPosition, false);
    window.addEventListener("resize", updateYPosition, false);
    
    navEffect();
    updateYPosition();
    selectModal(marineButton, marineModal);
    selectModal(aguaButton, aguaModal);
    selectModal(todoButton, todoModal);
    animateHTML().init();
    whenUserScroll().init();
    
};

//VARIABLE CONTAINING ALL ANIMATIONS 
var animateHTML = function() {
	var leftElems;
	var rightElems;
	var botElems;
	var barElems;
	var bar60Elems;
	var bar90Elems;
	var windowHeight;
//USE THIS TO INITIALIZE ALL FUNCTIONS IN THIS SCOPE
function init() {
	leftElems = document.querySelectorAll('.hidden');
	rightElems = document.querySelectorAll('.hiddenRight');
	botElems = document.querySelectorAll('.hiddenBot');
	barElems = document.querySelectorAll('.fill-80-bar');
	bar60Elems = document.querySelectorAll('.fill-60-bar');
	bar90Elems = document.querySelectorAll('.fill-90-bar');
	windowHeight = window.innerHeight;
	addEventHandlers();
	
}

function addEventHandlers() {
	/*ADDING EVENT LISTENER FOR FADE IN ANIMATIONS*/
	window.addEventListener('scroll', function(){ checkAnyPosition(leftElems, 'hidden', 'slideLeft'); });
	window.addEventListener('scroll', function(){ checkAnyPosition(rightElems, 'hiddenRight', 'slideRight'); });
	window.addEventListener('scroll', function(){ checkAnyPosition(botElems, 'hiddenBot', 'slideBot'); });
	/*ADDING EVENT LISTENERS FOR FILLING BAR ANIMATIONS*/
	window.addEventListener('scroll',function(){ fillingAllBars(barElems, '80'); });
	window.addEventListener('scroll',function(){ fillingAllBars(bar60Elems, '60'); });
	window.addEventListener('scroll',function(){ fillingAllBars(bar90Elems, '90'); });
	window.addEventListener('resize', init);
	
}

/***********STARTS FADE IN ANIMATIONS******************/	  
function checkAnyPosition(elem, fromPos, toPos) {
	for (var i = 0; i < elem.length; i++) {
		var positionFromTop = elem[i].getBoundingClientRect().top;
		if (positionFromTop - windowHeight <= 0) {
			elem[i].className = elem[i].className.replace(
				fromPos,
				toPos
			);
		}
	}
}
/**************Starts FILLING BARS SECTION*******************/
function fillingAllBars(elem, size) {
	for (var i = 0; i < elem.length; i++) {
		var positionFromTop = elem[i].getBoundingClientRect().top;
		if (positionFromTop - windowHeight <= 0) {
			elem[i].className = elem[i].className.replace(
				'fill-'+size+'-bar',
				'filed-'+size+'-bar'
				);
		}
	}
}
return {
	init: init
	};
};


//NAV FADE_TOP_TO_BOTTOM EFFECT
function navEffect() {
        window.addEventListener("scroll", function(){
        var navBar = document.getElementById('navbar');
        var domRect = navBar.getBoundingClientRect();
        var myBackground = document.getElementById('my-background');
        var domBGRect = myBackground.getBoundingClientRect();
        
        if(domRect.y <= -domRect.height){
            navBar.classList.add('fade-in-nav');
        }
        if(-domBGRect.height < domBGRect.top){
            navBar.classList.remove('fade-in-nav');
        }
    });
    
}

function updateYPosition(elem) {
	var yScroll = window.pageYOffset;
	//console.log(yScroll);
	
	return elem;
}

//*****************************************************Working below this line
var whenUserScroll = function () {
	//DECLARING GLOBAL VARIABLES 
	var topButton;
	var toHome;
	var toAbout;
	var toProjects;
	var toContact;
	
	var aboutHeader;
	var projectsHeight;
	var contactHeight;
	
	function init(){
		topButton = document.getElementById('4');
		toHome = document.getElementById('0');
		toAbout = document.getElementById('1');
		toProjects = document.getElementById('2');
		toContact = document.getElementById('3');
		
		aboutHeader = updateYPosition(document.getElementById('about'));
		projectsHeight = updateYPosition(document.getElementById('projects'));
		contactHeight = updateYPosition(document.getElementById('contact'));
		
		addActionsOnClick();
	}
	//ADDING EVENT HANDLERS TO SCROLLING FUNCTION
	function addActionsOnClick() {
		scrollToGivenPos(toHome, 0);
		scrollToGivenPos(topButton, aboutHeader.offsetTop - 115);
		scrollToGivenPos(toAbout, aboutHeader.offsetTop - 115);
		scrollToGivenPos(toProjects, projectsHeight.offsetTop - 100);
		scrollToGivenPos(toContact, contactHeight.offsetTop);
	}
	//SCROLLING FUNCTION
	function scrollToGivenPos(button, toPos ) {
		button.addEventListener('click', function(){
			window.scroll({
				top: toPos,
				left: 0,
				behavior: "smooth"
			});
		});
	}
	return {
	init: init
	};
};

//CREATING MODAL GALLERY WHEN BUTTON CLICKED
var modalBG = document.getElementById('gallery-card');
var marineModal = document.getElementById('vmarine');
var aguaModal = document.getElementById('agualuz');
var todoModal = document.getElementById('todolist');
var closeAction = document.getElementsByClassName('close-icon');
	//selecting buttons
var marineButton = document.getElementById('vmarine-button');
var aguaButton = document.getElementById('agua-button');
var todoButton = document.getElementById('todo-button');



//CLOSE STYLE SELECTOR FOR MODALS FUNCTION
function selectModal(button, modalElem){
	button.addEventListener('click', () => {
		modalBG.style.display = "block";
		modalElem.style.display = "block";
	});
}

//LOOP TO CLOSE MODALS
for (var i = 0; i < closeAction.length; i++){
	closeAction[i].addEventListener('click', function() {
		modalBG.style.display = "none";
		marineModal.style.display = "none";
		aguaModal.style.display = "none";
		todoModal.style.display = "none";
	});
}

	

