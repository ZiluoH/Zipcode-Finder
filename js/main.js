function getLocation(){
	// get zip code from input
	const zip = document.getElementById('zipInput').value
	console.log(zip)

	// make api request
	fetch('http://api.zippopotam.us/us/' + zip)
		.then(response => {
			// if status = 200, which means zip code is good
			if (response.status != 200) {
				document.getElementById('result').innerHTML = error
			} else {
				return response.json()
			}
		})
		.then(data => {
			// show location info
			
		})
}


// press enter run function getLocation
document.getElementById('zipInput').onkeydown = function(e){
	if (e.keyCode == 13) {
		getLocation()
	}
}

var error = "wrongsdjfsldkjflksdj"