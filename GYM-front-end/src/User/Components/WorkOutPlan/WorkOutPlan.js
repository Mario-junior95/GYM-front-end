import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../Navigation/Header";
import "./WorkOutPlan.css";
import "../Navigation/Headers.css";

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

  const [workout, setWorkout] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8000/api/workout").then((response) => {
      setWorkout(response.data.workout);
    });
  }, []);

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
              <div style={{ marginBottom: "6vw" }}>
                {workout.map((val, index) => {
                  if (index === 0) {
                    return (
                      <section
                        className="block_section_1"
                        id="gym"
                        key={val.id}
                      >
                        <img
                          data-aos="fade-zoom-in"
                          data-aos-easing="ease-in-back"
                          data-aos-delay="400"
                          data-aos-offset="0"
                          src={`http://localhost:8000/storage/${val.image}`}
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
                          <span className="paragraph">{val.description}</span>
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
                    );
                  }
                })}

                {workout.map((val, index) => {
                  if (index === 1) {
                    return (
                      <section
                        className="block_section_2"
                        id="mma"
                        key={val.id}
                      >
                        <div
                          style={{ marginTop: " 3vw" }}
                          data-aos="fade-up"
                          data-aos-anchor-placement="top-center"
                        >
                          <span className="paragraph">{val.description}</span>
                          <br />
                          <Link to="/workoutPlan/Mma">
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
                        <span
                          className="mma"
                          data-aos="fade-left"
                          data-aos-offset="300"
                          data-aos-easing="ease-in-sine"
                        >
                          MMA
                        </span>
                        <img
                          src={`http://localhost:8000/storage/${val.image}`}
                          style={{ width: "45vw", margin: "20px" }}
                        />
                      </section>
                    );
                  }
                })}

                {workout.map((val, index) => {
                  if (index === 2) {
                    return (
                      <section
                        className="block_section_2"
                        id="aerobic"
                        key={val.id}
                      >
                        <span
                          className="aerobic"
                          data-aos="fade-right"
                          data-aos-offset="300"
                          data-aos-easing="ease-in-sine"
                        >
                          Aerobic
                        </span>
                        <img
                          src={`http://localhost:8000/storage/${val.image}`}
                          style={{ width: "45vw", margin: "20px" }}
                        />
                        <div
                          style={{ marginTop: " 3vw" }}
                          data-aos="fade-down"
                          data-aos-anchor-placement="top-center"
                        >
                          <span className="paragraph">{val.description}</span>
                          <br />
                          <Link to="/workoutPlan/Aerobic">
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
                    );
                  }
                })}

                {workout.map((val, index) => {
                  if (index === 3) {
                    return (
                      <section
                        className="block_section_2"
                        id="cardio"
                        key={val.id}
                      >
                        <div
                          style={{ marginTop: " 3vw" }}
                          data-aos="fade-up"
                          data-aos-anchor-placement="top-center"
                        >
                          <span className="paragraph">{val.description}</span>
                          <br />
                          <Link to="/workoutPlan/Cardio">
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
                        <img
                          src={`http://localhost:8000/storage/${val.image}`}
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
                    );
                  }
                })}

                {workout.map((val, index) => {
                  if (index === 4) {
                    return (
                      <section
                        className="block_section_2"
                        id="zumba"
                        key={val.id}
                      >
                        <span
                          className="zumba"
                          data-aos="fade-right"
                          data-aos-offset="300"
                          data-aos-easing="ease-in-sine"
                        >
                          ZUMBA
                        </span>
                        <img
                          src={`http://localhost:8000/storage/${val.image}`}
                          style={{ width: "45vw", margin: "20px" }}
                        />
                        <div
                          style={{ marginTop: " 3vw" }}
                          data-aos="fade-down"
                          data-aos-anchor-placement="top-center"
                        >
                          <span className="paragraph">{val.description}</span>
                          <br />
                          <Link to="/workoutPlan/Zumba">
                            {" "}
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
                    );
                  }
                })}

                {workout.map((val, index) => {
                  if (index === 5) {
                    return (
                      <section
                        className="block_section_2"
                        id="pool"
                        key={val.id}
                      >
                        <div
                          style={{ marginTop: " 3vw" }}
                          data-aos="fade-up"
                          data-aos-anchor-placement="top-center"
                          data-aos-offset="300"
                        >
                          <span className="paragraph">{val.description}</span>
                          <br />
                          <Link to="/workoutPlan/Pool">
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
                        <img
                          src={`http://localhost:8000/storage/${val.image}`}
                          style={{ width: "45vw", margin: "20px" }}
                        />
                        <span
                          className="pool"
                          data-aos="fade-left"
                          data-aos-offset="300"
                          data-aos-easing="ease-in-sine"
                        >
                          POOL
                        </span>
                      </section>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOutPlan;
