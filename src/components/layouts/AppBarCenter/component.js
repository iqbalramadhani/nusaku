import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class Component extends React.Component {
  render() {
    const { classes, style, children} = this.props;
    
    let element  = 
                      <AppBar position="fixed" classes={{root: style}}>
                        <Toolbar>
                            <div className={classes.action}>
                              {this.props.left}
                            </div>
                            <div className={classes.center}>
                              <center>
                                {this.props.center}
                              </center>
                            </div>
                            <div className={classes.action}>
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