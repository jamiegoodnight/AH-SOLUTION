import React from "react";
import { Form, Input } from "reactstrap";
import { TweenLite, Power1 } from "gsap";

class TechList extends React.Component {
  render() {
    return (
      <div className="login-wrapper">
        <Form>
          <img src="https://i.imgur.com/qp70wn0.png" alt="Logo" />
          <div>
            <Input
              placeholder="username"
              name="username"
              className="login-input"
            />
            <i class="fas fa-user" />
          </div>
          <div>
            <Input
              type="password"
              placeholder="password"
              name="password"
              className="login-input"
            />
            <i class="fas fa-key" />
          </div>
          <div>
            <div className="btn-login shd">
              <h3>GO</h3>
            </div>
            <i class="fas fa-sign-in-alt" />
          </div>
        </Form>
        <div className="unlocked" onClick={this.makeFriends}>
          <i class="fas fa-unlock-alt" />
        </div>
        <div className="loggedin-splash" />
      </div>
    );
  }
  componentDidMount() {
    const Form = document.querySelector("Form");
    TweenLite.to(Form, 2.5, { y: -650, ease: Power1.easeOut });
  }

  makeFriends = e => {
    e.preventDefault();
    this.props.history.push("/fishfriends");
  };
}

export default TechList;
