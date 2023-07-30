import React, { Component } from 'react';
import Database from './Database';
import Order from './Order';

class OrderHistory extends Component {
  constructor() {
    super();
    this.state = {
      orders: [],
    };
    this.database = new Database();
  }

  componentDidMount() {
    this.loadOrderHistory();
  }

  loadOrderHistory() {
    // You should replace 'userId' with the actual user ID or implement your own user authentication logic.
    const userId = 'userId'; // Replace 'userId' with the actual user ID.
    this.database.getOrderHistory(userId)
      .then((querySnapshot) => {
        const orders = [];
        querySnapshot.forEach((doc) => {
          const orderData = doc.data();
          const order = new Order(
            doc.id,
            orderData.userId,
            orderData.products,
            orderData.totalPrice,
            orderData.orderStatus
          );
          orders.push(order);
        });
        this.setState({ orders });
      })
      .catch((error) => {
        console.error('Error loading order history:', error);
      });
  }

  render() {
    const { orders } = this.state;

    return (
      <div>
        <h2>Order History</h2>
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <ul>
            {orders.map((order) => (
              <li key={order.orderId}>
                <strong>Order ID:</strong> {order.orderId}<br />
                <strong>Total Price:</strong> ${order.totalPrice}<br />
                <strong>Status:</strong> {order.orderStatus}
                {/* Display other order details as needed */}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default OrderHistory;
