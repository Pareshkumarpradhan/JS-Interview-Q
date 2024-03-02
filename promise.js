const cart = ["shose", "pants", "kurta"];

//earlear solution
// createOrder(cart, function (orderId) {

//     proceedToPayment(orderId);

// })

// usinge promise
// const promise = createOrder(cart);

// promise.then(function (orderId) {

//     proceedToPayment(orderId);

// });


// Q-> what is promise
// A-> A promise is an object represnting the eventual complletion or faillure of an asynchronous operation


// promise cheaning
createOrder(cart)
.then(function (orderId){
  return proceedToPayment(orderId)
})
.then(function (paymentInfo) {
   return showOrderSummary(paymentInfo);
})
.then(function(){
   return updateWalletBalance()
})

