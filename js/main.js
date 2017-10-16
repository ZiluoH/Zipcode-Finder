function getLocation(){
	// get zip code from input
	const zip = document.getElementById('zipInput').value
	console.log(zip)

	// make api request
	fetch('http://api.zippopotam.us/us/' + zip)
		.then(
			function(response){
			if (response.status !== 200) {
				// Fail
				// show error msg if zip code not found and hide info section
				document.getElementById('errorMsg').classList.remove('hide')
				document.getElementById('locationInfo').classList.add('hide')
				console.log('fail')
			} else {
				// success
				// show location info and hide error msg is zi code is found
				document.getElementById('errorMsg').classList.add('hide')
				document.getElementById('locationInfo').classList.remove('hide')
				console.log('success')
				// edit data we get
				response.json().then(function(data){
					console.log(data)
					// store data place info to zipData
					var zipData = data.places[0]
					// there is a space in 'place name', need to use brackets to define it
					// var zipPlaceName = data.places[0]['place name']
					var zipInfo = document.getElementById('zipInfo')
					var zipPlaceName = document.createElement('li')
					var zipState = document.createElement('li')
					var zipLongitude = document.createElement('li')
					var zipLatitude = document.createElement('li')
					
					zipPlaceName.innerText = "City: " + zipData['place name']
					
					zipInfo.appendChild(zipPlaceName)
					
				})
			}
			
		})

}


// press enter run function getLocation
document.getElementById('zipInput').onkeydown = function(e){
	if (e.keyCode == 13) {
		getLocation()
	}
}

