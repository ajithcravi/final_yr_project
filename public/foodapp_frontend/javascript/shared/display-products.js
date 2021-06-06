let sampleCart = [];

getCartDetails.then(cartDetails => {
  if (!cartDetails[0]) throw new Error("addItemToCart: There is no cart details found")
  if (!cartDetails[0].cart_items) throw new Error("addItemToCart: There is no cart items found")
  sampleCart = cartDetails[0].cart_items.map(item => item.id);
})

displayItems = (allItems) => {
  allItems.forEach(item => {
    let allTable = document.getElementById('all-table')
    let allItem = document.createElement('tr')
    if (sampleCart.includes(item.id)) {
      allItem.innerHTML =
        `
        <td id = "${item.product_id}">
            <div class="cart-info">
                <img src="${item.product_image.url}">
                    <div>
                        <h3>${item.product_name}</h3>
                        <button onclick="removeFromCart(${item.id})">Remove Item</button>
                    </div>
            </div>
        </td>
        <td id="sub_${item.product_id}">QAR ${item.product_price}</td>
        `
    }
    else {
      allItem.innerHTML =
        `
        <td id = "${item.product_id}">
            <div class="cart-info">
                <img src="${item.product_image.url}">
                    <div>
                        <h3>${item.product_name}</h3>
                        <button onclick="addItemToCart(${item.id}, 1 , ${item.product_price})">Add to cart</button>
                    </div>
            </div>
        </td>
        <td id="sub_${item.product_id}">QAR ${item.product_price}</td>
        `
    }

    allTable.appendChild(allItem)

  });
}

displayAllProducts = () => {
  getAllProducts.then(products => displayItems(products)).catch(error => console.log(error))
}

displayQuickBites = () => {
  getQuickBites.then(products => displayItems(products)).catch(error => console.log(error))
}

displayColdDrinks = () => {
  getColdDrinks.then(products => displayItems(products)).catch(error => console.log(error))
}

displayHotDrinks = () => {
  getHotDrinks.then(products => displayItems(products)).catch(error => console.log(error))
}
