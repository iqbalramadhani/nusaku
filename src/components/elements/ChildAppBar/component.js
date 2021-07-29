import React from 'react';
import PropTypes from 'prop-types';

import AppBarCenter from '../../layouts/AppBarCenter';

export default class Component extends React.Component {
  render() {
    const { classes, children, isGues} = this.props;

    const isGuest = true
    const appBarStyle = isGuest ?  classes.guestTheme : classes.userTheme

    return (
      <AppBarCenter
        style={appBarStyle}
        left={<img src="https://cdn.zeplin.io/5b484cf98ad0118c5fb58780/assets/39C02800-D699-450F-972D-05BD9516E4D0.png" alt="" width={56} height={56} onClick={this.props.upFunc}/>}
        center={<img src="https://cdn.zeplin.io/5b484cf98ad0118c5fb58780/assets/5E9B686E-919F-44F7-98AD-F8E90E04869E.png" alt="" width={104} height={56}/>}
      />
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
};