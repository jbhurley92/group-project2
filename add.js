window.addEventListener('load', function ()  {

    var headline = document.getElementById('headline');
    headline.textContent = 'Add new list items';

            
    var gtButton= document.getElementById('gotime');
    console.log(gtButton);

    gtButton.addEventListener('click', function () {
 
        var source1 = document.getElementById('thing'); 
       
        var source2 = document.getElementById('cost'); 
        
        var li= document.createElement('li');
        li.textContent = source2.value + ' by ' + source1.value;
            
         
       
        var parent = document.getElementById('things');
        parent.appendChild(li);
        
        
if(document.getElementById('thing').value == '')
{
    alert('Username can not be empty.');
    li.texcontent = null;
}
                
if(document.getElementById('cost').value == '')
{
    alert('Username can not be empty.');
    li.texcontent = null;
}
        
    });  
}); 


/*

 name: function (input) {
        var name = new RegExp('[A-Za-z]+ [A-Za-z]+'); // create a regex
        return name.test(input);
    
    },
*/