
!function() {

	function new_location(url) {
		//https://developer.mozilla.org/en-US/docs/Web/API/URL
		var rtn = new URL(url);
		return rtn;

	}

	function find_site(url) {
		var location = new_location(url);
		return location.host; //https://developer.mozilla.org/en-US/docs/Web/API/URL
	}

	function init_form(site) {
		//https://developer.mozilla.org/en-US/docs/Web/API/Document/forms
		//https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement
		//https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements
		//var form = document.forms['form_main'];
		var form = document.forms[0];
		form['q'].placeholder = ' site:' + site;
		form['sitesearch'].value = site;
		//上面是簡化的寫法
		//form.elements['q'].placeholder = ' site:' + site;
		//form.elements['sitesearch'].value = site;
		//也可以使用id來查找。
		//document.getElementById('ipt_keyword').placeholder = ' site:' + site;
		//document.getElementById('ipt_site').placeholder = ' site:' + site;
	}

	function find_tab_url() {
		//https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/tabs/query
		//https://github.com/mdn/webextensions-examples/blob/master/bookmark-it/background.js
		//https://developer.chrome.com/extensions/tabs
		chrome.tabs.query({active: true, currentWindow: true},
			function (tabs) {
				//console.log(tabs);
				var tab = tabs[0];
				if (!tab) {
					return;
				}

				var url = tab['url'];
				if (!url) {
					return;
				}

				var site = find_site(url);
				init_form(site);

			}
		);
	}

	function init() {
		find_tab_url();
	}

	//https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events
	//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
	//https://developer.mozilla.org/en-US/docs/Web/API/Event
	window.addEventListener('load', function(evt) {
		//console.log('Event:', evt);
		init();
	});


}(); // End
