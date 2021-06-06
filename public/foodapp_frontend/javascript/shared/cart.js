let userId = 1;

// This file contains all the functions related to cart

let getCartDetails = new Promise((resolve, reject) => {
  $.ajax({
    url: `http://localhost:1337/carts?users_permissions_user=${userId}`,
    type: "GET",
    success: (result) => resolve(result),
    error: (error) => {
      console.error(error)
      reject("Sorry coudn't fetch items, please try again.")
    }
  })
});

//SUB
let createCartItem = (productId, quantity, price) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `http://localhost:1337/cart-items`,
      type: "POST",
      data: {
        "product": +productId,
        "quantity": +quantity,
        "price": +quantity * +price
      },
      success: (result) => resolve(result),
      error: (error) => {
        console.error(error)
        reject("Sorry coudn't fetch items, please try again.")
      }
    })
  });
}

//SUB
let deleteCartItem = (cartItemId) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `http://localhost:1337/cart-items/${cartItemId}`,
      type: "DELETE",
      success: (result) => resolve(result),
      error: (error) => {
        console.error(error)
        reject("Sorry coudn't delete cart-items, please try again.")
      }
    })
  });
}

//SUB
let updateCart = (cartDetails) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `http://localhost:1337/carts/${cartDetails.id}`,
      type: "PUT",
      data: cartDetails,
      success: (result) => resolve(result),
      error: (error) => {
        console.error(error)
        reject("Sorry coudn't fetch items, please try again.")
      }
    })
  });
}

//MAIN
let addItemToCart = (productId, quantity, price) => {
  createCartItem(productId, quantity, price)
    .then(cartItemDetails => {
      getCartDetails
        .then(cartDetails => {
          if (!cartDetails[0]) throw new Error("addItemToCart: There is no cart details found")
          if (!cartDetails[0].cart_items) throw new Error("addItemToCart: There is no cart items found")
          cartDetails[0].cart_items.push(cartItemDetails);
          updateCart(cartDetails[0]).then(result => console.log("addItemToCart: Success"))
        })
        .catch(error => console.error(`addItemToCart: ${error}`))
    })
}

//MAIN
let removeFromCart = (productId) => {
  console.log(productId)
  getCartDetails
    .then(cartDetails => {
      if (!cartDetails[0]) throw new Error("removeFromCart: There is no cart details found")
      if (!cartDetails[0].cart_items) throw new Error("removeFromCart: There is no cart items found")
      let cartItem = cartDetails[0].cart_items.find(item => item.product === productId)
      if (!cartItem) throw new Error("removeFromCart: This item is not there in the cart!!")
      if (!cartItem) throw new Error("removeFromCart: There is an error in the cart item details")
      deleteCartItem(cartItem.id)
      .then(result => console.log("removeFromCart: Success"))
    })
    .catch(error => console.error(`removeFromCart: ${error}`))
}
