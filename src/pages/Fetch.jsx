import axios from "axios";
import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [products, setproducts] = useState([]);

  const [loading, setloading] = useState(true)
  useEffect(() => {
    const FetchProducts = async () => {
        setloading(true)
      let response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
      setproducts(response.data);
      setloading(false)
    };
    FetchProducts();
    
  }, []);
  return (
    <div className="">
      {
        loading? <div >
        <span >Loading...</span>
      </div>: 
        <div className="d-flex flex-wrap gap-2 mt-5 pt-5">
            {products.map((product, index) => (
            <div className="card" style={{width: "18rem"}} key={index}>
              <img src={product.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.category}</h5>
                <p className="card-text">
                  {product.description}
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default Fetch;
