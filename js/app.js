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

   var element = document.createElement('div');
   element.classList.add('music');
   element.setAttribute('id', 'data-' + data[i].id);
   element.innerHTML = artists;
   var parent = document.getElementById('results');
   parent.appendChild(element);
}

var search = document.getElementById('search-box');
search.addEventListener('keyup', function () {
        var word = search.value;
        var pattern = new RegExp(search.value);

        for (var i = 0; i < data.length; i++) {
                var element = document.getElementById('data-' + data[i].id);
                if (pattern.test(data[i].name.toLowerCase())) {
                        // Show it
                        element.classList.remove('hidden');
                } else {
                        // Hide it
                        element.classList.add('hidden');
                }
        }
});
var search2 = document.getElementById('search-box2');
search2.addEventListener('keyup', function () {
        var word2 = search2.value;
        var pattern2 = new RegExp(search2.value);

        for (var i = 0; i < data.length; i++) {
                var element2 = document.getElementById('data-' + data[i].id);
                if (pattern2.test(data[i].type.toLowerCase())) {
                        // Show
                        element2.classList.remove('hidden');
                } else {
                        // Hide
                        element2.classList.add('hidden');
                }
        }
});


});
