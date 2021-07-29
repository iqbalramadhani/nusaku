import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {BaseUrl,NUSAKU_TOKEN} from '../../../constants/value';
import MainLayout from '../../layouts/MainLayout';
import AppBars from '../../elements/AppBars';
import PostDetail from '../../organisms/PostDetail';
import BottomNavigation from '../../organisms/BottomNavigation'; 
import PostCategory from '../../organisms/PostCategory';
import Router from 'next/router';
import ShareOption from '../../organisms/ShareOptions';
import Typo from '../../elements/Typo';
import PostComments from '../../organisms/PostComments';
import {grey} from '../../../constants/colors'

export default class Component extends React.Component {
  state={
    comments: []
  }

  constructor(props){
    super(props)
    this.postComment = this.postComment.bind(this)
  }

  componentDidMount(){
    const id = this.props.router.query.id
    this.fetchPost(id)
  }

  async fetchPost(id){
    try {
      const response = await axios(
        {
          method: 'get',
          url: BaseUrl.CONTENT+'/public/posts/'+id,
        }
      );      
      this.setState({post: response.data.data.post})
      this.fetchCategory(response.data.data.post.category)
      this.fetchUser(response.data.data.post.user)
      this.getPrice(response.data.data.post.price)
      this.getLike(id)
    } catch (error) {
      console.log(error)
    }
  }

  async fetchCategory(id){
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

  async fetchUser(id){
    try {
      const response = await axios(
        {
          method: 'get',
          url: BaseUrl.ACCOUNT+'/public/users/'+id,
        }
      );      
      this.setState({user: response.data.data.user})
    } catch (error) {
      console.log(error)
    }
  }

  async getPrice(price){
    try {
      const response = await axios(
        {
          method: 'get',
          url: BaseUrl.CONTENT+'/prices/'+price,
          headers : {
            Authorization	: 'Bearer '+localStorage.getItem(NUSAKU_TOKEN),
          }
        }
      );      
      this.setState({price: response.data.data.price})
    } catch (error) {
      console.log(error)
    }
  }

  async getLike(id){
    try {
      const response = await axios(
        {
          method: 'get',
          url: BaseUrl.CONTENT+'/public/likes',
          params : {
            filter: {
              post : id
            } 
          }
        }
      );      
      this.setState({like: response.data.data.total})
      console.log("jumlah ",this.state.like)
    } catch (error) {
      console.log(error)
    }
  }

  getComments() {

  }

  postComment(message) {
    const comments = Object.assign([], this.state.comments)
    comments.push({
      name: "Caterina",
      message,
      avatar: "http://i.pravatar.cc/300"
    })
    this.setState({
      comments
    })
    // alert(message)
  }

  render() {
    const { classes } = this.props
    const {post,user,category,price,like, comments}= this.state

    return (
      <div>
        <MainLayout 
          mainContent={
            <PostDetail post={post} category={category} user={user} price={price}/>
          }
          //appBar={<ChildAppBar upFunc={()=>{console.log("Up Up we gooo!")}}/>}
          appBar={<AppBars variant="event" upFunc={()=>Router.push('/post')}/>}
          footer={<BottomNavigation/>}
        >
          <div style={{width:360}}>
            <ShareOption/>
            <Typo variant="subtitle2" style={{paddingLeft:20,paddingTop:5,paddingBottom:23,color:grey.slate,fontWeight: 600}}>
              {post ? post.__v+' Views, ':''}
              {'0 Comment, '+like+' likes'}
              
            </Typo>
            <PostComments
              data={comments}
              showLoadMore={false}
              postComment={this.postComment}
            />
          </div>
        </MainLayout>
      </div>
    
    );
  }
}

Component.propTypes = {
  // classes: PropTypes.object.isRequired,
};
