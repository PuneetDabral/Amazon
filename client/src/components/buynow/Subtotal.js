import React, { useState } from "react";
import { useEffect } from "react";

const Subtotal = ({iteam}) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
      totalAmount();
  }, [iteam]);

  const totalAmount = () => {
      let price = 0
      iteam.map((item) => {
          price += item.price.cost
      });
      setPrice(price)
  }

  return (
    <div className="sub_item">
      <h3>
        Subtotal ({iteam.length} item):
        <strong style={{ fontWeight: 700, color: "#111" }}>₹{price}.00</strong>{" "}
      </h3>
    </div>
  );
};

export default Subtotal;
