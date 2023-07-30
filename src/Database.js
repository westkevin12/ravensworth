import { firestore } from './firebaseConfig';

class Database {
  constructor() {
    this.firestore = firestore; // Use the imported firestore object from firebaseConfig
  }

  getUserDetails(userId) {
    return this.firestore.collection('users').doc(userId).get();
  }

  updateUserDetails(userId, details) {
    return this.firestore.collection('users').doc(userId).update(details);
  }

  getOrderHistory(userId) {
    return this.firestore.collection('orders').where('userId', '==', userId).get();
  }

  getProduct(productId) {
    return this.firestore.collection('products').doc(productId).get();
  }

  getAllProducts() {
    return this.firestore.collection('products').get();
  }

  createOrder(order) {
    return this.firestore.collection('orders').add(order);
  }
}

export default Database;
