import React from 'react';
import PropTypes from 'prop-types';

import SimpleForm from '../../layouts/SimpleForm'
import SignUpForm from '../../organisms/SignUpForm'
import ChildAppBar from '../../elements/ChildAppBar'
import LoginFooter from '../../elements/LoginFooter'

import signUpSequence from '../../../constants/signUpSequence';
import Router from 'next/router'

export default class Component extends React.Component {

  state = {
    activeStep: 0,
  }

  goToBack = () => {
    this.setState({
      activeStep: this.state.activeStep-1,
    },()=>{
      this.setState({
        inputInvalid: true,
      })
    })
  }

  handleStepChange = activeStep => {
    this.setState({ activeStep })
  }

  goToNext = () => {
    this.setState({
      activeStep: this.state.activeStep+1,
    },()=>{
      this.setState({
        inputInvalid: true,
      })
    })
  }

  render() {
    const { classes } = this.props

    return (
      <div>
        <SimpleForm 
          mainContent={
            <SignUpForm 
              activeStep={this.state.activeStep}
              goToNext={this.goToNext}
              handleStepChange={this.handleStepChange}
              goToBack={this.goToBack}
              data={signUpSequence}
              />
          }
          appBar={<ChildAppBar upFunc={this.state.activeStep == 0 ? ()=>Router.push('/login') :this.goToBack}/>}
          footer={<LoginFooter />}
        />
      </div>
    
    )
  }
}

Component.propTypes = {
  // classes: PropTypes.object.isRequired,
};
