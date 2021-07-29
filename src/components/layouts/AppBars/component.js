import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class Component extends React.Component {
  render() {
    const { classes, style, children, variant} = this.props;
    
    let AppStyle = []

    console.log(variant)
    switch(variant){
      case 'guest' : 
        AppStyle[1] = classes.guest_right
        break;
      case 'main' :
        AppStyle[0] = classes.left
        AppStyle[1] = classes.main_right
        break;
      case 'search' :
        AppStyle = classes.search
        break;
      case 'event' :
        AppStyle[0] = classes.left
        AppStyle[1] = classes.left
        break;
    }

    let element  = 
            <AppBar classes={{root: style}}>
              <Toolbar>
                <div className={AppStyle[0]}>
                  {this.props.left}
                </div>
                <div className={variant === 'search' ? classes.search_center : classes.center}>
                  <center>
                    {this.props.center}
                  </center>
                </div>
                <div className={AppStyle[1]}>
                  {this.props.right}
                </div>
              </Toolbar>
            </AppBar>
    return (
      element
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
};