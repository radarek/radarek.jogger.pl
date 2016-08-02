/*
autor: Radoslaw Bulat
*/

var IRBConsole = function(location_id) {
	this.initialize(location_id);
};

IRBConsole.prototype = {
	close_popup: function(event) {
		this.toggle();
		return false;
	},
	
	initialize: function(location_id) {
		this.applet_loaded = false;
		this.location_id = location_id;
		this.location = $(location_id);
		this.applet_container = $('.irb-console-applet', this.location);
		$('.close-popup', this.location).click(this.close_popup.bind_as_event_listener(this));
	},
	
	check_if_loaded: function() {
		if (!this.applet_loaded) {
			this.__load_applet();
			this.applet_loaded = true;
		}		
	},
	
	is_visible: function() {
		return this.location.is(':visible');
	},
	
	toggle: function() {
		this.location.toggle();
		if (this.is_visible()) {
			this.check_if_loaded();
		}
	},
	
	__load_applet: function() {
		this.applet_container.empty();
		html_string = '<applet code="org.jruby.demo.IRBApplet" archive="http://ds5.agh.edu.pl/~radarek/ruby/jruby/jruby-console-0.9.2.jar" class="jruby-applet" width="800" height="500"></applet>';
		//html_string = '';
		this.applet_container.html(html_string);
	}
};

var irb_console = null;

function popup() {
	irb_console.toggle();
}

$(document).ready(function() {
	irb_console = new IRBConsole('#jruby-irb-console');
});