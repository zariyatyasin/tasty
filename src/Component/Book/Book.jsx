import "./book.css";
import "../style/global.css";
import Aos from "aos";
import { useEffect } from "react";
export default function Book() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="container">
      <div className="booking_m">
        <div className="booking">
          <div className="booking_left">
            <div
              data-aos="fade-right"
              ata-aos-anchor=".other-element"
              className="booking_left_box"
            >
              {" "}
              <img src="img/bubble.png" alt="" className="booking_svg" />
              <div className="booking_box">
                <div className="booking_off">
                  <p className="booking_price">For Office</p>
                  <h2 className="booking_pri">
                    $133<span className="booking_month">/mon</span>
                  </h2>
                </div>
                <div className="booking_off">
                  <p className="booking_price">For Home</p>
                  <h2 className="booking_pri">
                    $85<span className="booking_month">/mon</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" className="booking_right">
            <h1 className="h2">
              <span className="color">Book </span> a Cleaing Service Today
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              repellat corporis! Cupiditate autem omnis alias quam. Ut dicta
              architecto!
            </p>
            <div className="btn_book">
              <a href="#" className=" book_btn">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
