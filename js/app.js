window.addEventListener('load', function() {
  var _ = require('underscore');

  var data = require('./data');
  var musicTemplate = _.template(document.getElementById('music-template').textContent);

  for (var i = 0; i < data.length; i++) {
    var artists = musicTemplate({
      name: data[i].name,
      type: data[i].type,
      album: data[i].album,
    });
    console.log(artists);

    var music = document.createElement('div');
    music.innerHTML = artists;
    var parent = document.getElementById('results');
    parent.appendChild(music);
    console.log(music);

	
}

$(function() {
$('#results div').draggable({
	appendTo: "body",
	helper: "clone"
		// });
		// $('#adding div').droppable({
		//   appendTo: "#adding"
});
});


});
