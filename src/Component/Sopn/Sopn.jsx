import React from "react";
import "../style/global.css";
import "./spon.css";
import Aos from "aos";
export default function Sopn() {
  return (
    <div className="back">
      <div className="container">
        <div className="review">
          <div data-aos="zoom-in" className="review_left">
            <p className="review_title">Customer Review</p>

            <h2 className="review_title1">
              So great! <br></br>Very thorough and on time{" "}
            </h2>

            <p className="review_p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ut
              velit cum pariatur error, tempora ipsam repudiandae veritatis.
            </p>
          </div>

          <div className="review_right">
            <div className="review_right_wrapper">
              <div data-aos="zoom-in" className="img_item p1">
                <img src="img/p1.jpg" alt="" className="p1" />
              </div>
              <div data-aos="zoom-in" className="img_item p2">
                <img src="img/p2.jpg" alt="" className="p2" />
              </div>

              <div data-aos="zoom-in" className="img_item p3">
                <img src="img/p3.jpg" alt="" className="p3" />
              </div>

              <div data-aos="zoom-in" className="img_item p4">
                <img src="img/p4.png" alt="" className="" />
              </div>

              <div data-aos="zoom-in" className="img_item p5">
                <img src="img/p5.jpeg" alt="" className="" />
              </div>

              <div data-aos="zoom-in" className="img_item p6">
                <img src="img/p6.jpg" alt="" className="p6" />
              </div>

              <div data-aos="zoom-in" className="img_item p7">
                <img src="img/p7.jpg" alt="" className="p7" />
              </div>

              <div data-aos="zoom-in" className="img_item p8">
                <img src="img/p8.jpg" alt="" className="p8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
