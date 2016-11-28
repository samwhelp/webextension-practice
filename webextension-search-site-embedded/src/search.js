
!function() {

	function embed_search_control(site_url) {

		/*
		<form target="_blank" accept-charset="utf-8" method="get" action="//www.google.com/search">
			關鍵字：
			<input type="search" name="q" placeholder=" site:$site_url" />
			<input type="hidden" name="sitesearch" value="$site_url" />
			<input type="submit" value="搜尋" />
		</form>
		*/

		var embed = document.createElement('div'); // https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

		//<form target="_blank" accept-charset="utf-8" method="get" action="//www.google.com/search">
		var form = document.createElement('form');
		form.action = '//www.google.com/search';
		form.target = '_blank';
		form.method = 'get';
		form.acceptCharset = 'utf-8';


		//關鍵字：
		var title = document.createTextNode('關鍵字：');
		form.appendChild(title);


		//<input type="search" name="q" placeholder="Search Ubuntu TW" />
		var keyword = document.createElement('input');
		keyword.name = 'q';
		keyword.placeholder = ' site:' + site_url;
		form.appendChild(keyword);


		//<input type="hidden" name="sitesearch" value="$site_url" />
		var site = document.createElement('input');
		site.type = 'hidden';
		site.name = 'sitesearch';
		site.value = site_url;
		form.appendChild(site);


		//<input type="submit" value="搜尋" />
		var search = document.createElement('input');
		search.type = 'submit';
		search.value = '搜尋';
		/*
		search.addEventListener('click', function(evt) {
			//evt.target.innerHTML = "click count: " + evt.detail;
			console.log('search:%s', keyword.value);
		}, false); // https://developer.mozilla.org/en-US/docs/Web/Events/click
		*/
		form.appendChild(search);


		embed.appendChild(form); // https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild


		//var header = document.getElementById('page-header'); // https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
		var header = document.body.firstChild; //https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild

		document.body.insertBefore(embed, header); // https://developer.mozilla.org/es/docs/Web/API/Node/insertarAntes
	}

	function new_location(url) {
		//https://developer.mozilla.org/en-US/docs/Web/API/URL
		var rtn = new URL(url);
		return rtn;

	}

	function find_site(url) {
		var location = new_location(url);
		return location.host; //https://developer.mozilla.org/en-US/docs/Web/API/URL
	}

	//https://developer.mozilla.org/en-US/docs/Web/API/Window/location
	//https://developer.mozilla.org/en-US/docs/Web/API/Document/URL
	var site = find_site(window.location.href);
	embed_search_control(site);

}(); // End
