//your JS code here. If required.
let Fname = document.getElementById('fname')
// let str = ''
// for (let i = 0; i < val.length; i++) {
// 	str+=val[i].toUpperCase()
// }

Fname.addEventListener('mouseleave', () => {
	Fname.value= Fname.value.toUpperCase()
})
