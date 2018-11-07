import { Component } from 'react';
import { withRouter } from "next/router";

import Layout from "../components/Layout";

import dummyData from "../static/dummy";

class Player extends Component {
  state = {
    video: {},
  }

  componentDidMount(){
    this.setState({
      video: dummyData[this.props.router.query.id],
    })
  }

  render(){
    return (
      <Layout>
        <h1>{this.state.video.title}</h1>
        <p>{this.state.video.description}</p>
      </Layout>
    );
  }
} 

export default withRouter(Player);