import React from 'react';
import PropTypes from 'prop-types';

import MainLayout from '../../layouts/MainLayout'
import Challenge from '../../organisms/Challenge'
import AppBars from '../../elements/AppBars'
import PostCategory from '../../organisms/PostCategory'
import BottomNavigation from '../../organisms/BottomNavigation'
import Typo from '../../elements/Typo'

export default class Component extends React.Component {

  onClickText = ()=>{
    console.log('1 step email verification')
  }

    render() {
      const { classes } = this.props

      return (
        <div>
          <MainLayout
            mainContent={
              <Challenge/>
            } 
            supportingContent={
              <PostCategory text="Regular"/>
            }
            
            appBar={<AppBars variant="category"/>}
            footer={<BottomNavigation />}
          />
        </div>
      
      );
    }
}

Component.propTypes = {
  classes: PropTypes.object.isRequired,
};
