import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p>Category: {product.category}</p>

      <p>Price: ₹{product.price}</p>

      <p>Stock: {product.stock}</p>

      <button>View Details</button>
    </div>
  );
}

export default ProductCard;
