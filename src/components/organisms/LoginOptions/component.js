import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Facebook from '../../../constants/facebook';
import Google from '../../../constants/google'
import Divider from '../../elements/Divider';

export default class Component extends React.Component {

  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
        <Divider>ATAU</Divider>
        <List>
          <ListItem className={classes.center}>
        <Facebook/>

              {/* <img src="https://cdn.zeplin.io/5b484cf98ad0118c5fb58780/assets/567CB9A8-143C-4F95-867F-613DB5C90032.png" alt=""></img>
              <ListItemText><a className={classes.text}>Masuk dengan Facebook</a></ListItemText> */}
          </ListItem>
          <ListItem className={classes.center}>
          <Google/>
              {/* <img src="https://cdn.zeplin.io/5b484cf98ad0118c5fb58780/assets/C2DB4FF3-8D38-4B57-A452-000F6A1540FD.png" alt=""></img>
              <ListItemText><a className={classes.text}>Masuk dengan Google</a></ListItemText> */}
          </ListItem>
        </List>
      </div>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};