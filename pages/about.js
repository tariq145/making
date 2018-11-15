import { Component } from "react";

import Layout from "../components/Layout";

class About extends Component {
  render() {
    return (
      <Layout>
        <div id="about">
          <div className="about-container">
            <div className="about-img" />
            <div className="about-content">
              <div className="about-title">About us</div>
              <div className="about-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                expedita officia incidunt architecto, vero, eos veniam quam ipsa
                similique magnam quia! Veritatis, minima officiis aspernatur
                maxime optio odit, unde nesciunt doloribus consectetur eligendi
                minus qui. Corrupti minima aliquid doloribus ipsam?
              </div>
            </div>
          </div>
        </div>

        <style global jsx>{`
          #detail-text {
            display: none;
          }
        `}</style>

        <style jsx>{`
          #about {
            display: flex;
            height: 95vh;
          }

          .about-container {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 95%;
            margin: 0 auto;
          }

          @media screen and (max-width: 650px) {
            .about-container {
              flex-direction: column-reverse;
            }
          }

          .about-img {
            width: 40%;
            padding-top: 40%;
            background: black;
          }

          .about-content {
            width: 50%;
            margin-left: 30px;
          }

          @media screen and (max-width: 650px) {
            .about-content {
              width: 100%;
              margin: 0;
            }

            .about-img {
              width: 100%;
              padding-top: 100%;
            }
          }

          .about-title {
            margin-bottom: 20px;
            font-size: 50px;
          }
        `}</style>
      </Layout>
    );
  }
}

export default About;
