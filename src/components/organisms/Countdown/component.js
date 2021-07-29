import React from 'react';
import PropTypes from 'prop-types';
import Typo from '../../elements/Typo';
import List from '@material-ui/core/List';
import Countdown from 'react-countdown-now';

export default class Component extends React.Component {

  render() {
    const { classes } = this.props

    // Renderer callback with condition
    const renderer = ({ minutes, seconds, completed }) => {
      if (completed) {
        // Render a complete state
        return(
                <Typo variant='heading1' align='center' style={{padding: '16px 0', marginBottom: 16}}>
                <List>
                  <a className={classes.text2} >00</a>
                  <a className={classes.text2} > : </a>
                  <a className={classes.text2} >00</a>
                </List>
                </Typo>
              );
      } else {
        // Render a countdown

        return(
                <Typo variant='heading1' align='center' style={{padding: '16px 0', marginBottom: 16}}>
                <List>
                  <a className={classes.text2} >{minutes}</a>
                  <a className={classes.text2} > : </a>
                  <a className={classes.text2} >{seconds}</a>
                </List>
                </Typo>
              );
      }
    };
    
    return (
      <div className={classes.root}>
        <Typo variant='heading1' align='center' style={{marginBottom: 16}}><a className={classes.text1}>Batas Waktu</a></Typo>
        <Countdown
          date={Date.now() + 120000}
          renderer={renderer}
        />
      </div>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};