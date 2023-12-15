import React from "react";
import cardImg from "../../assets/Rectangle 5.png";
import profImg from "../../assets/Rectangle 3 (1).png";
import vis from "../../assets/icon/action/visibility_24px_outlined.svg";
import share from "../../assets/baseline-share-24px.svg";
import "./Card.css";

const Card = () => {
  return (
    <div className="my-3 border card_mainDiv">
      <div className="w-100">
        <img src={cardImg} alt="" className="w-100" />
      </div>
      <div className="d-flex flex-column py-3 px-3">
        <div>
          <h6>✍️ Article</h6>
        </div>
        <div className="d-flex justify-content-between align-items-center text-wrap w-100">
          <h3 className="text-wrap" style={{ width: "90%" }}>
            What if famous brands had regular fonts? Meet RegulaBrands!
          </h3>
          <h3 className=" text-end" style={{ width: "10%" }}>
            ...
          </h3>
        </div>
        <div>
          <p>
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="card_profDet d-flex align-items-center">
            <img src={profImg} alt="" className="rounded-circle" />
            <div className="d-flex flex-column">
              <p className="my-0 mx-2 fw-bold">Sarthak Sharma</p>
              <p className="my-1 card_view mx-2">5.5k views</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="justify-content-between align-items-center mx-3 card_deskViews">
              <img
                src={vis}
                alt=""
                style={{ objectFit: "contain", height: "12px" }}
              />
              <p className="my-0 " style={{ fontSize: "12px" }}>
                1.4k views
              </p>
            </div>
            <button
              style={{
                backgroundColor: "#EDEEF0",
                width: "auto",
                height: "38px",
              }}
              className="border border-0 d-flex justify-content-between align-items-center px-2"
            >
              <img src={share} alt="" />
              <span className="card_Share">Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
