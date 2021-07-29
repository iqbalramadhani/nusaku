import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Typo from '../Typo';
import { Grid } from '@material-ui/core';

export default class Component extends React.Component {
  
  state = {
    days : 0,
    hours : 0,
    minutes : 0,
    seconds : 0,
  }

  componentWillMount(){
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount(){
    setInterval(() => this.getTimeUntil(this.props.deadline),1000);
  }

  leading0(num){
    return num < 10 ? '0' + num : num;
  }

  getTimeUntil(deadline){
      const time = Date.parse(deadline) - Date.parse(new Date());
      const seconds = Math.floor((time/1000) % 60);
      const minutes = Math.floor((time/1000/60) % 60);
      const hours = Math.floor(time/(1000*60*60) % 24);
      const days = Math.floor(time/(1000*60*60*24));
      this.setState({days,hours,minutes,seconds});
  }


  render() {
    const { classes} = this.props;
    
    
    

    return (
      <Grid container spacing={0}>
        <Grid item xs={3} style={{flexBasis:0,paddingRight:10}}>
          <Typo variant="caption2">Sedang Berlangsung</Typo>
        </Grid>
        <div style={{paddingLeft:10}}>
          <div className={classes.box}><Typo variant="button2" align={"center"} style={{paddingTop:5}}>{this.leading0(this.state.days)} Hari</Typo></div>
          <div className={classes.point}>:</div>
          <div className={classes.box1}><Typo variant="button2" align={"center"} style={{paddingTop:5}}>{this.leading0(this.state.hours)}</Typo></div>
          <div className={classes.point}>:</div>
          <div className={classes.box1}><Typo variant="button2" align={"center"} style={{paddingTop:5}}>{this.leading0(this.state.minutes)}</Typo></div>
          <div className={classes.point}>:</div>
          <div className={classes.box1}><Typo variant="button2" align={"center"} style={{paddingTop:5}}>{this.leading0(this.state.seconds)}</Typo></div>
        </div>
      </Grid>
    )
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};