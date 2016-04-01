$(document).ready(function(){
	$(function(){
	  $.getJSON('https://www.googleapis.com/youtube/v3/search/?part=snippet&key=AIzaSyDyGOBDSVBpRkUfoQOhrZLPQLZtK4PNTGc&q=', function(data){
	    showResults(data);
	  });
	});

	function showResults(results){
	console.log(results);
	}

});


// API Key
// key: AIzaSyDyGOBDSVBpRkUfoQOhrZLPQLZtK4PNTGc

// Add typed search to end of URL (q=SOMETHING).Use a loop.
