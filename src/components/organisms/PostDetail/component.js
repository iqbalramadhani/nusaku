import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Rating from 'react-rating';
import Grid from '@material-ui/core/Grid';
import SvgIcon from '@material-ui/core/SvgIcon';
import { svgIcon } from '../../../constants/svgIcon';
import {grey} from '../../../constants/colors';

import Typo from '../../elements/Typo';
import ImgSlider from '../../elements/ImageSlider';
import { dateTimeFormatter } from '../../../utils/dateFormatter';
import { iconNav } from '../../../constants/iconNav';
import Bottom from '../../elements/Button';
import {BaseUrl,NUSAKU_TOKEN} from '../../../constants/value';
import CommentBox from '../../elements/CommentBox'
import CommentInput from '../../elements/CommentInput'

export default class Component extends React.Component {

  state = {
    rating : '',
    value :0,
  }

  handleChangeValue = (event,value) =>{
    this.setState({value}) 
  }

  ratingChange = (e)=>{
    this.setState({
      rating : e
    })
   
    console.log(this.state)
  }

  render() {
    const { classes, post,category,price,user} = this.props   

    const img = [
      "https://cdn.zeplin.io/5b484cf98ad0118c5fb58780/assets/6325CE6D-E44E-4022-BFB5-59F9E3C969C7.png",
      "https://cdn.zeplin.io/5b484cf98ad0118c5fb58780/assets/6325CE6D-E44E-4022-BFB5-59F9E3C969C7.png",
      "https://cdn.zeplin.io/5b484cf98ad0118c5fb58780/assets/6325CE6D-E44E-4022-BFB5-59F9E3C969C7.png",
    ]

    return (
      <div>
        <div className={classes.container}>
          <Typo style={{paddingBottom:35}} variant='heading2'>{post ? post.title : ''}</Typo>
          <Grid container>
            <Grid item>
              <img src={post ? post.images : ''} width={50} height={50} align={'left'} style={{borderRadius:"50%",paddingRight:10}}/>
            </Grid>
            <Grid item >
              <Typo  variant="subtitle1" style={{paddingTop:12,paddingBottom:12}}>{user ? user.name : ''}</Typo>
            </Grid>
          </Grid>
          <div style={{textAlign : 'left', marginBottom: 10,paddingTop:15}}>
            <Rating name='rating'onChange={this.ratingChange}
              fractions={2}
              placeholderRating={post ? post.rating : ''}
              placeholderSymbol={<SvgIcon>{svgIcon.starGold}</SvgIcon>}
              emptySymbol={<SvgIcon>{svgIcon.starSilver}</SvgIcon>}
              fullSymbol={<SvgIcon>{svgIcon.starGold}</SvgIcon>}
            />
          </div>
          <Typo variant="subtitle2" style={{fontWeight: 600,color:grey.cool,paddingBottom:20}}>{dateTimeFormatter(post ? post.publishedAt : '')}</Typo>
        </div>
        <ImgSlider handleChangeValue={this.handleChangeValue} value={this.state.value} img={img ? img:''}/>
        <div className={classes.container}>
          <Typo variant="body1" style={{paddingBottom:42,paddingRight:4,paddingLeft:4}}>{post ? post.content : ''}</Typo>
          <Grid container>
            <Grid item xs={1}>
              <SvgIcon>{iconNav.location}</SvgIcon>
            </Grid>
            <Grid item xs={11} style={{paddingBottom:10}}>
              <Typo variant="subtitle2" style={{color:grey.charchoal}}>{post ? post.address.address+', Kota '+post.address.city+', '+post.address.country : ''}</Typo>
            </Grid>
            <Grid item xs={1}>
              <SvgIcon>{iconNav.price}</SvgIcon>
            </Grid>
            <Grid item xs={11} style={{paddingBottom:10}}>
              <Typo variant="subtitle2" style={{color:grey.charchoal}}>{price ? price.name+' (Rp. '+price.rangeLow+' - '+price.rangeHigh+')':''}</Typo>
            </Grid>
            <Grid item xs={1}>
              <SvgIcon>{iconNav.tag}</SvgIcon>
            </Grid>
            <Grid item xs={6}>
              <Typo variant="subtitle2" style={{color:grey.charchoal}}>{category ? category.type : ''}</Typo>
            </Grid>
            <Grid item xs={5}>
              <Bottom variant="hollow">Laporkan Post Ini</Bottom>
            </Grid>
          </Grid>
          <Typo variant="subtitle2">100 views, 2 comments, 20/ likes</Typo>
          {/* <CommentBox name="Caterina" message="Sangat menarik dan bagus ya, mantap" />
          <CommentBox name="Caterina" message="Sangat menarik dan bagus ya, mantap" />
          <CommentInput /> */}
        </div>
      </div>
    )};      
}

Component.propTypes = {
  classes: PropTypes.object,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};