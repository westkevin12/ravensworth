class Cart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    if (!product || !product.price || !product.quantity) {
      throw new Error("Invalid product data. Product must have price and quantity.");
    }
    this.products.push(product);
  }

  updateQuantity(product, quantity) {
    if (!product || !Number.isInteger(quantity) || quantity < 0) {
      throw new Error("Invalid product or quantity. Product must be valid and quantity must be a non-negative integer.");
    }
    product.quantity = quantity;
  }

  removeProduct(product) {
    if (!product) {
      throw new Error("Invalid product.");
    }
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  getTotalPrice() {
    let total = 0;
    this.products.forEach((product) => {
      if (product && product.price && product.quantity) {
        total += product.price * product.quantity;
      }
    });
    return total;
  }
}

export default Cart;
