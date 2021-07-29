import React from 'react';
import PropTypes from 'prop-types';
import Typo from '../../elements/Typo/styles';
import Link from 'next/link';

export default class Component extends React.Component {
  render() {
    const { classes, children, variant} = this.props;
    
    let element 

    switch (variant) {
      case 'login':
            element = <div className={classes.footer}>
                        <p className={classes.position}>
                        Sudah punya akun? <Link href='/signup'><a className={classes.text}>Daftar</a></Link>
                        </p>
                      </div>
        break;
      default:
        element = <div className={classes.footer}>
        <p className={classes.position}>
          Sudah punya akun? <Link href='/login'><a className={classes.text}>Masuk</a></Link>
        </p>
      </div>
        break;
    }

    return (
      element 
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
};