import React from 'react'
import PropTypes from 'prop-types'

import SimpleLayout from '../../layouts/SimpleLayout'
import AppBars from '../../elements/AppBars'
import Sample from '../../organisms/Sample'
import { NUSAKU_TOKEN } from '../../../constants/value';
import ButtonNavigation from '../../organisms/BottomNavigation'
import {withRouter} from 'next/router'
import Typo from '../../elements/Typo';

export default class Component extends React.Component {

  state = {
    guest : true,
    value : parseInt(this.props.router.query.value),
  }

  componentDidMount(){
    if(localStorage.getItem(NUSAKU_TOKEN)){
      this.setState({guest: false})
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    console.log('isi',this.state.value)
    const appBarVariant = this.state.guest ? 'guest': 'main'
    // const Title = withRouter((props) => (
    //   <h1>{props.router.query.value}</h1>,
    //   <h1>{props.router.query.judul}</h1>
      
      // this.setState({
      //   value : props.router.query.value,
      //   title : props.router.query.title,
      // })
      // console.log('judul',props.router.query.value)
    // ))

    return (
      <SimpleLayout
        appBar={<AppBars variant="main" upFunc={()=>{console.log("Up Up we gooo!")}}/>}
        footer={!this.state.guest ? <ButtonNavigation value={parseInt(this.props.router.query.value)} handleChange={this.handleChange} /> :''}
      >
        <center>
          <Typo style={{paddingTop:"50%"}} variant='heading1' align='center'>{this.props.router.query.title}</Typo>
        </center>
      </SimpleLayout>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object.isRequired,
};
