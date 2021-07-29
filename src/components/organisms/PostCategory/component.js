import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typo from '../../elements/Typo'
import { grey } from '../../../constants/colors'
import { BaseUrl } from '../../../constants/value';
import Router from 'next/router'

import axios from 'axios';


export default class Component extends React.Component {

  state = {
    data : [],
    name : '',
    event : ''
  }

  handleClick = (e) => {  
    console.log(e)
    Router.push(`/post?id=${e}`)

  }

  componentDidMount= (e)=>{
    e === 'none' ? this.getCategories() : this.getCategories(e)
  }

  async getCategories(id) {
    try {
      const responses = await axios.get(BaseUrl.CONTENT+'/public/categories',
      {
        params : {
          filter : {
            event : id
          }
        }
      });
      const data = responses.data.data.category.map(obj => obj)
      
      this.setState({data : data})
    } catch (error) {
      console.error(error);
    }
  }

  

  render() {
    const { classes, text, event } = this.props
    
    const listCategory = this.state.data.map((value) => {
      return(
        <div key={value._id} value={value._id} onClick={this.handleClick.bind(this,value._id)}>
        <Paper className={classes.cardPost} elevation={0}>
          <img src={value.image.thumbnail} width='50%' height='50%'/>

          <Typo variant='caption1' value={value._id} style={{fontWeight : 600, fontSize : 11, textAlign : 'center', color : grey.charchoal}}>{value.name}</Typo>
          <Typo variant='caption1' style={{fontWeight : 600, textAlign : 'center'}}>Poin {value.coin}</Typo>
        </Paper>
        </div>
      )
    })
    
    return (
      <div className={classes.root} onLoad={this.componentDidMount.bind(this,event ? event._id : 'none')}>
        <Typo variant='heading3' style={{marginBottom : 10,paddingLeft : 10}}>{text}</Typo>
        <Grid className={classes.container}>
          {listCategory}
        </Grid>
      </div>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};