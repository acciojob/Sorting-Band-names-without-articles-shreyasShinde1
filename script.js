//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function removeArticales(name) {
	return name.replace(/^(a|an|the)\s+/i,' ');
}

touristSpots.sort((a,b)=> removeArticales(a).localeCompaire(removeArticales(b)));

let ul =document.getElementsByTagName("ul")[0];
ul.id ="bands"

touristSpots.forEach((touristSpot)=>
	let li = document.createElement("li")
	li.textContent = touristSpot;
	ul.appendChild(li)
					
)