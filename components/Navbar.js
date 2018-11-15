import Link from "next/link";

const Navbar = () => (
  <div id="nav">
    <div className="logo">
      <Link href="/home">
        <a>
          <img width="160px" src="/static/imgs/logo-white.png" alt="" />
        </a>
      </Link>
    </div>
    <div className="nav-items">
      <Link href="/home">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </div>

    <style jsx>{`
      #nav {
        background: black;
        color: white;
        width: 100%;
        position: fixed;
        z-index: 10;
      }

      .logo {
        margin: -18px 15px;
      }

      .nav-items {
        position: absolute;
        right: 20px;
        top: 15px;
      }

      .nav-items a {
        text-decoration: none;
        color: white;
        margin: 0 20px;
        font-size: 25px;
        transition: text-stroke 1s;
      }

      .nav-items a:hover {
        color: black;
        -webkit-text-stroke-width: 0.5px;
        -webkit-text-stroke-color: white;
      }
    `}</style>
  </div>
);

export default Navbar;
