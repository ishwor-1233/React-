import React from "react";
import "./Hero.css";


const BASE_URL = "http://localhost:9000";

const Hero = ({ data = [] }) => {
  if (!data.length) return <p>No food items available</p>;

  return (
    <div className="FoodCart">
      <div className="FoodCard">
        {data.map((food) => (
          <div key={food.name} className="food-item">
            <div className="foodImage">
              {/* Ensure the image URL is correct */}
              <img
                src={`${BASE_URL}${food.image}`}
                alt={food.name}
                onError={(e) => (e.target.src = "/images/default.png")}
              />
            </div>
            <div className="food_info">
              <div className="info">
                <h3>{food.name}</h3>
                <p>{food.text}</p>
              </div>
            </div>
            <button className="hero-price">
              ${food.price ? food.price.toFixed(2) : "N/A"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
