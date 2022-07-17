let submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", () => {
  getRating();
});

function getRating() {
  var selectedRating = document.querySelector(".selected-rating");
  var ratingForm = document.querySelector("form");
  Array.from(ratingForm.elements).forEach((element) => {
    element.value = +element.value;
    if (element.checked) {
      selectedRating.innerText = `You selected ${element.value} out of 5`;
      return showThankYou();
    }
  });
}

function showThankYou() {
  var thankYouCard = document.querySelector(".thankyou-card");
  var ratingCard = document.querySelector(".rating-card");
  thankYouCard.classList.remove("hidden");
  ratingCard.classList.add("hidden");
}
