import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '../../elements/Divider';
import Grid from '@material-ui/core/Grid';
import Typo from '../../elements/Typo';
import {grey} from '../../../constants/colors';
import { iconNav } from '../../../constants/iconNav';
import { SvgIcon, IconButton } from '@material-ui/core';
import Icons from '../../elements/Icon';

export default class Component extends React.Component {
  state = {
    love : 'lovenon'
  }

  handleClick = () => (
    this.state.love === 'lovenon' ? this.setState({love:'love'}) : this.setState({love:'lovenon'})
  )

  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
        <Typo variant='subtitle1' style={{color:grey.cool,marginTop:15,marginBottom:15,paddingLeft:20}}>Bagikan :</Typo>
        <Grid container style={{paddingLeft:8}}>
          <Grid xs={9} style={{paddingRight:52,flexBasis:"auto"}}>
            <img src="https://cdn.zeplin.io/5b484cf98ad0118c5fb58780/assets/8B41B901-CE65-4159-A01F-2C29F7E39467.png"/>
            <img src="https://cdn.zeplin.io/5b484cf98ad0118c5fb58780/assets/09D32C6B-147D-4E62-835F-41DF230264E8.png"/>
            <img src="https://cdn.zeplin.io/5b484cf98ad0118c5fb58780/assets/1C49D04E-BC8C-4078-838C-4A455F9C5A82.png"/>
            <img src="https://cdn.zeplin.io/5b484cf98ad0118c5fb58780/assets/1450D3B6-159E-4366-8505-93285539F10C.png"/>
          </Grid>
          <Grid item xs={1}>  
            <IconButton onClick={this.handleClick}><Icons variant={this.state.love}/></IconButton>
          </Grid>
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