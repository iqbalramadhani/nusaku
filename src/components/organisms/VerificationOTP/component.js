import React from 'react' 
import PropTypes from 'prop-types' 
import Typo from '../../elements/Typo' 
import InputField from '../../elements/InputField' 
import Button from '../../elements/Button' 
import List from '@material-ui/core/List' 
import ListItem from '@material-ui/core/ListItem' 
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction' 

import axios from 'axios'
import {BASE_API_URL, BaseUrl} from '../../../constants/value'

export default class Component extends React.Component {

  state = {
    otp : '',
    status : false,
    ms: 60000,
    endsUp : false,
    disabled : true
  }

  onInputChange = (e)=>{
    this.setState({
      [e.target.name] : e.target.value,
      disabled : false,
    })
  }

  onSubmit = ()=>{
    if (this.state.otp.length === 6) {
      this.checkOTP()
    }
    else {
      this.setState({
        status : true,
      }) 
    }
  }

  onResend = ()=>{
    if (this.state.endsUp === false) {
      //ketika ingin resend code tetapi waktu belum habis
      console.log('OTP code is still available')

    }
    if (this.state.endsUp === true) {
      //reset timer dan kirim ulang meminta resend kode otp
      console.log('resend code and restart countdown')
      this.setState({
        ms : 60000,
        endsUp : false
      })
      this.componentWillMount()
    }
  }

  async checkOTP(){
    this.setState({disabled: true})
    try {
      
      const response = await axios(
        {
          method: 'post',
          url: BaseUrl.ACCOUNT+'/auth/checkOTP',
          data: {
            user:{
              otp : this.state.otp
            }
          }
        }
    ) 
      this.props.onSuccess()
    } catch (error) {
      console.error(error) 
      this.setState({
        status : true,
        disabled: false
      }) 
    }
  }

  componentWillMount() {
      this.countDown()
  }

  countDown(){
    this.interval = setInterval( () => {
        if ((this.state.ms) <= 0) {
            clearInterval(this.interval) 
            this.forceUpdate() 
            this.setState({
              endsUp : true,
            })
            return 
        }
        this.setState({ms: this.state.ms - (this.props.isStart ? 1000 : 0)})
    }, 1000)
  }

  componentWillUnmount() {
      clearInterval(this.interval) 
  }

  format() {
      const { ms } = this.state 
      let minutes = Math.floor((ms /1000) / 60 ) 
      let seconds = Math.floor((ms /1000) % 60) 
      

      minutes = minutes < 1 ? '00' : minutes < 10 ? `0${minutes}` : minutes 
      seconds = seconds < 1 ? '00' : seconds < 10 ? `0${seconds}` : seconds 
      return `${minutes}:${seconds}` 
  }

  onResendCode = () => {
    this.setState({ms: 60000})
    this.props.resend()
  }

  onPhoneNumberChange = () => {
    this.setState({ms: 60000})
    this.props.changePhoneNumber()
  }

  render() {
    const { classes } = this.props
    
    return (
      <div className={classes.root}>
        <Typo variant='heading1' align='center' style={{padding : 16,marginBottom: 16}}>
          Batas Waktu
        </Typo>
        <Typo variant='heading1' align='center' style={{marginBottom: 16}}>
          <a className={classes.text2}>{this.format(this.state.ms)}</a>
        </Typo>
        <Typo variant='subtitle3' style={{marginBottom : 16, textAlign : 'center', width: '270px'}}>
          <a className={classes.text} >Masukan kode verifikasi yang telah dikirim melalui sms.</a>
        </Typo>
        <InputField type='number' width='100%' style={{marginBottom: this.state.status === true || this.state.endsUp === true ? 2 : 16 , textAlign : 'center', fontSize : '18px'}} isError={this.state.status} name='otp' onChange={this.onInputChange}/>
        {this.state.status === true || this.state.endsUp === true ? 
          <Typo variant='overline'>Kode verifikasi salah/batas waktu telah habis</Typo> : ''}
          <Button variant='large' width='100%' style={{marginBottom: 129}} disabled={this.state.disabled} onClick={this.onSubmit}>VERIFIKASI</Button>
        <List>
          <ListItem style={{paddingLeft : 0}}>
            <Button variant='hollow' onClick={this.onResendCode}>Kirim Ulang Kode</Button>
            <ListItemSecondaryAction>
              <Button variant='hollow' height='28px' onClick={this.onPhoneNumberChange}>Ganti No Telepon</Button>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </div>
    ) 
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  variant: PropTypes.string,
  onClick: PropTypes.func,
} 