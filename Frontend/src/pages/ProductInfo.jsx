import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductInfo = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Fetch product details from backend (replace with your API endpoint)
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} width="200" />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <label>
        Quantity:
        <input 
          type="number" 
          value={quantity} 
          min="1"
          onChange={(e) => setQuantity(e.target.value)} 
        />
      </label>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductInfo;
