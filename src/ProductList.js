import React, { Component } from 'react';
import Database from './Database';
import Product from './Product';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
    this.database = new Database();
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts() {
    this.database.getAllProducts()
      .then((querySnapshot) => {
        const products = [];
        querySnapshot.forEach((doc) => {
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
          products.push(product);
        });
        this.setState({ products });
      })
      .catch((error) => {
        console.error('Error loading products:', error);
      });
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        <h2>Product List</h2>
        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <ul>
            {products.map((product) => (
              <li key={product.productId}>
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <p>Price: ${product.price}</p>
                <p>Details: {product.details}</p>
                {/* Display other product details as needed */}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default ProductList;
