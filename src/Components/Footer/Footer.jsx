import React, { useEffect } from "react";
import "./footer.css";
import video2 from "../../Assets/production_id_4651619 (2160p).mp4";
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css"; 

const Footer = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  return (
    <>
      <section className="footer">
        <div className="videoDiv">
          <video src={video2} loop autoPlay muted type="video/mp4"></video>
        </div>

        <div className="secContent container">
          <div className="contactDiv flex">
            <div data-aos="fade-up" className="text">
              <small>KEEP IN TOUCH</small>
              <h2>Travel with us</h2>
            </div>

            <div className="inputDiv flex">
              <input
                data-aos="fade-up"
                type="text"
                placeholder="Enter Email Address"
              />
              <button data-aos="fade-up" className="btn flex" type="submit">
                SEND <FiSend className="icon" />
              </button>
            </div>
          </div>

          <div className="footerCard flex">
            <div className="footerIntro flex">
              <div className="logoDiv">
                <a href="#" className="logo flex">
                  <MdTravelExplore className="icon" /> Drunken Tr@vels
                </a>
              </div>

              <div data-aos="fade-up" className="footerParagraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                saepe, accusantium ad suscipit ipsa deleniti provident repellat
                et sapiente, ratione iste molestias in.
              </div>

              <div data-aos="fade-up" className="footerSocials flex">
                <FaInstagram className="icon" />
                <FaFacebook className="icon" />
                <FaYoutube className="icon" />
                <FaTripadvisor className="icon" />
              </div>
            </div>

            <div className="footerLinks grid">
              <div
                data-aos="fade-up"
                data-aos-duration="4000"
                className="linkGroup"
              >
                <span className="groupTitle">OUR AGENCY</span>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Services
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Insurance
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Agency
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Tourism
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Payment
                </li>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="4000"
                className="linkGroup"
              >
                <span className="groupTitle">PARTNERS</span>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Bookings
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Rentcars
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  HostelWorld
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Trivago
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  TripAdvisor
                </li>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="4000"
                className="linkGroup"
              >
                <span className="groupTitle">LAST MINUTE</span>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  London
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Paris
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Maldives
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Europe
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Qatar
                </li>
              </div>
            </div>

            <div className="footerDiv flex">
              <small>BEST TRAVEL WEBSITE</small>
              <small>COPYRIGHTS RESERVED &#169;Paras2322</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
