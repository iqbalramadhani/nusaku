import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typo from '../../elements/Typo';


export default class CommentBox extends React.Component {
  render() {
    const {classes, name, message, avatar} = this.props
    return (
      <div className={classes.box}>
        <Grid container wrap="nowrap">
          <Grid item>
            <Avatar className={classes.avatar} src={avatar}></Avatar>
          </Grid>
          <Grid item>
            <Typo variant="subtitle2">{name}</Typo>
            <Typo variant="body2">{message}</Typo>
          </Grid>
        </Grid>
      </div>
    );
  }
}

CommentBox.propTypes = {
  classes: PropTypes.object,
  avatar: PropTypes.string,
  name: PropTypes.string,
  message: PropTypes.string,
}