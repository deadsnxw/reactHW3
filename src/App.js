import './App.css';
import './Products/Product.css';
import React, { useState } from 'react';

function App() {
  const [product, setProduct] = useState({
    name: '',
    brand: '',            // state for handling of current product
    price: 0
  });
  const [products, setProducts] = useState([]); // state for handling array of products

  const handleAddProduct = () => { // function to add product to products array
    setProducts([...products, product]); // adding product to products array
    setProduct({ name: '', brand: '', price: 0 }); // resetting product state for a future product
  };

  const handleDeleteProduct = (index) => { // function to delete product from products array by index
    const newProducts = products.filter((_, i) => i !== index); // creating new array of products without the deleted product
    setProducts(newProducts); // setting new array of products
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Name"
        value={product.name}
        onChange={e => setProduct({ ...product, name: e.target.value })} // updating product state with new name
      />
      <input
        type="text"
        placeholder="Brand"
        value={product.brand}
        onChange={e => setProduct({ ...product, brand: e.target.value })} // updating product state with new brand
      />
      <input
        type="number"
        placeholder="Price"
        value={product.price}
        onChange={e => setProduct({ ...product, price: Number(e.target.value) })} // updating product state with new price
      />

      <button onClick={handleAddProduct}>Add Product</button>

      <div className="product-list">
        {products.map((product, index) => ( // mapping through products array to display each product
          <div className="product" key={index}>
            <h2>{product.name}</h2>
            <p>{product.brand}</p>
            <p className="price">${product.price}</p>
            <button onClick={() => handleDeleteProduct(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
