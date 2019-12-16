function formValidation() {
	var firstname = document.getElementById('firstName');
	if (firstname.value.length == 0) {
		document.getElementById('head').style.display = 'block';
		document.getElementById('errorMsg').style.display = 'none';
		document.getElementById('head').innerText = "* All fields are mandatory *";
		firstname.focus();
		return false;
	} else {
		var alphaExp = /^[a-zA-Z]+$/;
		if(firstname.value.match(alphaExp)){
			var dialog = document.getElementById('myModal');
			document.getElementById('modalBtn').style.display = 'none';
			 document.getElementById('inputName').innerText = "Hello," + " " + firstname.value;
			 $(myModal).modal('hide');
			 return true;
		}else{
			document.getElementById('errorMsg').innerText = "* For your name please use alphabets only *";
			document.getElementById('head').style.display = 'none';
			document.getElementById('errorMsg').style.display = 'block';
			firstname.focus();
			return false;
		}
	}
}
window.onload = function() {
 var btn = document.getElementById('submitButton');
	btn.addEventListener('click', formValidation);
};
