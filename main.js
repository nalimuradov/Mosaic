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
	console.log(screen4AA4);

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
}

function enrollBtn(){
	var course = document.getElementsByClassName('course' + courseID);
	for (i = 0; i < course.length; i++){
		course[i].style.visibility = 'visible';
	}
	screenHome.style.display = 'unset';
	screen4E03.style.display = 'none';
	screen4HC3.style.display = 'none';
	screen3Y03.style.display = 'none';
	screen1Z03.style.display = 'none';
	screen4AA4.style.display = 'none';
}