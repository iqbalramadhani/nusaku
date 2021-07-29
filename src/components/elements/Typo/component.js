import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

export default class Component extends React.Component {
  render() {
    const { classes, variant, align, children, style} = this.props;
    
    let textStyle

    switch(variant){
        case 'heading1': {
          textStyle = {root:classes.heading1}
          break
        }
        case 'heading2': {
          textStyle = {root:classes.heading2}
          break
        }
        case 'heading3': {
          textStyle = {root:classes.heading3}
          break
        }
        case 'heading4': {
          textStyle = {root:classes.heading4}
          break
        }
        case 'subtitle1': {
          textStyle = {root:classes.subtitle1}
          break
        }
        case 'subtitle2': {
          textStyle = {root:classes.subtitle2}
          break
        }
        case 'subtitle3': {
          textStyle = {root:classes.subtitle3}
          break
        }
        case 'body1': {
          textStyle = {root:classes.body1}
          break
        }
        case 'body2': {
          textStyle = {root:classes.body2}
          break
        }
        case 'body3': {
          textStyle = {root:classes.body3}
          break
        }
        case 'caption1': {
          textStyle = {root:classes.caption1}
          break
        }
        case 'caption2': {
          textStyle = {root:classes.caption2}
          break
        }
        case 'overline': {
          textStyle = {root:classes.overline}
          break
        }
        case 'button2' : {
          textStyle = {root:classes.button2}
          break
        }
        default:{
          textStyle = {root:classes.body1}
          break
        }
    }

    return (
      <Typography classes={textStyle} align={align||'left'} style={{...style}}>{children}</Typography>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  variant: PropTypes.string,
  align: PropTypes.string,
  onClick: PropTypes.func,
};