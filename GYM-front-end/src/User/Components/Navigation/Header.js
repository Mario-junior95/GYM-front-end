import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import LogoWhite from "../../../Images/logoWhite.svg";
import LogoBlack from "../../../Images/logoBlack.svg";

const Header = (props) => {
  const { history } = props;
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
    color: "white",
    hover: false,
  });

  // State of our button
  const [disabled, setDisabled] = useState(false);

  //Use Effect
  useEffect(() => {
    //Listening for page changes.
    history.listen(() => {
      setState({
        clicked: false,
        menuName: "Menu",
        color: "white",
        hover: false,
      });
    });
  }, [history]);

  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
        color: "black",
        hover: true,
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
        color: "white",
        hover: false,
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
        color: "transparent",
        hover: false,
      });
    }
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              {state.menuName !== "Close" ? (
                <Link to="/home">
                  <img src={LogoWhite} alt="error-logo" />
                </Link>
              ) : (
                <Link to="/home">
                  <img src={LogoBlack} alt="error-logo" />
                </Link>
              )}
            </div>
            {state.menuName !== "Close" ? (
              <>
                <div className="menu">
                  <button
                    disabled={disabled}
                    onClick={handleMenu}
                    style={{ color: "white" }}
                  >
                    {state.menuName}
                  </button>
                  <hr style={{ width: "100%", color: "white" }} />
                </div>
              </>
            ) : (
              <>
                <div className="menu">
                  <button
                    disabled={disabled}
                    onClick={handleMenu}
                    style={{ color: "black" }}
                  >
                    {state.menuName}
                  </button>
                  <hr style={{ width: "100%" }} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default withRouter(Header);
