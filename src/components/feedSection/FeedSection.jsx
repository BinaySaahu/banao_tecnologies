import React from "react";
import Card from "./Card";
import edit from "../../assets/baseline-edit-24px.svg";
import location from "../../assets/outline-location_on-24px 2.svg";
import dropDown from "../../assets/baseline-arrow_drop_down-24px.png";
import group from "../../assets/baseline-group_add-24px.png";

import "./FeedSection.css";
import FeedSectionMobNav from "../navigation/FeedSectionMobNav";


const FeedSection = ({setViewSignup,viewSignUp}) => {
  return (
    <div className="d-flex flex-column feedSection_mainDiv py-4 m-auto">
      <FeedSectionMobNav />
      <div className="feedSection_nav justify-content-between align-items-center border-bottom ">
        <ul className="feedSection_nav_list d-flex justify-content-evenly w-100 my-0 h-100">
          <li className="feedSection_nav_list_items text-dark fw-semibold py-2 border-bottom border-dark h-100">
            All Posts(36)
          </li>
          <li className="feedSection_nav_list_items py-2">Article</li>
          <li className="feedSection_nav_list_items py-2">Event</li>
          <li className="feedSection_nav_list_items py-2">Education</li>
          <li className="feedSection_nav_list_items py-2">Job</li>
        </ul>
        <div className="w-100 d-flex justify-content-end py-2 feedSectioNav_btns">
          <button
            className="mx-3 border border-0 py-2 px-3"
            style={{ backgroundColor: "#EDEEF0", color: "black" }}
          >
            Write a post <img src={dropDown} alt="" className="mx-1" />
          </button>
          <button
            className="py-2 px-3 border border-0"
            style={{ backgroundColor: "#2F6CE5", color: "white" }}
            onClick={() => setViewSignup(!viewSignUp)}
          >
            {" "}
            <img src={group} alt="" className="mx-1" /> Join group
          </button>
        </div>
      </div>
      <div
        className="feedSection_child d-flex justify-content-center"
        style={{ maxHeight: "70%" }}
      >
        <div className="feedSection_feeds d-flex flex-column justify-content-center align-items-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div
          className="feedSection_addr d-flex justify-content-center"
          style={{ width: "40%" }}
        >
          <div className="flex-column py-5 feedsection_addr" style={{ width: "70%" }}>
            <div className="d-flex justify-content-between border-bottom py-2">
              <div className="d-flex justify-content-between ">
                <img src={location} alt="" />

                <p className="my-0 mx-2">Noida,India</p>
              </div>
              <div>
                <img src={edit} alt="" />
              </div>
            </div>
            <div>
              <p style={{ fontSize: "12px" }}>
                Your location will help us serve better and extend a
                personalised experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default FeedSection;
