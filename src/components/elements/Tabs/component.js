import React from 'react';
import PropTypes from 'prop-types';
import Typo from '../../elements/Typo/styles';
import Link from 'next/link';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

export default class Component extends React.Component {

  render() {
    const { classes,value,handleChangeValue,tab} = this.props;
  
    return (
      <Tabs
          value={value}
          onChange={handleChangeValue}
          centered
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
        {tab.map(tabs =>
          <Tab label={tabs}  
          classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
          style={{borderBottom: '5px solid #ccd1d9',borderRadius : 2.5,width:164}}/>
        )}
        </Tabs>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  handleChangeValue : PropTypes.func,
  value : PropTypes.value,
};