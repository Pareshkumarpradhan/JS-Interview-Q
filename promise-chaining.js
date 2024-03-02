// Creating A Promise
// Error Handling
// Promise chaining

const cart = ["shoes", "Pants", "Kurta"];

createOrder(cart)
.then(function (orderId) {
    console.log(orderId);
  return orderId
})
.then(function(orderId){
   return proceedToPayment(orderId);
})
.then(function(paymentInfo){
  console.log(paymentInfo);
})
.catch(function(err){
  console.log(err.message);
})

/// producer
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // createOrder
    //validateCart
    // orderId
    if (!validateCart(cart)) {
      const err = new Error("cart is not  valid");
      reject(err);
    }
    // logic of createOrder
    const orderId = "12345";
    if (orderId) {
        setTimeout(()=>{
            resolve(orderId);
        },5000)  
    }
  });

  return pr;
}

function proceedToPayment(orderId){
  return new Promise(function(resolve,reject){
   resolve("payment successful");
  });
}

function validateCart(cart){
    return true
}


// createOrder
// proceedToPayment
// showOrderSummary
// updateWallet