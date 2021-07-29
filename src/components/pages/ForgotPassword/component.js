import React from 'react' 
import PropTypes from 'prop-types' 
import Router from 'next/router'
import axios from 'axios' 

import SimpleForm from '../../layouts/SimpleForm'
import LoginOptions from '../../organisms/LoginOptions' 
import LoginFooter from '../../elements/LoginFooter' 
import ChildAppBar from '../../elements/ChildAppBar'

import Button from '../../elements/Button' 
import Typo from '../../elements/Typo' 
import InputField from '../../elements/InputField' 
import { BaseUrl } from '../../../constants/value' 

export default class Component extends React.Component {
  
  state = {
    email : '',
    isBasicInvalid : true,
  }

  /**
   * ********************************************************
   * HANDLE FORM SUBMIT
   * 
  */

  onSubmit = () =>{
    this.resetPasswordRequest()
  }

  /**
   * ********************************************************
   * HANDLE INPUT VALIDATION
   * 
  */

  validateInput = () => {
    return this.isEmpty() || this.isUnformatted()
  }

  /**
   * To check if there is an empty input
  */
  isEmpty = () => {
    const {email, password} = this.state
    return email == "" || password == ""
  }

  /**
   * To check if there is an invalid input format
  */
  isUnformatted = () => {
    const rgx = /\S+@\S+\.\S+/
    const {email} = this.state
    return !(rgx.test(email))
  }

  /**
   * Validate input after the input state change
  */
  onInputChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value,
    },
    ()=>{
      this.setState({isBasicInvalid: this.validateInput()})
    })
  }

  _renderForm(){
    const { classes } = this.props
    const { isBasicInvalid } = this.state
    return (
      <div className={classes.container}>

        <Typo variant='heading1' align='center' style={{padding: 16, marginBottom: 16}}>Ubah Kata Sandi</Typo>
            
        <InputField placeholder='Email' isError={this.state.statusErr} width='100%' style={{marginBottom: 16}} name='email' onChange={this.onInputChange} type='email' value={this.state.email}/>
        <Button variant='large' width='100%' style={{marginBottom: 40}} onClick={this.onSubmit} disabled={isBasicInvalid}>MASUK</Button>
      </div>
    )
  }

  async resetPasswordRequest(){
    this.setState({isBasicInvalid: true})
    try {
      const { email } = this.state
      const response = await axios(
        {
          method: 'post',
          url: BaseUrl.ACCOUNT+'/auth/password/forgot',
          data: {
            user:{
              email,
            }
          }
        }
      ) 

    } catch (error) {
      this.setState({
        isBasicInvalid: false,
      })
    }
  }

  render() {

    /**
     * CATATAN:
     *  - Berikut contoh penggunaan layout "SimpleForm"
     *  - Dengan LoginForm sebagai mainContent dan LoginOptions sebagai supportingContent
    */

    return (
      <div>
        <SimpleForm 
          mainContent={
            this._renderForm()
          }
          supportingContent={
            <LoginOptions />
          }
          appBar={<ChildAppBar upFunc={()=>{Router.push('/')}}/>}
          footer={<LoginFooter variant='login'/>}

        />
      </div>
    
    ) 
  }
}

Component.propTypes = {
  classes: PropTypes.object.isRequired,
} 
