var container = document.getElementById('myList');

function addValue(){// Get the value into the input text field
	
	var value1=document.getElementById('newValue').value;
	// Create a new <li> element for to insert inside <ul id="myList">
	
	var new_value = document.createElement('li');
	new_value.innerHTML = value1;
	container.insertBefore(new_value, container.firstChild);	
	
	
	document.getElementById('msg').innerHTML = "yay!!!New Element added!";
	

	document.getElementById('newValue').value="";// Clean input field
}


/*document.getElementById('done').addEventListener('click', function (addValue){
	if (addValue.target.tagName == 'li') {
		addValue.target.className = 'deleted';
		new_value = addValue.target;
	}
}, false);
*/

container.addEventListener('click', function (addValue) {
  
  if (addValue.target.className == 'deleted') {
    addValue.target.className = '';
  } else {
    addValue.target.className = 'deleted';
  }
}, false);