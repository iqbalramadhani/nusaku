import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '../../elements/Divider';
import Typo from '../../elements/Typo';

export default class Component extends React.Component {

  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
        <center>
          <Typo variant='heading1' align='center'>Sample Page of Nothing</Typo>
        </center>
      </div>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};