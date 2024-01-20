// call back hell example
// the above structure is called pyramid of Doom

const cart = ["shose", "pants", "kurta"];

api.createOrder( cart, function (){

    api.proceedToPayment(function () {

        api.showOrderSummary( function () {

            api.updateWallet()
        })
    })
})

// Inversion of controle


