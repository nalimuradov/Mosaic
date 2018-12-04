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
});