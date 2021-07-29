import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
// import Input from '@material-ui/core/Input'

import Input from '@material-ui/core/Input';

import Typo from '../Typo'


export default class CommentInput extends React.Component {

  state={
    comment: ''
  }

  constructor(props){
    super(props)
  }

  render() {
    const { classes, postComment } = this.props
    return (
      <div className={classes.container}>
        <div className={classes.textBox}>
          <Input
            id="outlined-textarea"
            placeholder="Tambah Komentar"
            multiline
            disableUnderline={true}
            fullWidth={true}
            onChange={(ev)=>this.setState({comment: ev.target.value})}
            inputProps={{className: classes.textField}}
            margin="normal"
            variant="outlined"
          />
        </div>
        <div className={classes.sendButtonContainer}>
          <Button
            className={classes.sendButton}
            disableRipple
            autoCapitalize={false}
            onClick={()=>postComment(this.state.comment)}>Kirim</Button>
        </div>
      </div>
    );
  }
}

CommentInput.PropTypes = {
  postComment: PropTypes.func,
}