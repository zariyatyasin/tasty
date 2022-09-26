import React from "react";
import "./header.css";
import "../style/global.css";
import Aos from "aos";
import { useEffect } from "react";
export default function Header() {
  useEffect(() => {
    Aos.init({ once: true, duration: 2000 });
  }, []);
  return (
    <div className="service container container2 section1">
      <div className="soc ">
        <div className="soc_left">
          <a href="" className="soc_fb">
            Facebook
          </a>

          <a href="" className="soc_fb">
            Instragram
          </a>
        </div>

        <div className="soc_right">
          <p className="soc_email">clein@serv.com</p>
          <p className="soc_num">
            <span className="color">+1 </span>999 888 444
          </p>
        </div>
      </div>
      <p className="span text"> Services</p>
      <div className="ser_header">
        <h1 data-aos="fade-right">Residential Cleaning</h1>
        <p data-aos="fade-left" className="ser_p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis ut
          laboriosam temporibus, earum dolor nihil nemo consectetur ullam
          beatae.{" "}
        </p>
      </div>

      <div data-aos="fade-left" className="ser_book">
        <div data-aos="fade-up" className="btn_book">
          <a href="#" className=" book_btn">
            Book Now
          </a>
        </div>

        <div className="book_item">
          <div className="book">
            <i className="bx bx-spray-can"></i>
            <p>Graden</p>
            <p className="book_p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium omnis sint{" "}
            </p>

            <div className="btn_next">
              <i className="bx bx-right-arrow-alt"></i>
            </div>
          </div>
          <div className="book">
            <i className="bx bx-car"></i>
            <p>Car Wash</p>
            <p className="book_p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium omnis sint{" "}
            </p>

            <div className="btn_next">
              <i className="bx bx-right-arrow-alt"></i>
            </div>
          </div>

          <div className="book">
            <i className="bx bx-leaf"></i>
            <p>landscaper</p>
            <p className="book_p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium omnis sint{" "}
            </p>
            <div className="btn_next">
              <i className="bx bx-right-arrow-alt"></i>
            </div>
          </div>

          <div className="book">
            <i className="bx bx-building-house"></i>
            <p>Commercial Cleaning</p>
            <p className="book_p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium omnis sint{" "}
            </p>
            <div className="btn_next">
              <i className="bx bx-right-arrow-alt"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
