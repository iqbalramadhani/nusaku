import React from 'react';
import PropTypes from 'prop-types'
import CommentBox from '../../elements/CommentBox';
import CommentInput from '../../elements/CommentInput';

import Button from '@material-ui/core/Button'

export default class PostComments extends React.Component {

  render() {
    const {data, showLoadMore, loadMore, loading,postComment, classes} = this.props
    console.log(data)
    return (
      <div>
        {
          data.map((item)=>{
            return <CommentBox {...item}/>
          })
        }
        { showLoadMore? 
        <div className={classes.loadMoreContainer}>
            <Button fullWidth onClick={loadMore} disabled={loading}>{!loading?"Load More":"Loading..."}</Button>
        </div> : null }
        <CommentInput
          postComment={postComment}
          />
      </div>
    );
  }
}

PostComments.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.array,
  showLoadMore: PropTypes.bool,
  loadMore: PropTypes.func,
  postComment: PropTypes.func,
  updateComment: PropTypes.func,
  deleteComment: PropTypes.func
};

PostComments.defaultProps = {
  showLoadMore: false,
  data: [],
};