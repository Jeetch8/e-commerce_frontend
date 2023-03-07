import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Home/Navbar";
import Footer from "../../Components/Home/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const params = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [imgVis, setImgVis] = useState(0);
  console.log(params.productId);
  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${params.productId}`)
      .then((res) => setProductDetails({ ...res.data }));
  }, []);
  console.log(productDetails, "kjkj");
  return (
    <div>
      <Navbar />
      <div>
        <div className="inline-block">
          <img src={productDetails?.images[imgVis]} alt="visible product" />
          <div className="flex gap-4 justify-center">
            {productDetails?.images.map((el, index) => {
              return (
                <img
                  src={el}
                  width={"100px"}
                  height="100px"
                  alt=""
                  onClick={() => setImgVis(index)}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <div className="inline-block align-top">
          <h1 className="text-[25px] font-semibold">{productDetails?.title}</h1>
          {productDetails?.description}
          <h1 className="text-[35px] font-bold">${productDetails?.price}</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProduct;
