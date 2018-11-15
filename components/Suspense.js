import { Component } from "react";

class Suspense extends Component {

   constructor(props) {
     super(props);
     this.state = {
       error: null
     };
   }
 
   componentDidCatch(e) {
     this.setState({ error: e });
   }
   
   render() {
     if (this.state.error) {
       return this.props.fallback;
     }
     return this.props.children;
   }
 }