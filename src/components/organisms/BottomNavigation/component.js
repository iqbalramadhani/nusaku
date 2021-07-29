import React from 'react';
import PropTypes from 'prop-types';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SvgIcon from '@material-ui/core/SvgIcon';
import { iconNav } from '../../../constants/iconNav';
import Typo from '../../elements/Typo'
import Link from 'next/link'

export default class Component extends React.Component {

  state = {
    
  };


  onHome = () =>{
    console.log('ini home');
  }

  render() {
    const { classes,value,handleChange } = this.props;

    let fill = ''


    return (
      <div className={classes.root}>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          showLabels
        >
          <Link href={{pathname : '/dummy', query : {title : 'Home',value : 0}}}>
            <BottomNavigationAction style={{minWidth:0}} label={<Typo variant={value === 0 ? 'caption2': 'caption1'}>Home</Typo>} 
                showLabel={true}
                icon={<SvgIcon>{value === 0 ? iconNav.homeActive : iconNav.home }</SvgIcon>}>
            </BottomNavigationAction>
          </Link>
          <Link href={{pathname : '/dummy', query : {title : 'Explore',value : 1}}}>
            <BottomNavigationAction style={{minWidth:0}} label={<Typo variant={value === 1 ? 'caption2': 'caption1'}>Explore</Typo>} 
                showLabel={true}
                icon={<SvgIcon>{value === 1 ? iconNav.exploreActive : iconNav.explore }</SvgIcon>}>
            </BottomNavigationAction>
          </Link>
          <Link href={{pathname : '/dummy', query : {title : 'Post Page',value : 2}}}>
            <BottomNavigationAction style={{minWidth:0}} label={<Typo variant={value === 2 ? 'caption2': 'caption1'}>Post</Typo>} 
                showLabel={true}
                icon={<SvgIcon>{value === 2 ? iconNav.postActive : iconNav.post }</SvgIcon>}>
            </BottomNavigationAction>
          </Link>
          <Link href={{pathname : '/dummy', query : {title : 'Reward Page',value : 3}}}>
            <BottomNavigationAction style={{minWidth:0}} label={<Typo variant={value === 3 ? 'caption2': 'caption1'}>Reward</Typo>} 
                showLabel={true}
                icon={<SvgIcon>{value === 3 ? iconNav.rewardActive : iconNav.reward }</SvgIcon>}>
            </BottomNavigationAction>
          </Link>
          <Link href={{pathname : '/dummy', query : {title : 'Profile Page',value : 4}}}>
            <BottomNavigationAction style={{minWidth:0}} label={<Typo variant={value === 4 ? 'caption2': 'caption1'}>Profile</Typo>}   
                showLabel={true}
                icon={<SvgIcon>{value === 4 ? iconNav.profileActive : iconNav.profile }</SvgIcon>}>
            </BottomNavigationAction>
          </Link>
        </BottomNavigation>
      </div>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};