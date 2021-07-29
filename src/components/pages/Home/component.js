import React from 'react'
import PropTypes from 'prop-types'

import SimpleLayout from '../../layouts/SimpleLayout'
import AppBars from '../../elements/AppBars'
import Sample from '../../organisms/Sample'
import { NUSAKU_TOKEN } from '../../../constants/value';

export default class Component extends React.Component {

  state = {
    guest : true,
  }

  componentDidMount(){
    if(localStorage.getItem(NUSAKU_TOKEN)){
      this.setState({guest: false})
    }
  }

  render() {
    const { classes } = this.props;

    const appBarVariant = this.state.guest ? 'guest': 'main'
    return (
      <SimpleLayout
        appBar={<AppBars variant={appBarVariant}/>}
      >
        <center>
          <Sample/>
        </center>
      </SimpleLayout>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object.isRequired,
};
