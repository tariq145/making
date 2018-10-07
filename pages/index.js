import { Component } from "react";

import Head from "next/head";


class App extends Component {
   state = {
      date: '11.11.2018',
      arr: ['t', 's', 'a']
   }

   submit(event) {
      event.preventDefault();
      console.log(event.target.children[0].value);
      event.target.children[0].value = ''
   }

   render() {
      return (
         <div>
            <Head>
               <meta name="viewport" content="width=device-width, initial-scale=1" />
               <meta charSet="utf-8" />
            </Head>
            <div className='body'>
               <div className="bands">
                  <div className="band"></div>
                  <div className="band"></div>
                  <div className="band"></div>
                  <div className="band"></div>
               </div>
               <div className="vertical-date">
                  <ul>
                     {this.state.date.split('').map((val, key) =>
                        <li>{val}</li>
                     )}
                  </ul>
               </div>

               <div className="dates">
                  {this.state.arr.map((val, key) =>
                     <div className='date'>{this.state.date}</div>
                  )}
               </div>
               <div className="logo"></div>
               <div className="center">
                  <div className="text">Comming Soon</div>
                  {/* <form action="submit" onSubmit={this.submit}>
                  <input type="text" name="email" id="email" placeholder="Email." />
               </form> 
               <div className="input-text">Enter your email and well holla at you when making is made.</div>
               */}
               </div>


               <style jsx>{`
               @font-face{
                  font-family: main;
                  src: url('/static/fonts/Helvetica Neu Bold.ttf');
               }

               .body{
                  width: 100%;
                  height: 95vh;
                  display:flex;
                  justify-content: center;
                  align-items: center;
                  font-family: main;
               }

               .bands, .logo, .dates, .vertical-date {
                  position: absolute;
               }

               .vertical-date {
                  left:0;
                  top: 0;
                  font-size: 70px;
                  height: 100%;
                  display: none;
                  align-items:center;
                  margin: 0 0 0 15px;
               }

               .vertical-date ul {
                  list-style-type: none;
                  margin:0;
                  padding:0;
               }

               .dates {
                  bottom: 0;
                  right: 0;
                  margin: 10px;
                  width: 100%;
                  text-align: center;
               }
               
               .date {
                  font-size: 30px;
                  margin-top: -50px;
               }

               .bands {
                  opacity: 0.8;
                  width: 100%;
                  top:0;
               }

               .band {
                  float:right;
                  width: 25%;
                  height: 10px;sdwag
                  background: #283D7F;
               }
               .band:nth-child(1){
                  background: #E2CC00;
               }
               .band:nth-child(2){
                  background: #DA3231;
               }
               .band:nth-child(3){
                  background: #E16991;
               }

               .center {
                  text-align: center;
               }

               .text {
                  font-size: 50px;
               }

               .input-text {
                  font-size: 50px;
               }

               input[type=text] {
                  width: 90%;
                  font-size: 30px;
                  margin: 20px auto;
                  padding: 30px 10px;
               }

               // THIS IS A FOR SMALLER SCREENS
               @media screen and (min-width: 1050px){
                  .vertical-date{
                     display: flex;
                  }
                  .dates {
                     text-align: right;
                  }
                  .date {
                     font-size: 30px;
                  }

                  .text {
                     font-size: 100px;
                  }

                  input[type=text] {
                     padding: 10px;
                     font-size: 20px;
                  }

                  .input-text { 
                     font-size: 15px;
                  }
               }
               

            `}</style>
            </div>
         </div>
      );
   }
}

export default App;