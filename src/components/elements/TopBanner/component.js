import React from 'react';
import PropTypes from 'prop-types';
import Typo from '../../elements/Typo'

export default class Component extends React.Component {
  render() {
    const { classes, variant, text} = this.props;
  
    let element
    switch (variant) {
      case 'email' :
          element = <div className={classes.email}><Typo variant='caption1' style={{color : '#ffff', textAlign : 'center', paddingTop : '3px'}}>{text}</Typo></div>
        break;
      default:{
          element = <div className={classes.default}><Typo variant='caption1' style={{color : '#ffff', textAlign : 'center', paddingTop : '3px'}}>{text}</Typo></div>
        break
      }
    }
    return (
      element
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  isError: PropTypes.bool,
  value : PropTypes.value,
};