import React, { useState, useRef } from 'react';
import { Typography, TextField, Button } from '@material-ui/core/';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { commentPost } from '../../actions/posts';
import useStyles from './styles';

const CommentSection = ({ post }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const [comments, setComments] = useState(post?.comments);
  const history = useHistory();
  const classes = useStyles();
  const commentsRef = useRef();

  const handleComment = async () => {
    if (!user?.token) {
      history.push('/auth');
    } else {
      const newComments = await dispatch(
        commentPost(`${user?.result?.name}: ${comment}`, post._id)
      );

      setComment('');
      setComments(newComments);

      commentsRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography gutterBottom variant='h7' className={classes.messages}>
            Messages:
          </Typography>
          {comments?.map((c, i) => (
            <Typography
              key={i}
              className={classes.messageDetails}
              gutterBottom
              variant='subtitle1'
            >
              <strong className={classes.messageName}>
                {c.split(`: `)[0]}
              </strong>
              : {c.split(`:`)[1]}
            </Typography>
          ))}
          <div ref={commentsRef} />
        </div>
        <div style={{ width: '70%' }}>
          <Typography
            className={classes.leaveMessage}
            gutterBottom
            variant='h7'
          >
            Leave a message
          </Typography>
          <TextField
            fullWidth
            rows={10}
            variant='outlined'
            label='leave message...'
            multiline
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            InputProps={{ classes: { root: classes.inputRoot } }}
            InputLabelProps={{
              classes: {
                root: classes.labelRoot,
                focused: classes.labelFocused,
              },
            }}
            margin='normal'
          />
          <br />
          <Button
            className={classes.buttonMessage}
            style={{ marginTop: '10px' }}
            fullWidth
            disabled={!comment.length}
            color='primary'
            variant='contained'
            onClick={handleComment}
          >
            Message
          </Button>
        </div>
      </div>
    </div>
  );
};
export default CommentSection;
