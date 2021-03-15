import React from "react";
import Header from "../Navigation/Header";

import Footer from "../Footer/Footer";

const ContactUs = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="wrapper">
          <div className="home">
            <div>
              <h1
                style={{
                  fontSize: "5vw",
                  marginTop: "9vw",
                  marginLeft: "-43vw",
                }}
              >
                Contact<sub>Us</sub>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
