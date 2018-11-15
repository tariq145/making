import Navbar from "./Navbar";

const Layout = props => (
  <div>
    <Navbar />
    <div className="content-container">
      {props.children}

      <div id="detail-singledate" className="page-detail">
        2018
      </div>

      <div id="detail-text" className="page-detail">
        Stockholm, Sweden
      </div>

      <div id="detail-m" className="page-detail">
        <div>
          <img width="300px" src="/static/imgs/detail-m.png" alt="" />
        </div>
        <div>
          <img width="300px" src="/static/imgs/detail-m.png" alt="" />
        </div>
        <div>
          <img width="300px" src="/static/imgs/detail-m.png" alt="" />
        </div>
        <div>
          <img width="300px" src="/static/imgs/detail-m.png" alt="" />
        </div>
      </div>
      <div id="detail-dates" className="page-detail">
        <div>21.30.2018</div>
        <div>21.30.2018</div>
        <div>21.30.2018</div>
      </div>
    </div>
    <style jsx global>{`
      @font-face {
        font-family: Bebas;
        src: url("/static/fonts/BebasNeue-Regular.otf");
      }

      @font-face {
        font-family: corpGames;
        src: url("/static/fonts/CorporationGames.otf");
      }

      body {
        margin: 0;
        font-family: Bebas;
      }

      .content-container {
        padding-top: 60px;
        position: relative;
        height: calc(100vh - 59px);
      }

      @media screen and (max-width: 1050px) {
        .page-detail {
          display: none;
        }
      }

      #detail-singledate {
        position: fixed;
        font-size: 150px;
        top: 120px;
        right: 20px;
        z-index: -5;
        font-family: corpGames;
      }

      #detail-text {
        position: fixed;
        width: 100%;
        text-align: center;
        top: 600px;
        z-index: -5;
      }

      #detail-m {
        position: fixed;
        top: -80px;
        left: -50px;
        z-index: -5;
      }

      #detail-m > div {
        margin-bottom: -40px;
      }

      #detail-dates {
        position: fixed;
        bottom: 0;
        right: 0;
        z-index: -1;
        font-size: 50px;
      }

      #detail-dates > div {
        margin-top: -40px;
      }
    `}</style>
  </div>
);

export default Layout;
