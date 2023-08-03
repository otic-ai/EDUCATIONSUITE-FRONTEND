import React from "react";
import "./Pricing.css";
import Header from "../../components/header/Header";
import { pricing } from "../../Data/pricing.js";
import Vector from "../../assets/Vector.png";
const Pricing = () => {
  console.log(pricing);
  return (
    <div className="pricing">
      <Header />
      <div className="pricing_plans">
        <div className="pricing_plans_content">
          <h2>Choose your plan</h2>
          <p>
         is simply dummy text of the printing and typesetting
            industry.
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a ga
            </p>
          </p>
          <div class="container">
            <button class="Monthly">Monthly</button>
            <button class="Annually">Annually</button>
          </div>
        </div>
        <div className="cards">
          {pricing.map((data, id) => {
            return (
              <div className="cardname">
                <div>
                  <span>{data.name}</span>
                  <h2>${data.amount}</h2>
                </div>
                <div>
                  <ul>
                    <li>
                      {data.students} <span>students</span>
                    </li>
                    <li>{data.projects}</li>
                    <li>{data.trial}</li>
                  </ul>
                </div>
                <div>
                  <button className="card_button">{data.button}</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="yelloimage">
        <img src={Vector} alt="" />
      </div>
    </div>
  );
};

export default Pricing;