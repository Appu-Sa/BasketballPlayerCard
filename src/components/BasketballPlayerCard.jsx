import React, { useState } from "react";
import "./BasketballPlayerCard.css";

const BasketballPlayerCard = ({ details }) => {
  return (
    <div className="container">
    <h3 className="text-center p-1 mb-3">
      Players <span style={{ color: "#8064A2" }}>Profile</span>
    </h3>
    <div className="row">
      {details.map((detail) => {
        const [isDescriptionVisible, setIsDescriptionVisible] =
          useState(false);
        const toggleDescription = () => {
          setIsDescriptionVisible(!isDescriptionVisible);
        };

        return (
          <div
            className="col-lg-4 col-md-6 col-xs-12"
            id="colm"
            key={detail.name}
          >
            <div className={`card ${isDescriptionVisible ? "show" : "hide"}`}>
            <div className="card-body">
              <div className="image-container">
                <img
                  src={detail.image}
                  alt="alt"
                  className="img-fluid"
                />
              </div>

              <h5 className="card-title">
                {detail.name}
              </h5>
              <p>Position: {detail.position}</p>
              <div
                className={`button ${isDescriptionVisible ? "show" : "hide"}`}
              >
                <ion-icon
                  name="arrow-down-circle-outline"
                  onClick={toggleDescription}
                ></ion-icon>
              </div>
            </div>
          </div>
          <div
            className={`description-section ${
              isDescriptionVisible ? "show" : "hide"
            }`}
          >
            <p className="descp">Points per Game: {detail.stats.pointsPerGame}</p>
            <p className="descp">Assists per Game: {detail.stats.assistsPerGame}</p>
            <p className="descp">Rebounds per Game: {detail.stats.reboundsPerGame}</p>
          </div>
          </div>
        );
      })}
    </div>
  </div>
  );
};

export default BasketballPlayerCard;
