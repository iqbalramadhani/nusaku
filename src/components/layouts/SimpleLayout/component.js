import React from 'react';
import PropTypes from 'prop-types';
import { blue } from '../../../constants/colors'

import ChildAppBar from '../../elements/ChildAppBar'
import LoginFooter from '../../elements/LoginFooter'

export default class Component extends React.Component {


  _renderAppBar(){
    return <div style={{
      position: 'fixed',
      top: 0,
      display: 'block',
      height: 56,
      width: '100%',
      zIndex : 1,
      backgroundColor : '#ffff'
    }}>
      {this.props.appBar}
    </div>
  }

  _renderFooter(){
    return <div style={{
      position: 'fixed',
      bottom: 0,
      display: 'block',
      height: 56,
      width: '100%',
    }}>
      <center>
      {this.props.footer}
      </center>
    </div>
  }

  _renderMainContent(){
    
  }

  _renderSupportingContent(){

  }

  render() {
    const { children, classes } = this.props;
    
    return (
      <div>
        {this._renderAppBar()}
        <div className={classes.container}>
          {children}
        </div>
        {this._renderFooter()}
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.element,
  classes: PropTypes.object,
  mainContent : PropTypes.node,
};
