import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'

import {BaseUrl} from '../../../constants/value'

import MainLayout from '../../layouts/MainLayout'
import DetailCategory from '../../organisms/DetailCategory'
import AppBars from '../../elements/AppBars'
import BottomNavigation from '../../organisms/BottomNavigation'
import PostForm from '../../organisms/PostForm'
import Banner from '../../elements/TopBanner'
import UploadImage from '../../organisms/UploadImage'

export default class Component extends React.Component {

  onClickText = ()=>{
    console.log('1 step email verification')
  }

  state={
    
  }

  componentDidMount(){
    const id = this.props.router.query.id
  
    this.fetchEvent(id)
  }

  async fetchEvent(id){
    try {
      const response = await axios(
        {
          method: 'get',
          url: BaseUrl.CONTENT+'/public/categories/'+id,
        }
      );      
      this.setState({category: response.data.data.category})

    } catch (error) {
      console.log(error)
    }
  }

    render() {
      const { classes } = this.props

      /**
       * CATATAN:
       *  - Main Layout
       *  - Dengan LoginForm sebagai mainContent dan LoginOptions sebagai supportingContent
      */

      return (
        <div>
          <MainLayout
            mainContent={
              <div>
                <DetailCategory category={this.state.category}/>
                <UploadImage/>
                <PostForm category={this.state.category}/>
              </div>
            }             
            appBar={
              <div>
                <AppBars variant="event" upFunc={()=>{console.log("Up Up we gooo!")}}/>
                <Banner variant="email" text='1 Langkah lagi, silahkan verifikasi email disini' />
              </div>
            }
            footer={<BottomNavigation />}
          />
        </div>
      
      );
    }
}

Component.propTypes = {
  // classes: PropTypes.object.isRequired,
};
