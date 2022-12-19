const el_advice_number = document.querySelector(".advice_number")
const el_advice_content = document.querySelector(".advice_content")
const el_randomize_button = document.querySelector(".randomize_button")

const API_URL = "https://api.adviceslip.com/advice"

const getDataFromApi = async () => {
	const response = await fetch(API_URL)
		.then(data => data.json())

	if (response.ok == false) {
		const message = `An error has occured: ${response.status}`;

		throw new Error(message);
	}

	return response
}

const htmlGeneration = () => {
	const response = getDataFromApi();

	response.then(data => {
		let { id, advice } = data.slip

		el_advice_number.innerHTML = `Advice #${id}`
		el_advice_content.innerHTML = `${advice}`
	})
}

el_randomize_button.addEventListener("click", htmlGeneration)

document.body.addEventListener("load", htmlGeneration())