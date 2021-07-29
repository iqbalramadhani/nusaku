import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Checkbox from "@material-ui/core/Checkbox";
import Button from '../../elements/Button';
import Typo from '../../elements/Typo';
import InputField from '../../elements/InputField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import {yellow,grey, blue} from '../../../constants/colors'
import SvgIcon from '@material-ui/core/SvgIcon';
import { svgIcon } from '../../../constants/svgIcon'
import { BaseUrl,NUSAKU_TOKEN } from '../../../constants/value'
import { isEmpty, isLongEnough } from '../../../utils/formValidator'

import Rating from 'react-rating';

export default class Component extends React.Component {

  state = {
    message : 'random message',
    title : '', 
    content : '',
    address : {},
    price : '',
    rating : '',
    checked : false,
    data : [],
    images: [
      {
        "full": "string",
        "large": "string",
        "medium": "string",
        "thumbnail": "string",
        "alt": "string"
      }
    ],
    "address": {
      "address": "gerlong",
      "city": "bandung",
      "state": "bandung",
      "country": "indonesia",
      "postalCode": "12345",
      "coordinates": [
        -6.8731,
        107.5867313
      ]
    },
    category : [],
    disabled : true,
    titleMsg : '',
    contentMsg : ''
  }

  onInputChange = (e)=>{
    const name = e.target.name
    this.setState({
      [e.target.name] : e.target.value
    },
    () => {
      this.setState({
        disabled : this.validation(name)
      })
    })
    
    console.log(this.state)
  }

  ratingChange = (e)=>{
    this.setState({
      rating : e
    },
    () => {
      this.setState({
        disabled : this.validation()
      })
    })
  }

  onCheck=(e)=>{
    this.setState({
      category : e,
      checked : !this.state.checked,
    },
    () => {
      this.setState({
        disabled : this.validation()
      })
    })
  }

  onPublish= () => {  
    console.log(this.state)
    this.publish('approved')
  }

  onDraft=()=>{
    console.log(this.state)
    this.publish('draft')
  }

  validation=(name)=>{
    const { title, address, content,price, rating, checked} = this.state
    let disabled = true
    checked === true ? disabled = false : disabled = true
    switch(name) {
      case 'title' : 
        if (isLongEnough(title,39)) {
          this.setState({titleMsg : 'Maksimal 38 karakter'}) }
        else{ 
          this.setState({titleMsg : ''}) 
        }
        break;
      case 'content' :
        if(!isLongEnough(content, 250) ){
          this.setState({contentMsg : 'Ayo tulis lagi! minimal konten kamu 250 karakter.'})}
        else{
          
          this.setState({contentMsg : ''})
        }
        break;
      default : 
        this.setState({titleMsg : ''})
        this.setState({contentMsg : ''})
        break;
    }
    return (
      isEmpty(address) || isEmpty(rating) || isLongEnough(title,39) || !isLongEnough(content, 250) || 
      isEmpty(price) || disabled
      ) 
  }

  componentDidMount=()=>{
    this.getPrice()
    
  }
  
  async publish(status){
    try {
      const idCategory = this.state.category._id
      const { images, title, content, price, rating, address, message } = this.state
      const token = localStorage.getItem(NUSAKU_TOKEN)
      const response = await axios(
        {
          method : 'post',
          url : BaseUrl.CONTENT+'/posts/create',
          headers : {
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer '+token
          },
          data : {
            post : {
              images,
              title,
              content,
              address,
              rating,
              price,
              category : idCategory,
              status : status,
              message,
            }
          }
        }
      )
      console.log(status)
      console.log(response)
    }
    catch (error){
      console.error(error)
    }
  }

  async getPrice(){
    try{

      const token = localStorage.getItem(NUSAKU_TOKEN)
      const response = await axios.get(
        BaseUrl.CONTENT+'/prices?orderBy=asc',
        {
          headers : {
            'Content-Type': 'application/json',
              'Authorization' : 'Bearer '+token
          }
        }
      );
      const data = response.data.data.price
      this.setState({
        data : data,
        price : data[0]._id
      })
      console.log(data[0]._id)
    }
    catch(error){
      console.error(error)
    }
  }

  render() {
    const { classes, category } = this.props    
    
    return (
      <div className={classes.container}>
        <InputField variant='normal' placeholder='Judul' name='title' onChange={this.onInputChange} width='100%' style={{ marginBottom : this.state.titleMsg == "" ? 15 : 2 , background : '#ffff'}}/>
        { this.state.titleMsg == "" ? '' : <Typo variant='overline'>{this.state.titleMsg}</Typo> }
        <InputField variant='textAreaNormal' placeholder='Konten' name='content' onChange={this.onInputChange} fullWidth={true} style={{width : 290, height : 448,}}/>
        { this.state.contentMsg == "" ? '' : <Typo variant='overline'>{this.state.contentMsg}</Typo> }
        <InputField variant='normal' placeholder='Lokasi' name='address' onChange={this.onInputChange} width='100%' style={{marginTop : this.state.contentMsg == "" ? 15 : 1, marginBottom : 15, background : '#ffff'}}/>
        
        <select className={classes.selectBox} name='price' onChange={this.onInputChange} >
          {this.state.data.map(value => (
            <option key={value._id} value={value._id}>{value.name} (Rp. {value.rangeLow} - {value.rangeHigh})</option>
          ))}
        </select>

        <Typo variant='subtitle1' style={{marginBottom : 10}}>Rating</Typo>
        <div style={{textAlign : 'left', marginBottom: 30}}>
          <Rating name='rating'onChange={this.ratingChange}
            fractions={2}
            placeholderRating={this.state.rating}
            placeholderSymbol={<SvgIcon>{svgIcon.starGold}</SvgIcon>}
            emptySymbol={<SvgIcon>{svgIcon.starSilver}</SvgIcon>}
            fullSymbol={<SvgIcon>{svgIcon.starGold}</SvgIcon>}
          />
        </div>
        
        <ListItem style={{padding : 0}}>
          <Checkbox checked={this.state.checked} style={{marginLeft : -15}} onChange={this.onCheck.bind(this,category ? category : 'none')}/>
          <Typo variant='subtitle3' style={{color : grey.charchoal, width : 295, fontWeight : 'normal'}}>
            Saya Menerima <a href='' style={{color : blue.darkSky}}>Syarat dan Ketentuan</a> layanan yang berlaku
          </Typo>
        </ListItem>
        <List style={{marginBottom : 6}}>
          <ListItem style={{paddingLeft : 0}}>
            <Button variant='entry' style={{backgroundColor : yellow.macaroniAndCheese}} onClick={this.onDraft}>
              Simpan Ke Draft
            </Button>
            <ListItemSecondaryAction>
              <Button variant='entry' disabled={this.state.disabled === true ? true : false} style={{width: 130}} height='28px' onClick={this.onPublish}>
                Publish
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        <Typo variant='caption1' style={{color : grey.charchoal, paddingBottom : 41}}>
          *Anda dapat melakukan penerbitan setelah seluruh isian lengkap
        </Typo>
      </div>
    )};      
}

Component.propTypes = {
  classes: PropTypes.object,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};