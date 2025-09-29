import React, { useState } from "react";

function ProductItem({ product, onAddToCart }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px 0", 
        width: "250px",
      }}
    >
      <h3>{product.name}</h3>
      <p>Giá: {product.price}đ</p>
      <button onClick={() => onAddToCart(product)}>Thêm vào giỏ</button>
    </div>
  );
}

function Bai4() {
  const products = [
    { id: 1, name: "Sản phẩm A", price: 100 },
    { id: 2, name: "Sản phẩm B", price: 200 },
    { id: 3, name: "Sản phẩm C", price: 300 },
  ];

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Bài 4: Giỏ hàng</h1>
      <h2>
        Giỏ hàng: {totalItems} sản phẩm, tổng tiền: {totalPrice}đ
      </h2>

   
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {products.map((p) => (
          <ProductItem key={p.id} product={p} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default Bai4;
