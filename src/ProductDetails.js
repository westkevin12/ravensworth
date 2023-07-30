import React, { Component } from 'react';
import Database from './Database';
import Product from './Product';

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      product: null,
      selectedQuantity: 1,
    };
    this.database = new Database();
  }

  componentDidMount() {
    this.loadProduct();
  }

  loadProduct() {
    const { id } = this.props.match.params; // Get the product ID from the route params
    this.database.getProduct(id)
      .then((doc) => {
        if (doc.exists) {
          const productData = doc.data();
          const product = new Product(
            doc.id,
            productData.name,
            productData.image,
            productData.details,
            productData.price,
            productData.cost,
            productData.quantity
          );
          this.setState({ product });
        } else {
          console.log('Product not found');
        }
      })
      .catch((error) => {
        console.error('Error loading product:', error);
      });
  }

  handleQuantityChange = (event) => {
    const quantity = parseInt(event.target.value, 10);
    this.setState({ selectedQuantity: quantity });
  };

  addToCart = () => {
    // You can implement your cart logic here to add the selected product and quantity to the cart.
    // For demonstration purposes, we'll just log the selected product and quantity.
    console.log('Product added to cart:', this.state.product.name, 'Quantity:', this.state.selectedQuantity);
  };

  render() {
    const { product, selectedQuantity } = this.state;

    if (!product) {
      return <div>Loading product...</div>;
    }

    return (
      <div>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} />
        <p>Price: ${product.price}</p>
        <p>Details: {product.details}</p>
        <p>
          Quantity: 
          <input
            type="number"
            min="1"
            max={product.quantity}
            value={selectedQuantity}
            onChange={this.handleQuantityChange}
          />
        </p>
        <button onClick={this.addToCart}>Add to Cart</button>
      </div>
    );
  }
}

export default ProductDetails;
