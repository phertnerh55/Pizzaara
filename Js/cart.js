const addToCart = document.querySelectorAll(".add-to-cart");
// console.log(addToCart);
const counter = document.getElementById("counter");
console.log(counter);
const cartPreview = document.getElementById("cart-preview");
// console.log(cartPreview);

const cartItems = [];
addToCart.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (e.target.textContent === "Add to Cart") {
      // console.log(e.target.textContent);
      const pizzaImage = e.target.parentElement.children[0].getAttribute("src");
      console.log(pizzaImage);
      const pizzaName = e.target.parentElement.children[1].textContent;
      console.log(pizzaName);

      const pizzafilling = e.target.parentElement.children[2].textContent;
      console.log(pizzafilling);
      const pizzaPrice = parseInt(
        e.target.parentElement.children[3].dataset.price
      );
      console.log(pizzaPrice);
      const pizzaItem = {
        pizzaImage: pizzaImage,
        pizzaName: pizzaName,
        pizzafilling: pizzafilling,
        pizzaPrice: pizzaPrice,
      };
      console.log(pizzaItem);
      cartItems.push(pizzaItem);
      counter.textContent = cartItems.length;
      e.target.textContent = "Added To Cart";
      console.log(cartItems);
    }
    // update cart preview
    const cartPreviewItem = document.createElement("div");
    cartItems.map((item) => {
      console.log(item);
      
      cartPreviewItem.innerHTML = `
      <div class="cart-item">
      <i class="fa-solid fa-xmark"></i>
      <img src="${item.pizzaImage}"/>
      <p>${item.pizzaName}</p>
      <p> ${item.pizzaPrice}</p>
      <input type="number" placeholder="Number"/>


      </div>
      `;
      cartPreview.appendChild(cartPreviewItem);
      console.log(item.pizzaName)
    });
  });
});
