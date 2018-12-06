jQuery(document).ready(function($){
	function sched( el ) {
		this.el = el;
		this.items = this.el.find('.timeline').find('li');
		this.startTime = ts(this.items.eq(0).text());
		this.timeUnit = ts(this.items.eq(1).text()) - ts(this.items.eq(0).text());

		this.group = this.el.find('.events').find('.events-group');
		this.single = this.group.find('.single-event');
		this.boxHeight = this.group.eq(0).children('.top-info').outerHeight();
		
		var self = this;
		this.single.each(function(){
			var start = ts($(this).attr('data-start')), duration = ts($(this).attr('data-end')) - start;
			var eventTop = self.boxHeight * (start - self.startTime)/self.timeUnit
			var eventHeight = self.boxHeight * duration/self.timeUnit;
			$(this).css({
				top: (eventTop - 1) + 'px',
				height: (eventHeight + 1)+ 'px'
			});
		});

		// add time of class in the little class box
		this.single.each(function(){
			var durationLabel = '<span class="event-date">' + $(this).data('start') + ' - ' + $(this).data('end') + '</span>';
			$(this).children('a').prepend($(durationLabel));
		});
	}

	var schedules = $('.week');
	var objSchedulesPlan = [];

	if( schedules.length > 0 ) {
		schedules.each(function(){
			objSchedulesPlan.push(new sched($(this)));
		});
	}

	function ts(time) {
		time = time.replace(/ /g,'');
		var timeArray = time.split(':');
		return parseInt(timeArray[0]) * 60 + parseInt(timeArray[1]);
	}

	var screenHome = document.getElementById('screenHome');
	var screen4E03 = document.getElementById('screen4E03');
	var screen4HC3 = document.getElementById('screen4HC3');
	var screen3Y03 = document.getElementById('screen3Y03');
	var screen1Z03 = document.getElementById('screen1Z03');
	var screen4AA4 = document.getElementById('screen4AA4');

	var course4AA4 = document.getElementsByClassName('course4AA4');
	var course4E03 = document.getElementsByClassName('course4E03');
	var course4HC3 = document.getElementsByClassName('course4HC3');
	var course3Y03 = document.getElementsByClassName('course3Y03');
	var course1Z03 = document.getElementsByClassName('course1Z03');


	for (i = 0; i < course4AA4.length; i++){
		course4AA4[i].addEventListener('click', openEnrolled4AA4, false);
	}

	for (i = 0; i < course4E03.length; i++){
		course4E03[i].addEventListener('click', openEnrolled4E03, false);
	}

	for (i = 0; i < course4HC3.length; i++){
		course4HC3[i].addEventListener('click', openEnrolled4HC3, false);
	}

	for (i = 0; i < course3Y03.length; i++){
		course3Y03[i].addEventListener('click', openEnrolled3Y03, false);
	}

	for (i = 0; i < course1Z03.length; i++){
		course1Z03[i].addEventListener('click', openEnrolled1Z03, false);
	}

	var enrolled4AA4 = document.getElementById('enrolled4AA4');
	var enrolled4HC3 = document.getElementById('enrolled4HC3');
	var enrolled3Y03 = document.getElementById('enrolled3Y03');
	var enrolled1Z03 = document.getElementById('enrolled1Z03');
	var enrolled4E03 = document.getElementById('enrolled4E03');

	/*
	var tr4AA4 = document.getElementsByClassName('tr4AA4');
	var tr4HC3 = document.getElementsByClassName('tr4HC3');
	var tr3Y03 = document.getElementsByClassName('tr3Y03');
	var tr1Z03 = document.getElementsByClassName('tr1Z03');
	var tr4E03 = document.getElementsByClassName('tr4E03');
	*/

});

var courseID = '';

function run4HC3(){
	courseID = '4HC3';
	screenHome.style.display = 'none';
	screen4HC3.style.display = 'unset';
}

function run4AA4(){
	courseID = '4AA4';
	screenHome.style.display = 'none';
	screen4AA4.style.display = 'unset';
}

function run3Y03(){
	courseID = '3Y03';
	screenHome.style.display = 'none';
	screen3Y03.style.display = 'unset';
}

function run1Z03(){	
	courseID = '1Z03';
	screenHome.style.display = 'none';
	screen1Z03.style.display = 'unset';
}

function run4E03(){
	courseID = '4E03';
	screenHome.style.display = 'none';
	screen4E03.style.display = 'unset';
}

function cancelBtn(){
	screenHome.style.display = 'unset';
	screen4E03.style.display = 'none';
	screen4HC3.style.display = 'none';
	screen3Y03.style.display = 'none';
	screen1Z03.style.display = 'none';
	screen4AA4.style.display = 'none';
	enrolled4AA4.style.display = 'none';
	enrolled4HC3.style.display = 'none';
	enrolled1Z03.style.display = 'none';
	enrolled3Y03.style.display = 'none';
	enrolled4E03.style.display = 'none';
}

function enrollBtn(){
	var course = document.getElementsByClassName('course' + courseID);
	var tr = document.getElementsByClassName('tr' + courseID);
	for (i = 0; i < course.length; i++){
		course[i].style.visibility = 'visible';
	}
	for (i = 0; i < tr.length; i++){
		tr[i].style.visibility = 'collapse';
	}
	screenHome.style.display = 'unset';
	screen4E03.style.display = 'none';
	screen4HC3.style.display = 'none';
	screen3Y03.style.display = 'none';
	screen1Z03.style.display = 'none';
	screen4AA4.style.display = 'none';
}

var conflict4HC3 = false;
var conflict4E03 = false;

function enroll4E03(){
	// specifically for 4E03 as it has two lab choices
	var course = document.getElementsByClassName('course4E03');
	var tr = document.getElementsByClassName('tr4E03');

	var lab = document.getElementById('selectLab');
	var labData = lab.options[lab.selectedIndex].value;

	if (labData == "L01: 1:30pm - 4:30 Friday" && conflict4HC3 == true){
		// write the error here and let them know
		alert('Course Conflict: 4E03 conflicts with 4HC3 on Friday at 1:30');
	} else {

		if (labData == "L01: 1:30pm - 4:30 Friday"){
			course[1].style.visibility = 'visible';
			course[2].style.visibility = 'visible';
			course[3].style.visibility = 'visible';
			conflict4E03 = true;
		} else if (labData == "L02: 1:30pm - 4:30 Mon"){
			course[0].style.visibility = 'visible';
			course[1].style.visibility = 'visible';
			course[2].style.visibility = 'visible';
			conflict4E03 = false;
		}

		for (i = 0; i < tr.length; i++){
			tr[i].style.visibility = 'collapse';
		}
		screenHome.style.display = 'unset';
		screen4E03.style.display = 'none';
		screen4HC3.style.display = 'none';
		screen3Y03.style.display = 'none';
		screen1Z03.style.display = 'none';
		screen4AA4.style.display = 'none';
	}
}

function enroll4HC3(){
	// specifically for 4HC3 due to conflict
	var course = document.getElementsByClassName('course4HC3');
	var tr = document.getElementsByClassName('tr4HC3');

	if (conflict4E03 == true){
		// write the error here and let them know
		alert('Course Conflict: 4HC3 conflicts with 4E03 on Friday at 1:30');
	} else {

		conflict4HC3 = true;

		for(i = 0; i < course.length; i++){
			course[i].style.visibility = 'visible';
		}
		

		for (i = 0; i < tr.length; i++){
			tr[i].style.visibility = 'collapse';
		}
		screenHome.style.display = 'unset';
		screen4E03.style.display = 'none';
		screen4HC3.style.display = 'none';
		screen3Y03.style.display = 'none';
		screen1Z03.style.display = 'none';
		screen4AA4.style.display = 'none';
	}

	
}

//

function openEnrolled4AA4(){
	courseID = '4AA4';
	enrolled4AA4.style.display = 'unset';
	enrolled1Z03.style.display = 'none';
	enrolled4HC3.style.display = 'none';
	enrolled4E03.style.display = 'none';
	enrolled3Y03.style.display = 'none';
	screen4E03.style.display = 'none';
	screen4HC3.style.display = 'none';
	screen3Y03.style.display = 'none';
	screen1Z03.style.display = 'none';
	screen4AA4.style.display = 'none';
	screenHome.style.display = 'none';
}

function openEnrolled3Y03(){
	courseID = '3Y03';
	enrolled3Y03.style.display = 'unset';
	enrolled1Z03.style.display = 'none';
	enrolled4HC3.style.display = 'none';
	enrolled4E03.style.display = 'none';
	enrolled4AA4.style.display = 'none';
	screen4E03.style.display = 'none';
	screen4HC3.style.display = 'none';
	screen3Y03.style.display = 'none';
	screen1Z03.style.display = 'none';
	screen4AA4.style.display = 'none';
	screenHome.style.display = 'none';
}

function openEnrolled4E03(){
	courseID = '4E03';
	enrolled4E03.style.display = 'unset';
	enrolled1Z03.style.display = 'none';
	enrolled4HC3.style.display = 'none';
	enrolled3Y03.style.display = 'none';
	enrolled4AA4.style.display = 'none';
	screen4E03.style.display = 'none';
	screen4HC3.style.display = 'none';
	screen3Y03.style.display = 'none';
	screen1Z03.style.display = 'none';
	screen4AA4.style.display = 'none';
	screenHome.style.display = 'none';
}

function openEnrolled4HC3(){
	courseID = '4HC3';
	enrolled4HC3.style.display = 'unset';
	enrolled1Z03.style.display = 'none';
	enrolled4E03.style.display = 'none';
	enrolled3Y03.style.display = 'none';
	enrolled4AA4.style.display = 'none';
	screen4E03.style.display = 'none';
	screen4HC3.style.display = 'none';
	screen3Y03.style.display = 'none';
	screen1Z03.style.display = 'none';
	screen4AA4.style.display = 'none';
	screenHome.style.display = 'none';
}

function openEnrolled1Z03(){
	courseID = '1Z03';
	enrolled1Z03.style.display = 'unset';
	enrolled4HC3.style.display = 'none';
	enrolled4E03.style.display = 'none';
	enrolled3Y03.style.display = 'none';
	enrolled4AA4.style.display = 'none';
	screen4E03.style.display = 'none';
	screen4HC3.style.display = 'none';
	screen3Y03.style.display = 'none';
	screen1Z03.style.display = 'none';
	screen4AA4.style.display = 'none';
	screenHome.style.display = 'none';
}

function dropBtn(){
	var course = document.getElementsByClassName('course' + courseID);

	if (courseID == "4HC3"){
		conflict4HC3 = false;

	} else if (courseID == "4E03"){
		conflict4E03 = false;
	} 

	var tr = document.getElementsByClassName('tr' + courseID);
	for (i = 0; i < course.length; i++){
		course[i].style.visibility = 'hidden';
	}
	for (i = 0; i < tr.length; i++){
		tr[i].style.visibility = 'visible';
	}
	screenHome.style.display = 'unset';
	screen4E03.style.display = 'none';
	screen4HC3.style.display = 'none';
	screen3Y03.style.display = 'none';
	screen1Z03.style.display = 'none';
	screen4AA4.style.display = 'none';
	enrolled4AA4.style.display = 'none';
	enrolled4HC3.style.display = 'none';
	enrolled1Z03.style.display = 'none';
	enrolled3Y03.style.display = 'none';
	enrolled4E03.style.display = 'none';
}


//

courseID = '';

function swap4AA4(){

	// when 4aa4 is clicked
	var selected = document.getElementsByClassName('swap4AA4Row')[0];
	var confirmBtn = document.getElementsByClassName('confirmSwap')[0];

	if (selected.classList.contains('selectedSwap')){
		selected.classList.remove('selectedSwap');
		// hide confirm button
		confirmBtn.style.display = 'none';
	} else {
		selected.classList.add('selectedSwap');
		// show confirm button
		confirmBtn.style.display = 'unset';
	}
}

function confirmSwap(){
	var selected = document.getElementsByClassName('selectedSwap');
	var course = document.getElementsByClassName('course4AA4');
	for (i = 0; i < course.length; i++){
		course[i].style.visibility = 'visible';
	}
	var confirmBtn = document.getElementsByClassName('confirmSwap')[0];
	var selected = document.getElementsByClassName('swap4AA4Row')[0];
	var tr = document.getElementsByClassName('tr4AA4');
	for (i = 0; i < tr.length; i++){
		tr[i].style.visibility = 'collapse';
	}
	confirmBtn.style.display = 'none';

	selected.classList.remove('selectedSwap');
	


	// remove
	var courseRem = document.getElementsByClassName('course' + courseID);
	for (i = 0; i < courseRem.length; i++){
		courseRem[i].style.visibility = 'hidden';
	}
		
	var trAdd = document.getElementsByClassName('tr' + courseID);
	for (i = 0; i < trAdd.length; i++){
		trAdd[i].style.visibility = 'visible';
	}

	




	enrolled4AA4.style.display = 'none';
	enrolled4HC3.style.display = 'none';
	enrolled1Z03.style.display = 'none';
	enrolled3Y03.style.display = 'none';
	enrolled4E03.style.display = 'none';
	screenHome.style.display = 'unset';
}

function openSwap(course){
	// when swap modal is opened
	courseID = course;
}

function saveEditBtn(){
	var course = document.getElementsByClassName('course4E03');

	var lab = document.getElementById('selectLab2');
	var labData = lab.options[lab.selectedIndex].value;

	if (labData == "L01: 1:30pm - 4:30 Friday" && conflict4HC3 == true){
		// write the error here and let them know
		alert('Course Conflict: 4E03 conflicts with 4HC3 on Friday at 1:30');
	} else {

		if (labData == "L01: 1:30pm - 4:30 Friday"){
			course[0].style.visibility = 'hidden';
			course[1].style.visibility = 'visible';
			course[2].style.visibility = 'visible';
			course[3].style.visibility = 'visible';
			conflict4E03 = true;
		} else if (labData == "L02: 1:30pm - 4:30 Mon"){
			course[0].style.visibility = 'visible';
			course[1].style.visibility = 'visible';
			course[2].style.visibility = 'visible';
			course[3].style.visibility = 'hidden';
			conflict4E03 = false;
		}

		screenHome.style.display = 'unset';
		screen4E03.style.display = 'none';
		screen4HC3.style.display = 'none';
		screen3Y03.style.display = 'none';
		screen1Z03.style.display = 'none';
		screen4AA4.style.display = 'none';
		enrolled4AA4.style.display = 'none';
		enrolled4HC3.style.display = 'none';
		enrolled1Z03.style.display = 'none';
		enrolled3Y03.style.display = 'none';
		enrolled4E03.style.display = 'none';
	}
	
}
