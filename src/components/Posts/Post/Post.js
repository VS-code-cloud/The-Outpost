import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
} from '@material-ui/core/';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId, showModal }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();

  const Likes = () => {
    console.log(post);
    if (post?.likes?.length > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <FavoriteBorderIcon fontSize='small' />
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}
        </>
      ) : (
        <>
          <FavoriteBorderIcon fontSize='small' />
          &nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
        </>
      );
    }

    return (
      <>
        <FavoriteBorderIcon fontSize='small' />
        &nbsp;Like
      </>
    );
  };
  const handleLike = () => {
    if (!user?.token) {
      history.push('/auth');
    } else {
      dispatch(likePost(post._id));
    }
  };
  const openPost = (e) => {
    // dispatch(getPost(post._id, history));

    history.push(`/posts/${post._id}`);
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          post.selectedFile ||
          'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
        }
        title={post.title}
        onClick={openPost}
      />
      <div className={classes.overlay}>
        {/*<Typography className={classes.creator}>{post.name}</Typography> */}
        <Typography className={classes.creator} variant='body2'>
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      {(user?.result?.googleId === post?.creator ||
        user?.result?._id === post?.creator) && (
        <div className={classes.overlay2}>
          <Button
            onClick={() => {
              showModal();
              setCurrentId(post._id);
            }}
            style={{ color: 'white' }}
            size='small'
          >
            <MoreHorizIcon fontSize='default' />
          </Button>
        </div>
      )}

      <div>
        <Button
          className={classes.overlay3}
          size='small'
          color='primary'
          //  disabled={!user?.result}
          //onClick={() => dispatch(likePost(post._id))}
          onClick={handleLike}
        >
          <Likes />
        </Button>
      </div>
      <div className={classes.details}></div>
      <Typography
        className={classes.title}
        //gutterBottom
        variant='h6'
        component='h2'
      >
        {post.title}
      </Typography>
      <Typography
        className={classes.location}
        //gutterBottom
        variant='h6'
        component='h2'
      >
        {post.location}
      </Typography>
      <Typography className={classes.message}>{post.message}</Typography>
      <Typography
        className={classes.price}
        //gutterBottom
        variant='h6'
        component='h2'
      >
        {`$${post.tags}`}
      </Typography>

      {/*<CardContent className={classes.message}>
       
       </CardContent> */}

      <CardActions>
        {/*  <Button
          className={classes.likeButton}
          size='small'
          color='primary'
          //  disabled={!user?.result}
          //onClick={() => dispatch(likePost(post._id))}
          onClick={handleLike}
        >
          <Likes />
        </Button>*/}

        {(user?.result?.googleId === post?.creator ||
          user?.result?._id === post?.creator) && (
          <Button
            className={classes.overlay4}
            size='small'
            color='secondary'
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteIcon fontSize='small' />
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
