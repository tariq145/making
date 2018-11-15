import { Component } from "react";

import { withRouter } from "next/router";
import Link from "next/link";

import Layout from "../components/Layout";
import Feed from "../components/Feed";

import dummyData from "../static/dummy";

class Player extends Component {
  state = {
    video: {},
    feedData: [],
    playing: false
  };

  async componentDidMount() {
    let response = await fetch("http://localhost:3000/api/music");
    let feedData = await response.json();

    this.setState({
      video: feedData[this.props.router.query.id],
      feedData
    });
  }

  async componentWillReceiveProps(nextProps) {
    let response = await fetch("http://localhost:3000/api/music");
    let feedData = await response.json();

    this.setState({
      video: feedData[this.props.router.query.id],
      feedData
    });
  }

  playVideo() {
    this.setState({
      playing: true
    });
  }

  render() {
    //VIDEO PLAYER
    let VideoPlayer = () => {
      if (this.state.playing) {
        return (
          <div id="video-player">
            <div className="player-detail" id="player-artist">
              {this.state.video.artist}
            </div>

            <div className="player-detail" id="player-title">
              {this.state.video.title}
            </div>
            <iframe
              width="100%"
              height="100%"
              src={
                "https://www.youtube.com/embed/" +
                this.state.video.videoUrl +
                "?autoplay=1&modestbranding=1&showinfo=0"
              }
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        );
      }

      return (
        <div id="video-player">
          <div className="player-detail" id="player-artist">
            {this.state.video.artist}
          </div>

          <div className="player-detail" id="player-title">
            {this.state.video.title}
          </div>
          <div
            className="video-play-button"
            onClick={this.playVideo.bind(this)}
          />
        </div>
      );
    };

    //MAIN COMPONENT
    if (this.state.video) {
      return (
        <Layout>
          <div id="player">
            <div id="video">
              <VideoPlayer />
              <div className="description-container">
                <div className="description-title">
                  {this.state.video.artist + " - " + this.state.video.title}
                </div>
                <div className="description-description">
                  {this.state.video.description}
                </div>
              </div>
            </div>
            <Feed data={this.state.feedData} />
          </div>

          <style global jsx>{`
            #player {
              margin: 0 30px;
            }

            #video {
              display: flex;
              margin-top: 80px;
              margin-bottom: 50px;
            }

            @media screen and (max-width: 1050px) {
              #player {
                margin: 0;
              }
              #video {
                margin-top: 0;
                flex-direction: column;
                text-align: center;
              }
            }

            #video-player {
              background: black;
              height: 33.75vw;
              width: 60vw;
              margin-right: 50px;
              position: relative;
            }

            @media screen and (max-width: 1050px) {
              #video-player {
                margin: 0;
                margin-bottom: 40px;
                width: 100vw;
                height: 56.25vw;
              }
            }

            .video-play-button {
              position: absolute;
              width: 50px;
              height: 50px;
              z-index: 2;
              background: red;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              cursor: pointer;
            }

            .description-container {
              width: 40vw;
            }

            @media screen and (max-width: 1050px) {
              .description-container {
                width: 100vw;
                margin-bottom: 30px;
              }
            }

            .description-title {
              font-size: 50px;
              margin-bottom: 30px;
            }

            .player-detail {
              position: absolute;
              z-index: -5;
              font-size: 50px;
              width: calc(60vw - 80px);
              text-align: center;
            }

            #player-artist {
              top: -35px;
            }

            #player-title {
              bottom: -35px;
            }

            #detail-singledate {
              display: none;
            }

            @media screen and (max-width: 1050px) {
              .player-detail {
                display: none;
              }
            }
          `}</style>
        </Layout>
      );
    }
    return <Loading />;
  }
}

let Loading = () => <div>Loading</div>;

export default withRouter(Player);
