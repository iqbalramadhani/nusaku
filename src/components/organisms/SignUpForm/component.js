import React from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import SwipeableViews from 'react-swipeable-views'

import Button from '../../elements/Button'
import Typo from '../../elements/Typo'
import InputField from '../../elements/InputField'

import VerificationOTP from '../VerificationOTP'
import LoginOptions from '../LoginOptions'

import axios from 'axios'
import {BaseUrl, NUSAKU_TOKEN} from '../../../constants/value'
import { isEmpty, isInvalidEmailFormat, isLongEnough, isEqual } from '../../../utils/formValidator'  

const Message = {
  INVALID_EMAIL_FORMAT: 'Email yang anda masukkan harus sesuai format',
  NOT_LONG_ENOUGH_PASSWORD: 'Kata sandi miminal 8 karakter',
  NOT_IDENTIC_PASSWORD: 'Kata sandi yang dimasukkan tidak sama',
}

export default class Component extends React.Component {

  state = {

    countdownStart: false,

    email:'',

    firstName: '',
    lastName: '',

    password:'',
    passwordConfirm:'',

    username:'',

    phone:'',

    inputInvalid : true,

    errorMessage: '',
  }

  handleNext = () => {
    const name = this.props.data[this.props.activeStep].inputs[0].name

    switch(name){
      case 'email':
      case 'username':
      case 'phone':
        this.checkAvailability(name)
        break
      default:
        this.goToNext()
    }
  }

  goToNext = () => {
    this.props.goToNext()
    this.setState({errorMessage: '',})
  }

  onPhoneNumberChange = () => {
    this.setState({countdownStart: false}, this.goToBack())
  }

  goToBack = () => {
    this.props.goToBack()
    this.setState({errorMessage: '',})
  }

  handleStepChange = activeStep => {
    this.props.handleStepChange(activeStep)
  }

  onInputChange = (e)=>{
    const name = e.target.name
    this.setState({
      [name] : e.target.value,
    },
    () => {
      this.setState({
        inputInvalid: this.inputValidation(name)
      })
    })
  }

  inputValidation = (name) => {
    let isInvalid = true
    switch(name){
      case 'email' : 
        isInvalid = this.emailValidation()
        break
      case 'firstName':
      case 'lastName':
        isInvalid = this.nameValidation()
        break
      case 'password' :
      case 'passwordConfirm' :
        isInvalid = this.passwordValidation()
        break
      default:
        isInvalid = false
        break
    }

    return (
      isEmpty(this.state[name]) || isInvalid
    )
  }

  emailValidation = () => {
    if(isInvalidEmailFormat(this.state.email)){
      this.setState({errorMessage: Message.INVALID_EMAIL_FORMAT})
    }else{
      this.setState({errorMessage: ''})
    }
    return isInvalidEmailFormat(this.state.email)
  }

  nameValidation = () => {
    return isEmpty(this.state.firstName) || isEmpty(this.state.lastName)
  }

  passwordValidation = () => {
    const {password, passwordConfirm} = this.state

    if(!isLongEnough(password, 8)){
      this.setState({errorMessage: Message.NOT_LONG_ENOUGH_PASSWORD})
    }else if(!isEqual(password, passwordConfirm)){
      this.setState({errorMessage: Message.NOT_IDENTIC_PASSWORD})
    }else{
      this.setState({errorMessage: ''})
    }

    return isEmpty(password) || isEmpty(passwordConfirm) || !isLongEnough(password, 8) || !isEqual(password, passwordConfirm)
  }

  async checkAvailability(name){
    try {
      const response = await axios({
        method: 'post',
        url: BaseUrl.ACCOUNT+'/auth/checkUser',
        data: {
          user:{
            name: name,
            value: this.state[name],
          }
        }
      })

      if(name == 'phone') {
        this.sendOTP()
      }else{
        this.goToNext()
      }
      
    } catch (error) {

      this.setState({
        isInvalid: true,
        errorMessage: error.response.data.status.message
      })
    }    
  }

  async sendOTP(){
    this.setState({inputInvalid: true})
    
    try {
      const response = await axios({
        method: 'post',
        url: BaseUrl.ACCOUNT+'/auth/sendOTP',
        data: {
          user:{
            phone: this.state.phone,
          }
        }
      })

      this.setState({countdownStart: true},this.goToNext)

    } catch (error) {
      this.setState({
        errorMessage: error.response.data.status.message
      })
    }    
  }

  onSubmit = () =>{
    this.signUp()
  }

  async signUp(){
    const { firstName, lastName, email, password, username, phone } =  this.state
    
    try {
      const response = await axios({
        method: 'post',
        url: BaseUrl.ACCOUNT+'/auth/register',
        data: {
          user:{
            name: firstName+" "+lastName,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            username: username,
            phone: phone, 
          }
        }
      })
      localStorage.setItem(NUSAKU_TOKEN, response.data.token)
      Router.push('/')
    } catch (error) {
      this.setState({
        errorMessage: error.response.data.status.message
      })
    }
  }

  render() {
    const { classes, data } = this.props

    const { activeStep } = this.props

    return (
      <div className={classes.container}>
        <SwipeableViews
          axis='x'
          index={activeStep}
          onChangeIndex={this.handleStepChange}
        >
          {data.map((step, i) => (
            <div key={i}>
              <Typo variant='heading1' align='center' style={{padding: '16px 0'}}>{step.title}</Typo>
              <InputField 
                placeholder={step.inputs[0].placeholder} 
                width='100%' style={{marginBottom: this.state.marginfiled}}
                name={step.inputs[0] ? step.inputs[0].name:''}  
                type={step.inputs[0].type? step.inputs[0].type:''} 
                key={step.inputs[0].name} 
                variant={step.inputs[0] ? step.inputs[0].variant:''}
                isError={false} 
                onChange={this.onInputChange} />
              {step.inputs[1] ? 
                <InputField 
                  placeholder={step.inputs[1].placeholder} 
                  width='100%' 
                  style={{marginTop:16}} 
                  name={step.inputs[1] ? step.inputs[1].name:''} 
                  type={step.inputs[1].type? step.inputs[1].type:''} 
                  key={step.inputs[1].name}
                  isError={false} 
                  onChange={this.onInputChange} /> : ''}
              {this.state.errorMessage ? <Typo variant='overline' style={{paddingLeft:10}}>{this.state.errorMessage}</Typo> : ""}
              
              <Button variant='large' width='100%' style={{marginTop:16,marginBottom: 64}} disabled={this.state.inputInvalid} onClick={this.handleNext} >Selanjutnya</Button>
              <LoginOptions />
            </div>
          ))}
          <div key={data.length}>
            <VerificationOTP 
              isStart={this.state.countdownStart} 
              changePhoneNumber={this.onPhoneNumberChange}
              resend={this.sendOTP} 
              onSuccess={this.onSubmit}/>
          </div>
        </SwipeableViews>
      </div>
    )  
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  variant: PropTypes.string,
  onClick: PropTypes.func,
}  