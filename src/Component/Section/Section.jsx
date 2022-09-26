import "./section.css";
import "../style/global.css";
import React from "react";

export default function Section() {
  return (
    <div className="container">
      <div className="about">
        <div className="about_left">
          <img src="img/stu.jpg" alt="" className="about_img" />
        </div>

        <div className="about-middle">
          <h2 className="about_title">About us</h2>
          <h2 className="about_sub">We are in Cleaning</h2>
          <p className="header_p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, ad, cumque consequuntur quasi nisi animi fuga expedita
          </p>

          <div className="about_check">
            <div className="about_check_box">
              <i class="bx bx-check-square"></i>{" "}
              <p className="about_check_p">Best for home and room</p>
            </div>
            <div className="about_check_box">
              <i class="bx bx-check-square"></i>{" "}
              <p className="about_check_p">Best for home and room</p>
            </div>
            <div className="about_check_box">
              <i class="bx bx-check-square"></i>{" "}
              <p className="about_check_p">Best for home and room</p>
            </div>
          </div>
        </div>

        <div className="about_right">
          <div className="about_right_box">
            <span className="about_right_h">21</span>{" "}
            <p className="about_right_p">
              Years <br></br> Experience
            </p>
          </div>
          <div className="about_right_box">
            <span className="about_right_h">19</span>{" "}
            <p className="about_right_p">
              Years <br></br> Employees
            </p>
          </div>

          <div className="about_right_box">
            <span className="about_right_h">17</span>{" "}
            <p className="about_right_p">
              Years <br></br> Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
