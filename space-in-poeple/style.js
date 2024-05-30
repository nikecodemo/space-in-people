async function populate(){
	const requestURL = "https://nikecodemo.github.io/space-in-people/space.json"
	const request = new Request(requestURL) // creazione oggetto.
	const response = await fetch(request) // modificare parti del contenuto.
	const spaceInPeople = await response.json()


	populate(popular)
}


function popular(obj){
	const header = document.querySelector("header")

	for (let names in people){
		const number = obj.names;
		const people = obj.names;
		console.log(people);

		const sect = document.createElement("section");
		const mioH1 = document.createElement("h1");
		const mioP = document.createElement("p");
		const mioP1 = document.createElement("p");

		mioP.textContent = "Nome: " + people.Name;
		mioP1.textContent = "Numero: " + number;

		sect.appendChild(mioH1)
		sect.appendChild(mioP)
		sect.appendChild(mioP1)
		

	}
}

populate()
