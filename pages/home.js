import { Component } from "react";

import Layout from "../components/Layout";

class Home extends Component {

  showContent(e) {
    e.target.classList.add('show');
  }

  hideContent(e) {
    e.target.classList.remove('show');
  }

   render() {
      return(
         <Layout>
            <div id="home">
               <div className="page-title">
                  Recent Work
               </div>
               <div className="feed">
                  {dummyData.map( (obj,key) => 
                      <div className="feed-item" key={key} 
                      >
                        <div className="feed-item-content"
                        onMouseEnter={this.showContent}
                        onMouseLeave={this.hideContent}
                        >
                          <div className="feed-content-container">
                            <div className="feed-item-artist">
                              <span>{dummyData[key].artist}</span>
                            </div>
                            <div className="feed-item-title">
                              <span>{dummyData[key].title}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                  )}
                </div>
            </div>

            <style jsx>{`
               .page-title {
                  text-align: center;
                  font-size: 40px;
               }

               .feed {
                 display: flex;
                 flex-wrap: wrap;
                 justify-content: space-around;
               }

               .feed-item {
                 width: 400px;
                 height: 400px;
                 background: red;
                 margin: 20px;
               }
               
               .show.feed-item-content {
                 opacity: 1;
               }

               .feed-item-content {
                 text-align: center;
                 color: white;
                 height: 100%;
                 opacity: 0;
                 background: rgba(0,0,0, .3);
                 transition: opacity 0.5s;
                 position: relative;
               }

               .feed-content-container {
                 position: absolute;
                 left: 50%;
                 top: 50%;
                 transform: translate(-50%, -50%);
               }

               .feed-item-artist {
                 font-size: 40px;
               }

               .feed-item-title {
                 font-size: 20px;
               }
            `}</style>
         </Layout>
      );
   }
}

export default Home;


const dummyData = [
   {
     title: "A title",
     artist: "An Artist",
     description: "This is the description",
     type: "Type",
     videoUrl: "Video url",
     imgUrl: "Img url",
     pubDate: "Pubdate",
   },
   {
      title: "A title",
      artist: "An Artist",
      description: "This is the description",
      type: "Type",
      videoUrl: "Video url",
      imgUrl: "Img url",
      pubDate: "Pubdate",
    },
    {
      title: "A title",
      artist: "An Artist",
      description: "This is the description",
      type: "Type",
      videoUrl: "Video url",
      imgUrl: "Img url",
      pubDate: "Pubdate",
    },
    {
      title: "A title",
      artist: "An Artist",
      description: "This is the description",
      type: "Type",
      videoUrl: "Video url",
      imgUrl: "Img url",
      pubDate: "Pubdate",
    },
    {
      title: "A title",
      artist: "An Artist",
      description: "This is the description",
      type: "Type",
      videoUrl: "Video url",
      imgUrl: "Img url",
      pubDate: "Pubdate",
    },
    {
      title: "A title",
      artist: "An Artist",
      description: "This is the description",
      type: "Type",
      videoUrl: "Video url",
      imgUrl: "Img url",
      pubDate: "Pubdate",
    },
];