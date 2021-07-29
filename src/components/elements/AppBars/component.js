import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import AppBars from '../../layouts/AppBars'
import Button from '../../elements/Button'
import InputField from '../../elements/InputField'
import { IconButton } from '@material-ui/core'


export default class Component extends React.Component {
  render() {
    const { classes, children, isGues,variant} = this.props 

    const isGuest = true
    //const appBarStyle = isGuest ?  classes.guestTheme : classes.userTheme

    let appStyle,valLeft,valRight,valCenter
    switch(variant){
      case 'guest': {
        appStyle = classes.guestTheme,
        valLeft = <img src="https://cdn.zeplin.io/5b484cf98ad0118c5fb58780/assets/C1F623A9-17C2-4D8E-80EC-F15DFC972893.png" alt="" width={189} height={53} onClick={this.props.upFunc}/>
        valRight = <Link href='/login'><Button variant='small' width={130} >Masuk</Button></Link>
        break
      }
      case 'main': {
        appStyle = classes.userTheme
        valCenter = <img src="https://cdn.zeplin.io/5b484cf98ad0118c5fb58780/assets/74151502-52F7-4720-A62F-4553CEA71FBC.png" alt="" width={104} height={56}/>
        valRight = <IconButton><img src="https://cdn.zeplin.io/5b484cf98ad0118c5fb58780/assets/C9DC994E-45C5-4B3D-B9FD-7ABBFB2F63CD.png"/></IconButton>
        break
      }
      case 'search': {
        appStyle = classes.userTheme
        valCenter = <InputField width='100%' height={36} variant='textSearch'placeholder = "Cari"></InputField>
        break
      }
      case 'category':{
        appStyle = classes.userTheme
        valCenter = <img src="https://cdn.zeplin.io/5b484cf98ad0118c5fb58780/assets/74151502-52F7-4720-A62F-4553CEA71FBC.png" alt="" width={104} height={56}/>
        break
      }
      case 'event':{
        appStyle = classes.userTheme
        valLeft = <IconButton><img src="https://cdn.zeplin.io/5b484cf98ad0118c5fb58780/assets/BD60509E-2086-4CED-8DED-0184E95FCAA8.png" alt="" width={56} height={56} onClick={this.props.upFunc}/></IconButton>
        valCenter = <img src="https://cdn.zeplin.io/5b484cf98ad0118c5fb58780/assets/74151502-52F7-4720-A62F-4553CEA71FBC.png" alt="" width={104} height={56}/>
      }
  }
    
    return (
      // <AppBars
      //   style={appBarStyle}
      //   left={<img src="https://cdn.zeplin.io/5b484cf98ad0118c5fb58780/assets/C1F623A9-17C2-4D8E-80EC-F15DFC972893.png" alt="" width={189} height={53} onClick={this.props.upFunc}/>}
      //   right={<Button variant='small' width={130} style={classes.entry}>Masuk</Button>}
      // />

      <AppBars
        variant={variant}
        style={appStyle}
        left={valLeft}
        center={valCenter}
        right={valRight}
      />
    
    ) 
  }
}

Component.propTypes = {
  classes: PropTypes.object,
} 