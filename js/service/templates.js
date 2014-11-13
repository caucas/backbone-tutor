var Templates = {};
(function($) {
	var templates = {};
	$(function init() {
		$('[type="html/template"]').each(function(i, e) {
			templates[e.id] = $.get(e.getAttribute('path') + '/' + e.id);
		});
	});
	Templates.get = function(id) {
		if (id in templates) {
			return templates[id];
		} else {
			throw 'Template with id="' + id + '" does not exist';
		}
	}
})(jQuery);