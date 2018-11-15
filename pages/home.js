import { Component } from "react";

import Link from "next/link";

import Layout from "../components/Layout";
import Feed from "../components/Feed";

import unfetch from "isomorphic-unfetch";

class Home extends Component {
  state = {};

  static async getInitialProps(e) {
    let response = await unfetch("http://localhost:3000/api/music");
    let data = await response.json();

    return { data };
  }

  render() {
    return (
      <Layout>
        <div id="home">
          <div className="page-title">Recent Work</div>
          <Feed data={this.props.data} />
        </div>

        <style jsx>{`
          .page-title {
            text-align: center;
            font-size: 50px;
            margin: 30px 0;
          }

          .feed {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          }

          .feed-item {
            width: 25vw;
            height: 25vw;
            background: grey;
            margin: 20px;
            cursor: pointer;
          }

          .show.feed-item-content {
            opacity: 1;
          }

          .feed-item-content {
            text-align: center;
            color: white;
            height: 100%;
            opacity: 0;
            background: rgba(0, 0, 0, 0.3);
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
