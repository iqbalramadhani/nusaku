import React from "react";
import PropTypes from "prop-types";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

export default class Component extends React.Component {
  state = {
    checked: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    return (
      <Checkbox
        checked={this.state.checked}
        onChange={this.handleChange("checked")}
        className={classes.size}
        icon={<CheckBoxOutlineBlankIcon className={classes.sizeIcon} />}
        checkedIcon={<CheckBoxIcon className={classes.sizeIcon} />}
        value="checked"
        classes={{
          root: classes.root,
          checked: classes.checked
        }}
      />
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object.isRequired
};