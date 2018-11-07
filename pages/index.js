import { Component } from "react";

import Head from "next/head";
import Link from "next/link";

class App extends Component {

   render() {
      return (
         <div id="main-index">
            <div className="banner">
               <div className="logo-text">I be poppin pilles man i feel just like a rockstar</div>
               <div className="logo">
                  <img src="/static/imgs/logo.png" alt=""/>
               </div>
            </div>
            <Link href="#">
               <div className="enter-button">
                  Enter the site
               </div>
            </Link>
            <style jsx global>{`
               body {
                  margin: 0;
               }
            `}</style>

            <style jsx>{`
               #main-index {
                  height: 100vh;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  text-transform: uppercase;
               }

               .logo img {
                  width: 100%;
                  max-width: 700px;
               }

               .banner {
                  text-align: center;
               }

               .enter-button {
                  color: white;
                  background: black;
                  margin-top: 100px;
                  padding: 10px 20px;
                  border: 1px solid rgba(0,0,0, 1);
                  font-size: 25px;
                  cursor: pointer;
               }
            `}</style>
         </div>
      );
   }
}

export default App;