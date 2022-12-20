const el_advice_number = document.querySelector(".advice_number")
const el_advice_content = document.querySelector("q")
const el_randomize_button = document.querySelector(".randomize_button")

const API_URL = "https://api.adviceslip.com/advice"

const getDataFromApi = async () => {
  const response = await fetch(API_URL)
    .then(data => data.json())

  return response
}

const htmlGeneration = async () => {
  try {
    const response = await getDataFromApi();

    let { id, advice } = response.slip

    el_advice_number.innerHTML = `Advice #${id}`
    el_advice_content.innerHTML = `${advice}`
  } catch (err) {
    el_advice_number.innerHTML = `An error occured: ${err.status}`
  }
}

el_randomize_button.addEventListener("click", htmlGeneration)

window.onload = htmlGeneration

if (window.innerWidth < 600) {
  const el_divider = document.querySelector(".divider")

  el_divider.src = "./src/images/pattern-divider-mobile.svg"
}