let addItemToCart = (productId, imageUrl, productName, price) => {
  let cartTable = document.getElementById('cart-table')
  console.log(cartTable)
  let cartItem = document.createElement('tr')
  cartItem.innerHTML =
    `
    <td id = "td_${productId}">
        <div class="cart-info">
            <img src="${imageUrl}">
                <div>
                    <h3>${productName}</h3>
                    <small>Price: QAR ${price}</small><br>
                    <a onClick="removeItem(${productId})">Remove</a>
                </div>
        </div>
    </td>
    <td><input id="qty_${productId}" type="number" min = "1" value="1" onchange="changeSubtotal(this.value, ${price}, ${productId})" /></td>
    <td id="sub_${productId}">QAR ${price}</td>
    `
  cartTable.appendChild(cartItem)
  console.log(window.sessionStorage.getItem("cartItems"))
  let cartItems = JSON.parse(window.sessionStorage.getItem("cartItems")) || []
  cartItems.push(productId)
  window.sessionStorage.setItem("cartItems", JSON.stringify(cartItems))
  let x = window.sessionStorage.getItem("cartItems")
  console.log(x)
}

let displayCartItems = (cartItems) => {
  cartItems.forEach(item => {
    let cartTable = document.getElementById('cart-table')
    console.log(cartTable)
    let cartItem = document.createElement('tr')
    cartItem.innerHTML =
      `
    <td id = "${item.product_id}">
        <div class="cart-info">
            <img src="${item.product_image.url}">
                <div>
                    <h3>${item.product_name}</h3>
                    <small>Price: QAR ${item.product_price}</small><br>
                    <a onClick="removeItem(${item.product_id})">Remove</a>
                </div>
        </div>
    </td>
    <td><input id="qty_${item.product_id}" type="number" min = "1" value="1" onchange="changeSubtotal(this.value, ${item.product_price}, ${item.product_id})" /></td>
    <td id="sub_${item.product_id}">QAR ${item.product_price}</td>
    `
    cartTable.appendChild(cartItem)

  });
}

let changeSubtotal = (quantity, unitPrice, productId) => {
  let subtotal = quantity * unitPrice
  let subItem = document.getElementById(`sub_${productId}`)
  subItem.innerHTML = `QAR ${subtotal}`
}

let changeTotalPrice = (subtotal, productId) => {
  let changeTotalPrice = subtotal
}

let removeItem = (productId) => {
  console.log(productId)
}
let cartItems = [
  {
    productId: 1,
    imageUrl: "images/Colddrinks/AvocadoJuice.jpg",
    productName: "Avocado Juice",
    price: 23
  },
  {
    productId: 2,
    imageUrl: "images/Colddrinks/AppleJuice.jpg",
    productName: "Apple Juice",
    price: 21
  },
]

displayCartItems(cartItems)
