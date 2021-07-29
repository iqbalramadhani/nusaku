import React from 'react' 
import PropTypes from 'prop-types' 
import axios from 'axios'

import { dateFormatter } from '../../../utils/dateFormatter'

import Button from '../../elements/Button' 
import Typo from '../../elements/Typo' 
import InputField from '../../elements/InputField' 
import { BASE_API_URL } from '../../../constants/value' 

import Grid from '@material-ui/core/Grid' 
import Tabs from '../../elements/Tabs'
import Divider from '@material-ui/core/Divider' 
import CountDown from '../../elements/CountDown' 
import PostCategory from '../../organisms/PostCategory'
import {withRouter} from 'next/router'
import SwipeableViews from 'react-swipeable-views';

export default class Component extends React.Component {
  
  
  state = {
    value :0,
  }

  handleChangeValue = (event,value) =>{
    this.setState({value}) 
  }

  handleClick = () =>{
    console.log("here")
  }

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  //
  render() {
    const { classes, event } = this.props

    let label = ['Deskripsi','Syarat dan Ketentuan'] 

    return (
      <div className={classes.container}>
        <div className={classes.gridContainer} style={{paddingLeft:20,paddingRight:10}}>
          <div>
            <Typo variant='body1'>Challenge</Typo>
          </div>
          <div style={{paddingLeft:15}}>
            <CountDown deadline={event? event.expiredDate: new Date()}/> 
          </div>
        </div>
        {/* <Grid container spacing={0} style={{paddingLeft:20,paddingRight:10}}>
          <Grid item xs={4} style={{flexBasis:0,paddingRight:15}}>
            <Typo variant='body1'>Challenge</Typo>
          </Grid>
          <Grid item xs={8}>
            <CountDown deadline={event? event.expiredDate: new Date()}/>       
          </Grid>
        </Grid>    */}
        <img style={{paddingTop:14}} src={event ? event.image.full:''} width={328} height={144}/>
        <Divider style={{marginTop : 20, marginBottom : 14}}/>
        <Typo variant='subtitle2' style={{paddingBottom:23,paddingLeft:20}}>Berlangsung dari {dateFormatter(event? event.startedDate:'')} hingga {dateFormatter(event?event.expiredDate:'')}</Typo>        
        <Tabs tab={label} value={this.state.value} handleChangeValue={this.handleChangeValue}/>
        <SwipeableViews
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <Typo style={{color:"#434a54",fontWeight: 'normal',paddingTop:9,paddingLeft:16,paddingRight:16,paddingBottom:19}} variant='subtitle3'>{event?event.description:''}</Typo>
          <Typo style={{color:"#434a54",fontWeight: 'normal',paddingTop:9,paddingLeft:16,paddingRight:16,paddingBottom:19}} variant='subtitle3'>{ event? event.term :'' }</Typo>
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
