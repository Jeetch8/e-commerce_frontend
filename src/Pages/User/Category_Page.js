import React, { useEffect, useState } from "react";
import FilterSection from "../../Components/CategoryPage/FilterSection";
import axios from "axios";
import { AiOutlineHeart } from "react-icons/ai";
import Footer from "../../Components/Home/Footer";
import Navbar from "../../Components/Home/Navbar";
import { useNavigate } from "react-router-dom";

const Category_Page = () => {
  const [pageNum, setPageNum] = useState(1);
  const [visProducts, setVisProduct] = useState([]);
  const [totalPages, setTotalPages] = useState(Array(0));
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        `https://api.escuelajs.co/api/v1/products?offset=${
          pageNum * 9 - 9
        }&limit=${pageNum * 9}`
      )
      .then((res) => setVisProduct([...res.data]));
  }, [pageNum]);
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) =>
        setTotalPages(new Array(Math.floor(res.data.length / 10)).fill(0))
      );
  }, []);
  // const paginationVisFunc = ( ) => {
  //   totalPages
  // }
  console.log(totalPages);
  console.log(visProducts);
  return (
    <div className="">
      <Navbar />
      <div className="mt-16">
        <FilterSection />
        {/* All Products */}
        <div className="inline-block">
          <div className="inline-flex flex-wrap max-w-[80vw] content-around justify-evenly h-[145vh]">
            {visProducts.map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-[400px]"
                  onClick={() => navigate(`/product/${item.id}`)}
                >
                  <img
                    src={item.images[0]}
                    width={"400px"}
                    alt=""
                    className=" rounded-xl"
                  />
                  <div>
                    <div className="flex justify-between mt-1">
                      <h3>{item.title}</h3>
                      <AiOutlineHeart color="red" size={"20px"} />
                    </div>
                    <h3 className="text-blue-500 font-bold mt-2">
                      ${item.price}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex rounded-2xl w-fit overflow-hidden mt-14 ml-10 mb-16">
            {totalPages.map((item, index) => {
              if (
                pageNum - 1 !== index &&
                pageNum !== index &&
                totalPages.length - 1 !== index &&
                totalPages.length - 2 !== index
              ) {
                if (Math.floor(totalPages.length / 2) === index) {
                  console.log(totalPages.length / 2);
                  return (
                    <div>
                      <div className={"px-6 py-4 bg-zinc-300"}>. . .</div>
                    </div>
                  );
                } else {
                  return;
                }
              }

              return (
                <div
                  className={
                    pageNum === index + 1
                      ? "px-6 py-4 bg-zinc-100 rounded-2xl"
                      : "px-6 py-4 bg-zinc-300"
                  }
                >
                  {index + 1}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Category_Page;
