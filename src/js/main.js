const rateBtn = document.querySelectorAll(".card__rate-btn")
const submitBtn = document.querySelector(".card__submit-btn")
const selectionText = document.querySelector(".thanks__selection")
const thanksCard = document.querySelector(".thanks")

let rateValue = 0
rateBtn.forEach(btn => {
	btn.addEventListener("click", () => {
		rateValue = btn.value
		console.log(rateValue)
	})
})

submitBtn.addEventListener("click", () => {
	selectionText.textContent = `You selected ${rateValue} out of 5 stars`
	thanksCard.classList.add("active")
})
