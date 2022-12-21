const elAdviceNumber = document.querySelector(".advice__number")
const elAdviceContent = document.querySelector("q")
const elRandomizeButton = document.querySelector(".advice__randomizer")

const API_URL = "https://api.adviceslip.com/advice"

const fetchAdvice = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data;
}

const htmlGeneration = async () => {
  try {
    const response = await fetchAdvice();

    let { id, advice } = response.slip

    elAdviceNumber.textContent = `Advice #${id}`
    elAdviceContent.textContent = `${advice}`
  } catch (err) {
    elAdviceNumber.textContent = `Cannot load data.`
  }
}

const setDividerSrc = async () => {
  if (window.innerWidth < 480) {
    const elDivider = await document.querySelector(".advice__divider")

    elDivider.src = "./images/pattern-divider-mobile.svg"
  }
}

elRandomizeButton.addEventListener("click", htmlGeneration)
window.addEventListener("resize", setDividerSrc)

htmlGeneration()