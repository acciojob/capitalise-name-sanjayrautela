//your JS code here. If required.
function capitalizeOnBlur{
	const inputField document.getElementbyID('fname');
	inputField.value = inputField.value.toUppercase();	
}
    const inputField = document.getElementById('fname');
    inputField.addEventListener('blur', capitalizeOnBlur);
