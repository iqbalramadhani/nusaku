import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import {BaseUrl} from '../../../constants/value'

import MainLayout from '../../layouts/MainLayout'
import AppBars from '../../elements/AppBars'
import EventDetail from '../../organisms/EventDetail'
import BottomNavigation from '../../organisms/BottomNavigation' 
import PostCategory from '../../organisms/PostCategory'
import Router from 'next/router'

export default class Component extends React.Component {
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
          url: BaseUrl.CONTENT+'/public/events/'+id,
        }
      );      
      this.setState({event: response.data.data.event})

    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { classes } = this.props

    return (
      <div>
        <MainLayout 
          mainContent={
            <EventDetail event={this.state.event}/>
          }
          supportingContent={
            <PostCategory text="Pilih salah satu Kategori Challenge" event={this.state.event}/>
          }
          //appBar={<ChildAppBar upFunc={()=>{console.log("Up Up we gooo!")}}/>}
          appBar={<AppBars variant="event" upFunc={()=>Router.push('/pick_category')}/>}
          footer={<BottomNavigation/>}
        />
      </div>
    
    );
  }
}

Component.propTypes = {
  // classes: PropTypes.object.isRequired,
};
