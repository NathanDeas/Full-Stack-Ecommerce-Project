import { useState, useEffect, use } from 'react'

function App() {
// state to hold products
const [products, setProducts] = useState([]);

const request = new Request('http://localhost:5071/api/Products', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
});

useEffect(() => {
  fetch(request)
    .then(response => response.json())
    .then(data => setProducts(data))
    .catch(error => console.error('Error fetching products:', error));
}, []);

  return (
    <>
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>   
    </div>
    </>
  )
}

export default App
