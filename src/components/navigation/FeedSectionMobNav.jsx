import React from "react";
import "./FeedSectionMoboNav.css";
import dropDown from "../../assets/baseline-arrow_drop_down-24px.png";

const FeedSectionMobNav = () => {
  return (
    <div className="justify-content-between align-items-center px-2 feedSectionMobNav_mainDiv">
      <div>
        <p className="my-0 fw-bold text-lg">All posts(102)</p>
      </div>
      <div>
        <button className="filter_btn border border-0 px-3 py-1">
          Filter: All
          <img src={dropDown} alt="" />
        </button>
      </div>
    </div>
  );
};

export default FeedSectionMobNav;
