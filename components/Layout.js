import Navbar from "./Navbar";

const Layout = (props) => (
   <div>
      <Navbar/>
      {props.children}

      <style jsx global>{`
         body {
            margin: 0;
         } 
      `}</style>
   </div>
);

export default Layout;