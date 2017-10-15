// document.getElementById('zipInput').oncubmit = function(){lo()}

// function lo() {
	
// 	console.log('lll')


// }

function lo(){
	console.log('hit')
}


document.getElementById('zipInput').onkeydown = function(e){
	if (e.keyCode == 13) {
		lo()
	}
}