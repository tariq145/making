import { Component } from 'react';
import { withRouter } from "next/router";

import Layout from "../components/Layout";

import dummyData from "../static/dummy";

class Player extends Component {

  render(){
    return (
      <Layout>
        <h1>{dummyData[this.props.router.query.id].title}</h1>
        <p>{dummyData[this.props.router.query.id].description}</p>
      </Layout>
    );
  }
} 

export default withRouter(Player);