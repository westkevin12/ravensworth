class Order {
    constructor(orderId, userId, products, totalPrice, orderStatus) {
      this.orderId = orderId;
      this.userId = userId;
      this.products = products;
      this.totalPrice = totalPrice;
      this.orderStatus = orderStatus;
    }
  }
  
  export default Order;
  