import { Component } from "react";

import Layout from "../components/Layout";

class About extends Component {
   render() {
      return(
         <Layout>
            <div id="about">
               <div className="about-container">
                  <div className="about-img"></div>
                  <div className="about-content">
                     <div className="about-title">About us</div>
                     <div className="about-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro expedita officia incidunt architecto, vero, eos veniam quam ipsa similique magnam quia! Veritatis, minima officiis aspernatur maxime optio odit, unde nesciunt doloribus consectetur eligendi minus qui. Corrupti minima aliquid doloribus ipsam?
                     </div>
                  </div>
               </div>
            </div>
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

               .about-img {
                  width: 40%;
                  padding-top: 40%;
                  background: black;
               }

               .about-content {
                  flex-basis 50%;
                  margin-left: 30px;
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