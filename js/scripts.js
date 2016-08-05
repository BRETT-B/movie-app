
$(document).ready(function(){
	var apiBaseUrl = 'http://api.themoviedb.org/3/';
	var imageBaseUrl = 'http://image.tmdb.org/t/p/'
	var apiKey = 'api_key=fec8b5ab27b292a68294261bb21b04a5';
	var movieDataUrl = apiBaseUrl+'search/multi?query='+userInput+apiKey;
	$.getJSON(movieDataUrl, function(movieData){
		var pageMarkup = '';
		for(var i = 0; i < movieData.results.length; i++){
			pageMarkup += '<div class="title col-lg-4">';
				// pageMarkup += movieData.results[i].title;
				var posterUrl = imageBaseUrl + 'w300' + movieData.results[i].poster_path;
				pageMarkup += '<img src="' + posterUrl + '">';
				pageMarkup += '</div>';
		}
		$('.poster-grid').html(pageMarkup);
	});
console.log(movieDataUrl);
});