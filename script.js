//your JS code here. If required.
let Fname = document.getElementById('fname')
let val = Fname.innerHTML.toUpperCase()

Fname.addEventListener('mouseleave', () => {
	document.getElementById('fname').value = val
})
