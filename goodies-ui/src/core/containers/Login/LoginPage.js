import React from 'react';
import { Tab, Nav, NavItem } from 'react-bootstrap';
import classnames from 'classnames';
import LogIn from './LoginComponents/LogInComponent';
import Register from './LoginComponents/RegisterComponent';


// TODO
// simple validation for error design
// i18n
// validation kommio
//
export default class Template extends React.Component {

  componentWillMount () {
    this.setState({ entity: false })
  }
  animate = () => {
    this.setState({ entity: !this.state.entity });
  }
  render() {
    return (
      <div className="hero-image">
        <div className="hero-container">
          <div className={classnames('section', { 'section-in': this.state.entity })}>
            <div className="signInLogInContainer">
              <div className={classnames('signInLogInPanel', { 'signInLogInPanel-in': this.state.entity })}>
                <h1>
                  <div className="div">
                    <div className="donator">Donator</div>
                    <div className="cause">Cause</div>
                  </div>
                </h1>
                <div className={classnames('formContainer')}>
                  <Tab.Container id="left-tabs-example" defaultActiveKey={1}>
                    <div className="tabContainer">
                      <div className>
                        <Nav bsStyle="tabs" className="navs">
                          <NavItem eventKey={1}>
                            Log In
                          </NavItem>
                          <NavItem eventKey={2}>
                            Register
                          </NavItem>
                        </Nav>
                      </div>
                      <Tab.Content animation>
                        <Tab.Pane eventKey={1} bsClass="container" >
                          <LogIn entity={this.state.entity}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey={2} >
                         <Register/>
                        </Tab.Pane>
                      </Tab.Content>
                    </div>
                  </Tab.Container>
                </div>
                <div onClick={() => this.animate()} className="donorToCause">
                  <div className="changeButton">Click Here</div>
                </div>
                <div onClick={() => this.animate()} className="causeToDonor">
                  <div className="changeButton">Click Here</div>
                </div>
                <div className="messageCause">
                  {this.state.entity ? 'Do you want to help somebody?' : 'Do you want some help?'}
                </div>
              </div>
            </div>

          </div>
          <div className="hero-donor">
            <div className="hero-donor-container">
              <h1>Goodiees <br />We only have what we give.</h1>
              <p>Some words about how good you are and how helping others is amazing Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, eum est ad vel reprehenderit, at quod, rerum molestias ducimus asperiores, earum facilis nobis? Corporis ex illo eveniet omnis, libero fugiat!</p>
            </div>
          </div>
          <div className="hero-cause">
            <div className="hero-cause-container">
              <h1>Goodiees <br />No one has ever become poor by giving.</h1>
              <p>Some words about how good you are and how helping others is amazing Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, eum est ad vel reprehenderit, at quod, rerum molestias ducimus asperiores, earum facilis nobis? Corporis ex illo eveniet omnis, libero fugiat!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Template.propTypes = {
  navHeight: React.PropTypes.number,
  children: React.PropTypes.object,
};
