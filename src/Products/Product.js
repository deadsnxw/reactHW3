import React, { useState } from "react";
import "./Product.css";

export default function Product({ name, brand, price }) {
    return (
        <div className="product">
            <h2>{name}</h2>
            <p>Brand: {brand}</p>
            <p>Price: ${price}</p>
        </div>
    )
}