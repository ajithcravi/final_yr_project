getAllProducts = new Promise((resolve,reject) => {
  $.ajax({
    url: "http://localhost:1337/products",
    type: "GET",
    success: (result) => resolve(result),
    error: (error) => {
      console.error(error)
      notifyUser ("Sorry coudn't fetch all products.\nPlease try again.")
      reject ("Sorry coudn't fetch all products.\nPlease try again.")
    }
  })
})

getQuickBites = new Promise((resolve,reject) => {
  $.ajax({
    url: "http://localhost:1337/products?product_category=quickbites",
    type: "GET",
    success: (result) => resolve(result),
    error: (error) => {
      console.error(error)
      notifyUser ("Sorry coudn't fetch quick bites.\nPlease try again.")
      reject ("Sorry coudn't fetch quick bites.\nPlease try again.")
    }
  })
})

getColdDrinks = new Promise((resolve,reject) => {
  $.ajax({
      url:"http://localhost:1337/products?product_category=colddrinks",
      type:"GET",
      success: (result) => resolve(result),
      error: (error) => {
          console.error(error)
          notifyUser ("Sorry coudn't fetch cold drinks.\nPlease try again.")
          reject ("Sorry coudn't fetch cold drinks.\nPlease try again.")
      }
  })
})

let getHotDrinks = new Promise((resolve,reject) => {

  $.ajax({
      url:"http://localhost:1337/products?product_category=hotdrinks",
      type:"GET",
      success: (result) => resolve(result),
      error: (error) => {
          console.error(error)
          notifyUser ("Sorry coudn't fetch hot drinks.\nPlease try again.")
          reject ("Sorry coudn't fetch hot drinks.\nPlease try again.")
      }
  })
})
