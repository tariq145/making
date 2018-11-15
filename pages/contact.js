import { Component } from "react";

import Layout from "../components/Layout";

//Initial form
let initialForm = {
  name: "",
  email: "",
  subject: "",
  description: ""
};

class Contact extends Component {
  state = {
    form: initialForm
  };

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ form: initialForm });
  }

  handleInput(e) {
    let form = { ...this.state.form };
    form[e.target.name] = e.target.value;

    this.setState({
      form
    });
  }

  render() {
    return (
      <Layout>
        <div id="contact">
          <div className="contact-container">
            <div className="contact-title">Contact</div>
            <form>
              <input
                name="name"
                onChange={this.handleInput.bind(this)}
                value={this.state.form.name}
                placeholder="Name"
                type="text"
              />
              <input
                name="email"
                onChange={this.handleInput.bind(this)}
                value={this.state.form.email}
                placeholder="Email"
                type="text"
              />
              <input
                name="subject"
                onChange={this.handleInput.bind(this)}
                value={this.state.form.subject}
                placeholder="Subject"
                type="text"
              />
              <textarea
                name="description"
                onChange={this.handleInput.bind(this)}
                value={this.state.form.description}
                placeholder="Description"
                id="contact-description"
              />
              <button onClick={this.handleSubmit.bind(this)}>Send</button>
            </form>
          </div>
        </div>
        <style jsx>{`
          #contact {
            display: flex;
            justify-content: center;
            height: 80%;
            align-items: center;
          }

          .contact-title {
            font-size: 50px;
            margin-bottom: 30px;
          }

          form {
            display: flex;
            flex-direction: column;
            width: 80vw;
          }

          @media screen and (min-width: 850px) {
            .contact-title {
              text-align: center;
            }

            form {
              width: 60vw;
            }
          }

          @media screen and (min-width: 1050px) {
            .contact-title {
              text-align: center;
            }

            form {
              width: 40vw;
            }
          }

          input[type="text"] {
            font-family: Bebas;
            margin-bottom: 10px;
            width: calc(100% - 40px);
            height: 20px;
            padding: 15px 20px;
            border: 2px solid black;
            outline: none;
            font-size: 25px;
          }

          textarea {
            font-family: Bebas;
            resize: none;
            width: calc(100% - 38px);
            height: 200px;
            padding: 20px;
            margin-bottom: 10px;
            border: 2px solid black;
            outline: none;
            font-size: 25px;
          }

          button {
            cursor: pointer;
            font-family: Bebas;
            font-size: 25px;
            background: black;
            border: none;
            width: calc(100% + 5px);
            padding: 10px;
            color: white;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Contact;
