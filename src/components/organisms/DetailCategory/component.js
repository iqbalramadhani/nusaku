import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typo from '../../elements/Typo';

export default class Component extends React.Component {
  
  render() {
    const { classes, category } = this.props;
    
    return (
      <div className={classes.root}>
        <List>
          <ListItem>
          <img src={category ? category.image.thumbnail:''} width='40px' height='40px'/>
            <ListItemText 
              primary={<Typo variant='heading3'>{category ? category.name : ''}</Typo>} 
              secondary={<Typo variant='subtitle2'>Poin untuk kategori ini : {category ? category.point : ''}</Typo>}
            />
          </ListItem>
        </List>
        <Divider/>
      </div>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};