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

courseToSwap = '';

function swap(course){
	var selected = document.getElementsByClassName('swap' + course + 'Row');
	console.log(selected);
}

function confirmSwap(){
	var selected = document.getElementsByClassName('selectedSwap');
	console.log(selected);
}

function openSwap(){
	courseToSwap = course;
	console.log(courseToSwap);
}