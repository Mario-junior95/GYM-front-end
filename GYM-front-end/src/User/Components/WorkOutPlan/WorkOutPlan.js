import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Navigation/Header";
import "./WorkOutPlan.css";
import "../Navigation/Headers.css";
import { css } from "glamor";

import AOS from "aos";
import "aos/dist/aos.css";
import Axios from "axios";

const WorkOutPlan = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
    AOS.refresh();
  }, []);

  const [gym, setGym] = useState([]);
  const [mma, setMma] = useState([]);
  const [aerobic, setAerobic] = useState([]);
  const [cardio, setCardio] = useState([]);
  const [zumba, setZumba] = useState([]);
  const [pool, setPool] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8000/api/workout/1").then((response) => {
      setGym(response.data.workout);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:8000/api/workout/2").then((response) => {
      setMma(response.data.workout);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:8000/api/workout/3").then((response) => {
      setAerobic(response.data.workout);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:8000/api/workout/4").then((response) => {
      setCardio(response.data.workout);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:8000/api/workout/5").then((response) => {
      setZumba(response.data.workout);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:8000/api/workout/6").then((response) => {
      setPool(response.data.workout);
    });
  }, []);

  let hoverButton = css({
    ":hover": {
      color: "black",
      backgroundColor: "white",
    },
  });

  let focusButton = css({
    ":focus": {
      color: "black",
      backgroundColor: "white",
    },
  });

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="wrapper">
          <div className="home">
            <div className="containers">
              <div className="WorkOut_banner"></div>
              <div className="workplanMenu">
                <a href="#gym">GYM</a>
                <a href="#mma">MMA</a>
                <a href="#aerobic">AEROBIC</a>
                <a href="#cardio">CARDIO</a>
                <a href="#zumba">ZUMBA</a>
                <a href="#pool">POOL</a>
              </div>
              <section className="block_section_1" id="gym">
                <img
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="400"
                  data-aos-offset="0"
                  src={`http://localhost:8000/storage/${gym.image}`}
                  style={{ width: "45vw", margin: "20px" }}
                />
                <span
                  className="gym"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  GYM
                </span>
                <div
                  style={{ marginTop: " 3vw" }}
                  data-aos="fade-down"
                  data-aos-anchor-placement="top-center"
                >
                  <span className="paragraph">{gym.description}</span>
                  <br />
                  <Link exact="true" to="/workoutPlan/Gym">
                    <button
                      type="submit"
                      value="Submit"
                      className="btnLogin"
                      style={{ width: "20em" }}
                    >
                      Enroll Now
                    </button>
                  </Link>
                </div>
              </section>

              <section className="block_section_2" id="mma">
                <div
                  style={{ marginTop: " 3vw" }}
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-center"
                >
                  <span className="paragraph">{mma.description}</span>
                  <br />
                  <button
                    type="submit"
                    value="Submit"
                    className="btnLogin"
                    style={{ width: "20em" }}
                  >
                    Enroll Now
                  </button>
                </div>
                <span
                  className="mma"
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  MMA
                </span>
                <img
                  src={`http://localhost:8000/storage/${mma.image}`}
                  style={{ width: "45vw", margin: "20px" }}
                />
              </section>
              <section className="block_section_2" id="aerobic">
                <span
                  className="aerobic"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  Aerobic
                </span>
                <img
                  src={`http://localhost:8000/storage/${aerobic.image}`}
                  style={{ width: "45vw", margin: "20px" }}
                />
                <div
                  style={{ marginTop: " 3vw" }}
                  data-aos="fade-down"
                  data-aos-anchor-placement="top-center"
                >
                  <span className="paragraph">{aerobic.description}</span>
                  <br />
                  <button
                    type="submit"
                    value="Submit"
                    className="btnLogin"
                    style={{ width: "20em" }}
                  >
                    Enroll Now
                  </button>
                </div>
              </section>
              <section className="block_section_2" id="cardio">
                <div
                  style={{ marginTop: " 3vw" }}
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-center"
                >
                  <span className="paragraph">{cardio.description}</span>
                  <br />
                  <button
                    type="submit"
                    value="Submit"
                    className="btnLogin"
                    style={{ width: "20em" }}
                  >
                    Enroll Now
                  </button>
                </div>
                <img
                  src={`http://localhost:8000/storage/${cardio.image}`}
                  style={{ width: "45vw", margin: "20px" }}
                />
                <span
                  className="cardio"
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  CARDIO
                </span>
              </section>
              <section className="block_section_2" id="zumba">
                <span
                  className="zumba"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  ZUMBA
                </span>
                <img
                  src={`http://localhost:8000/storage/${zumba.image}`}
                  style={{ width: "45vw", margin: "20px" }}
                />
                <div
                  style={{ marginTop: " 3vw" }}
                  data-aos="fade-down"
                  data-aos-anchor-placement="top-center"
                >
                  <span className="paragraph">{zumba.description}</span>
                  <br />
                  <button
                    type="submit"
                    value="Submit"
                    className="btnLogin"
                    style={{ width: "20em" }}
                  >
                    Enroll Now
                  </button>
                </div>
              </section>
              <span
                className="pool"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                POOL
              </span>
              <section className="block_section_2" id="pool">
                <div
                  style={{ marginTop: " 3vw" }}
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-center"
                  data-aos-offset="300"
                >
                  <span className="paragraph">{pool.description}</span>
                  <br />
                  <button
                    type="submit"
                    value="Submit"
                    className="btnLogin"
                    style={{ width: "20em" }}
                  >
                    Enroll Now
                  </button>
                </div>
                <img
                  src={`http://localhost:8000/storage/${pool.image}`}
                  style={{ width: "45vw", margin: "20px" }}
                />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOutPlan;
