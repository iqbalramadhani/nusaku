import { withStyles } from '@material-ui/core/styles';
import Component from './component';
import styles from './styles';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './action';

function mapStateToProps(state) {
  const { token } = state.login;
  return {
    token
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

const Styled = withStyles(styles)(Component);
const Connected = connect(mapStateToProps, mapDispatchToProps)(Styled);

export default Connected;
