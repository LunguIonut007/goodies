import React from 'react'
import { Tab, Nav, NavItem } from 'react-bootstrap'
import classnames from 'classnames'
import LogIn from './LoginComponents/LogInComponent'
import Register from './LoginComponents/RegisterComponent'
import { I18n } from 'react-redux-i18n'

export default class Template extends React.Component {
  componentWillMount () {
    this.setState({ entity: false })
  }
  animate = () => {
    this.setState({ entity: !this.state.entity })
  }
  render () {
    return (
      <div className='hero-image'>
        <div className='hero-container'>
          <div className={classnames('section', { 'section-in': this.state.entity })}>
            <div className='signInLogInContainer'>
              <div className={classnames('signInLogInPanel', { 'signInLogInPanel-in': this.state.entity })}>
                <h1>
                  <div className='div'>
                    <div className='donator'>{I18n.t('donor')}</div>
                    <div className='cause'>{I18n.t('cause')}</div>
                  </div>
                </h1>
                <div className={classnames('formContainer')}>
                  <Tab.Container id='left-tabs-example' defaultActiveKey={1}>
                    <div className='tabContainer'>
                      <div className>
                        <Nav bsStyle='tabs' className='navs'>
                          <NavItem eventKey={1}>
                            Log In
                          </NavItem>
                          <NavItem eventKey={2}>
                            {I18n.t('register')}
                          </NavItem>
                        </Nav>
                      </div>
                      <Tab.Content animation>
                        <Tab.Pane eventKey={1} bsClass='container' >
                          <LogIn entity={this.state.entity} />
                        </Tab.Pane>
                        <Tab.Pane eventKey={2} >
                          <Register entityType={this.state.entity ? 'cause' : 'donor'} />
                        </Tab.Pane>
                      </Tab.Content>
                    </div>
                  </Tab.Container>
                </div>
                <div onClick={() => this.animate()} className='donorToCause'>
                  <div className='changeButton'>Click</div>
                </div>
                <div onClick={() => this.animate()} className='causeToDonor'>
                  <div className='changeButton'>Click</div>
                </div>
                <div className='messageCause'>
                  {this.state.entity ? I18n.t('login.questionCause') : I18n.t('login.questionDonor')}
                </div>
              </div>
            </div>

          </div>
          <div className='hero-donor'>
            <div className='hero-donor-container'>
              <h1>Goodiees <br />{I18n.t('login.causeMotto')}</h1>
              <p>{I18n.t('login.causeDesc')}</p>
            </div>
          </div>
          <div className='hero-cause'>
            <div className='hero-cause-container'>
              <h1>Goodiees <br />{I18n.t('login.donorMotto')}</h1>
              <p>{I18n.t('login.donorDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
Template.propTypes = {
  navHeight: React.PropTypes.number,
  children: React.PropTypes.object
}
