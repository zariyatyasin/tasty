import "../style/style.css";
import "../style/global.css";
import "./nav.css";
import Aos from "aos";
import { useState } from "react";
export default function Nav({ menu, setMenu }) {
  const add = document.querySelector("drop");
  const [nav, setnav] = useState(false);
  const scroll = () => {
    if (window.scrollY >= 70) {
      setnav(true);
    } else {
      setnav(false);
    }
  };

  window.addEventListener("scroll", scroll);
  return (
    <div className="main">
      <div className={nav ? "header active_Nav " : "header"}>
        <div className="nav flex">
          <a href="#" className="nav_log">
            Rez<span className="span">king</span>
          </a>

          <div className="nav_items ">
            <ul className="flex mb-down">
              <li className="nav_list">
                <a href="#" className="nav_link">
                  Home
                </a>
              </li>
              <li className="nav_list">
                <a href="#" className="nav_link">
                  services
                </a>
              </li>
              <li className="nav_list">
                <a href="#" className="nav_link">
                  coustomer
                </a>
              </li>
              <li className="nav_list">
                <a href="#" className="nav_link">
                  about
                </a>
              </li>
              <li className="nav_list">
                <a href="#" className="nav_link">
                  blog
                </a>
              </li>
              <li className="nav_list">
                <a href="#" className="nav_link btn-res">
                  register now
                </a>
              </li>
            </ul>
          </div>

          <div className={"ham_menu " + (menu && "active")}>
            <div onClick={() => setMenu(!menu)}>
              <span className="ham-1"></span>
              <span className="ham-2"></span>
              <span className="ham-3"></span>
            </div>
          </div>
        </div>

        <div className={!menu && "drop"}>
          <div className="drop_menu">
            <a href="#">Home</a>
            <a href="#">services</a>
            <a href="#">coustomer</a>
            <a href="#">about</a>
            <a href="#">blog</a>
            <a href="#">register now</a>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="header_wrapper">
          <div className="header_left">
            <div data-aos="fade-right" className="header_left_contant">
              <h1>
                <span className="h1_c color">You are </span>in good hands
              </h1>

              <div className="header_text">
                <div className="header_text_left">
                  <i className="bx bx-star i1"></i>
                  <i className="bx bx-star i2"></i>
                  <i className="bx bx-star i3"></i>
                </div>
                <div className="header_text_right">
                  <p>
                    Professional <span className="color">Cleaning</span>
                    Servince For Your Home And Company
                  </p>
                </div>
              </div>
              <div className="header_btn">
                <a href="#" className="btn btn1">
                  About Us
                </a>
                <a href="#" className="btn btn2">
                  Service
                </a>
              </div>
            </div>
          </div>
          <div className="header_right">
            <div className="header_img1">
              <img
                data-aos="zoom-in"
                src="img/person.png"
                alt=""
                className="header_img"
              />
              <img
                data-aos="flip-left"
                src="img/price.png"
                alt=""
                className="header_img2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
