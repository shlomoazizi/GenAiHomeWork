//
const paymentGateway = {
  gatewayName: "Stripe",
  
  // Regular method
  processPayment: function(amount) {
    console.log(`Processing a payment of $${amount} using ${this.gatewayName}.`);
  }
};

// דוגמה לשימוש:
paymentGateway.processPayment(150);


//Q2
const paymentGateway1 = {
  gatewayName: "Stripe",
  
  processPayment: function() {
    // שימוש ב-this כדי לגשת למאפיין gatewayName של האובייקט הנוכחי
    console.log(`Processing payment through ${this.gatewayName}`);
  }
};

paymentGateway1.processPayment();

const externalProcessor = paymentGateway1.processPayment;
externalProcessor()

//q 6 7
// לוקחים את הפונקציה החיצונית, וקובעים לה בכוח את ההקשר חזרה לאובייקט
const boundProcessor = externalProcessor.bind(paymentGateway);
boundProcessor();