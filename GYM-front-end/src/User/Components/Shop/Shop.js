import React, { useState, useEffect } from "react";
import Header from "../Navigation/Header";
import "../../../App.css";
import Tilt from "react-parallax-tilt";
import "./Shop.css";
import Axios from "axios";
import Pagination from "../../../Paginate/Paginate";
import { css } from "glamor";

import Footer from "../Footer/Footer";

const Shop = () => {
  const [listShop, setListShop] = useState([]);
  const [type, setType] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8000/api/shop").then((response) => {
      setListShop(response.data.shop);
    });
  }, []);

  /**   Search Section  */

  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  useEffect(() => {
    setFilteredData(
      listShop.filter(
        (shop) =>
          shop.type.toLowerCase().includes(search.toLowerCase()) ||
          shop.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, listShop]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  let card = css({
    ".card": {
      position: "relative",
      float: "center",
      width: "auto !important",
      height: "auto !important",
      marginRight: "80px",
      borderRadius: " 30px",
      background: "rgb(222, 222, 222) !important",
      background:
        "linear-gradient(182deg, white 0%, white 100%) rgb(222, 222, 222) !important",
      boxShadow: "0 2px 20px rgba(0, 0, 0, 0.5)",
      transformStyle: "preserve-3d",
      transform: " perspective(500px)",
      marginTop: "10vw",
      marginBottom: "5vw",
    },
  });

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="wrapper">
          <div className="shop">
            <h1
              style={{
                fontSize: " 5vw",
                marginLeft: "-55vw ",
                marginTop: "7vw",
              }}
            >
              Shop
            </h1>
            {filteredData.length === 0 ? (
              <label>
                <input
                  type="text"
                  value={search}
                  style={{ borderBottom: "1px red solid" }}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  placeholder="Search By Name Or By Type"
                />
                <div className="label-text" style={{ color: "red" }}>
                  Search{" "}
                </div>
              </label>
            ) : (
              <label>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  placeholder="Search By Name Or By Type"
                />
                <div className="label-text">Search </div>
              </label>
            )}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr ",
              }}
            >
              {filteredData.length === 0 ? (
                <p style={{ color: "red", marginLeft: "39vw", width: "16vw" }}>
                  No Result Found
                </p>
              ) : (
                <>
                  {currentPosts.map((val) => {
                    return (
                      <Tilt key={val.id}>
                        <div className="page-index ">
                          <div className="card " {...card}>
                            <img
                              className="shoe"
                              src={`http://localhost:8000/storage/${val.image}`}
                            />
                            <div className="content_item">
                              <p
                                style={{
                                  color: "black",
                                  fontWeight: "bold",
                                  textAlign: "center",
                                }}
                              >
                                {val.name}
                              </p>
                              <p
                                style={{
                                  color: "black",
                                  textAlign: "center",
                                }}
                              >
                                <strong> Price :</strong> {val.amount + "$"}
                              </p>
                              <p
                                style={{
                                  color: "black",
                                  textAlign: "center",
                                }}
                              >
                                <strong> Type :</strong> {val.type}
                              </p>
                              <button className="button_shop">Add To Card</button>
                            </div>
                          </div>
                        </div>
                      </Tilt>
                    );
                  })}
                </>
              )}
            </div>
          </div>
          {filteredData.length !== 0 && (
            <Pagination
              paginate={paginate}
              postsPerPage={postsPerPage}
              totalPosts={listShop.length}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
