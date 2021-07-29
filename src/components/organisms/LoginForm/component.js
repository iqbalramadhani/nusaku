import React from 'react' 
import PropTypes from 'prop-types' 
import axios from 'axios' 
import Router from 'next/router'
import Link from 'next/link'

//checkbox cuman dipake sekali
import Checkbox from "@material-ui/core/Checkbox" 
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank' 
import CheckBoxIcon from '@material-ui/icons/CheckBox' 
//lebih irit disini aja langsung kayanya kang
import Button from '../../elements/Button' 
import Typo from '../../elements/Typo' 
import InputField from '../../elements/InputField' 
import { BaseUrl, NUSAKU_TOKEN } from '../../../constants/value' 

import List from '@material-ui/core/List' 
import ListItem from '@material-ui/core/ListItem' 
import ListItemText from '@material-ui/core/ListItemText' 


export default class Component extends React.Component {
  
  state = {
    email:'',
    password:'',
    isBasicInvalid : true,
    open: false,
    rememberMe: false,
  }

  componentDidMount = () => {
    if(localStorage.getItem(NUSAKU_TOKEN)){
      Router.push('/')
    }

    if(localStorage.getItem("email")){
      this.setState({
        email: localStorage.getItem("email"),
        password: localStorage.getItem("password"),
        isBasicInvalid: false,
      })
    }
  }

  /**
   * ********************************************************
   * HANDLE FORM SUBMIT
   * 
  */

  onSubmit = () =>{
    this.loginRequest()
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

  /**
   * ********************************************************
   * HANDLE REMEMBER ME CHECKBOX
   * 
  */

  handleRememberMe = () => {
    this.setState({ rememberMe: !this.state.rememberMe }) 
  } 

  async loginRequest(){
    this.setState({isBasicInvalid: true})
    try {
      const { email, password, rememberMe } = this.state
      const response = await axios(
        {
          method: 'post',
          url: BaseUrl.ACCOUNT+'/auth/login',
          data: {
            user:{
              email,
              password,
            }
          }
        }
      ) 

      localStorage.setItem(NUSAKU_TOKEN, response.data.data.token)
      
      if(rememberMe){
        localStorage.setItem("email", email)
        localStorage.setItem("password", password)
      }

      Router.push('/')

    } catch (error) {
      this.setState({
        errorMsg : error.response.data.status.message,
        isBasicInvalid: false,
      })
    }
  }

  render() {
    const { classes } = this.props
    const { isBasicInvalid } = this.state
    const {errorMsg} = this.state

    return (
      <div className={classes.container}>

        <Typo variant='heading1' align='center' style={{padding: 16, marginBottom: 16}}>Masuk</Typo>
            
        <InputField placeholder='Email' isError={this.state.statusErr} width='100%' style={{marginBottom: 16}} name='email' onChange={this.onInputChange} type='email' value={this.state.email}/>
        <InputField placeholder='Kata Sandi' isError={this.state.statusErr} width='100%' name='password' onChange={this.onInputChange} type='password' value={this.state.password}/>   
        { errorMsg ? <Typo variant='overline' align='left' style={{paddingLeft: 5,paddingTop: 5,marginBottom: 5,}}>{errorMsg}</ Typo> :'' }       
        
        <List className={classes.sizing}>
          <ListItem className={classes.sizing}>
                <Checkbox checked={this.state.checked} onChange={this.handleRememberMe} className={classes.size} 
                  icon={<CheckBoxOutlineBlankIcon className={classes.sizeIcon} />}  
                  checkedIcon={<CheckBoxIcon className={classes.sizeIcon} />} 
                  value="checked"
                  classes={{
                    root: classes.root,
                    checked: classes.checked
                  }}
                />
              <Typo variant='subtitle3' align='center' ><a className={classes.checkboxtext1}>Ingat saya</a></Typo>
              <ListItemText>                       </ListItemText>
              <ListItemText className={classes.sizing}><Typo variant='subtitle3' align='center' ><Link href='/forget_password'><a className={classes.checkboxtext2} >Lupa Kata Sandi?</a></Link></Typo></ListItemText>
          </ListItem>
        </List>   

        <Button variant='large' width='100%' style={{marginBottom: 40}} onClick={this.onSubmit} disabled={isBasicInvalid}>MASUK</Button>
      </div>
    ) 
  }
}

Component.propTypes = {
  classes: PropTypes.object,
} 
