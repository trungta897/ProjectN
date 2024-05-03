document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "slide",
    rewind: true,
    autoplay: true,
    interval: 2000,
    pauseOnHover: false,
  });

  splide.mount();
});

document.addEventListener("DOMContentLoaded", function () {
  // Product information data
  var productData = {
    name: "Tam An Herbal Pharma",
    description:
      "A herbal supplement to support brain health and cognitive function in the elderly.",
    ingredients: [
      { name: "Bacopa monnieri extract", amount: "150 mg" },
      { name: "Resveratrol", amount: "150 mg" },
      {
        name: "Polyscias fructicosa extract (Equivalent to 1500 mg Polyscias fructicosa)",
        amount: "100 mg",
      },
      {
        name: "Ginkgo biloba extract (Equivalent to 2000 mg Ginkgo biloba)",
        amount: "40 mg",
      },
    ],
    dosage: "Take 2 tablets per day, divided into 1-2 doses.",
    storage: "Store in a dry place below 30°C.",
    shelfLife: "36 months from the manufacturing date.",
  };

  // Populate product information

  var productInfoSection = document.getElementById("product-info");
  productInfoSection.innerHTML = `
        <h2>${productData.name}</h2>
        <p>${productData.description}</p>
        <h3>Ingredients:</h3>
        <ul>
            ${productData.ingredients
              .map(
                (ingredient) =>
                  `<li>${ingredient.name}: ${ingredient.amount}</li>`
              )
              .join("")}
        </ul>
        <p><strong>Dosage:</strong> ${productData.dosage}</p>
        <p><strong>Storage:</strong> ${productData.storage}</p>
        <p><strong>Shelf Life:</strong> ${productData.shelfLife}</p>
    `;
});
