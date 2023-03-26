import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "./Redux/cartSlice";

function Products() {
  const [products, setProducts] = useState([]);
  const  dispatch = useDispatch()

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleClick =(item)=>{
    dispatch(add(item))
  }
  return (
    <>
      <div className="container bg-light">
        <div className="row ">
          <h1>Products</h1>
          {products.map((item) => (
            <div className="col mt-2">
            <div className="card " style={{ width: "12rem", height:"100%" }}>
              <img src={item.image} alt="" />
              <p className="card-title">{item.title} </p>
              <b>${item.price} </b>
              <div>
                <button onClick={()=>handleClick(item)} className="btn btn-primary">Add to Cart!</button>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
