import React from 'react';
import PropTypes from 'prop-types';

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
      zIndex : 1
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
    const { children, classes, mainContent, supportingContent } = this.props;

    /**
     * CATATAN:
     *  - Ini contoh layout file
     *  - Berisi penataan letak dari tiap organism yang akan dipasang,
     *    Bisa dilihat, layaout ini mempersiapkan 4 bagian yaitu:
     *    AppBar, MainContent, SupportingContent, Footer
    */
    
    return (
      <div>
        {this._renderAppBar()}
        <div className={classes.container}>
          <center>
          {mainContent}
          {supportingContent}
          </center>
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
