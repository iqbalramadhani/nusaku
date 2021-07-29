import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

export default class Component extends React.Component {
  render() {
    const { classes, variant, onClick, 
      children, width, disabled, style} = this.props;
    
    let buttonStyle

    switch(variant){
        case 'large': {
          buttonStyle = {root:classes.large}
          break
        }
        case 'small': {
          buttonStyle = {root:classes.small}
          break
        }
        case 'hollow': {
          buttonStyle = {root:classes.hollow}
          break
        }
        case 'entry' : {
          buttonStyle = {root:classes.entry}
        }
    }

    return (
      <Button classes={buttonStyle} 
        onClick={onClick} 
        style={{
          width: width,
          ...style
        }} 
        disabled={disabled}> 
          {children} 
      </Button>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};