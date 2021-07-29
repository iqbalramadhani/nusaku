import React from 'react';
import PropTypes from 'prop-types';

export default class Component extends React.Component {
  render() {
    const { classes, children} = this.props;
    
    let element  = <span className={classes.divider}>{children}</span>

    return (
      element
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
};