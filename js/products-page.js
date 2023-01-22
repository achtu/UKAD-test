document.addEventListener("DOMContentLoaded", function () {
  let products = document.querySelector(".products");
  async function fetchProducts(url) {
    let data = await fetch(url);
    let response = await data.json();
    for (let i = 0; i < 9; i++) {
      let description = response[i].description;
      let title = response[i].title;
      products.innerHTML += `
        <div class="product">
        <img src="${response[i].images[1]}" alt="" class="product-img">
        <h2 class="product-title">${
          title.length > 15 ? title.substring(0, 18).concat("...") : title
        }</h2>
        <h4 class="product-category">${response[i].category.name}</h4>
        <p class="product-description">${
          description.length > 80
            ? description.substring(0, 80).concat("...more")
            : description
        }</p>
        <div class="product-price-container">
            <h3 class="product-price">${response[i].price} $</h3>
            <a href="#!" data-productId="${
              response[i].id
            }" class="add-to-cart"></a>
        </div>
    </div>`;
    }
  }

  fetchProducts("https://api.escuelajs.co/api/v1/products");
});