import { Component } from "react";

import Link from "next/link";

import dummyData from "../static/dummy";

let Feed = props => (
  <div id="feed">
    {props.data.map((obj, key) => (
      <Link href={`/player?id=${key}`} key={key}>
        <div
          className="feed-item"
          style={{
            background: `url(${
              props.data[key].imgUrl
            }) no-repeat center center`,
            backgroundSize: "cover"
          }}
        >
          <div
            className="feed-item-content"
            onMouseEnter={showContent}
            onMouseLeave={hideContent}
          >
            <div className="feed-content-container">
              <div className="feed-item-artist">
                <span>{props.data[key].artist}</span>
              </div>
              <div className="feed-item-title">
                <span>{props.data[key].title}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    ))}
    <style jsx>{`
      #feed {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
      }

      .feed-item {
        width: 20vw;
        height: 20vw;
        min-width: 400px;
        min-height: 400px;
        background: grey;
        cursor: pointer;
        margin-bottom: 50px;
      }

      .feed-item:last-of-type {
        margin-bottom: 0;
      }

      @media screen and (max-width: 930px) {
        .feed-item {
          min-width: 600px;
          min-height: 600px;
        }
      }

      @media screen and (max-width: 650px) {
        .feed-item {
          width: 100vw;
          height: 100vw;
          min-width: 200px;
          min-height: 200px;
          margin-bottom: 30px;
        }
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
  </div>
);

let showContent = e => {
  e.target.classList.add("show");
};

let hideContent = e => {
  e.target.classList.remove("show");
};

export default Feed;
