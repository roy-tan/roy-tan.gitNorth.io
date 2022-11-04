	/*Place your JavaScript here to run when the page is fully displayed*/
	jQuery('#ytbg').remove();
	jQuery('body#SurveyEngineBody div#SkinContent').removeClass('theIntro');
	jQuery('body#SurveyEngineBody div#SkinContent').addClass('theIntro');
	jQuery('body#SurveyEngineBody').wrapInner( "<div class='outerBox'></div>");
	jQuery('div.outerBox').wrapInner( "<div class='contentBox'></div>");
	
	jQuery('<div data-youtube="https://www.youtube.com/watch?v=qeYN36nGm0w" id="ytbg"></div>').insertBefore('.contentBox');
	jQuery('[data-youtube]').youtube_background({
				'muted': true,
	'autoplay': true
			});