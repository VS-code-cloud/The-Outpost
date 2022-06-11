import React, { useEffect } from 'react';
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from '@material-ui/core/';

import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { getPost, getPostsBySearch } from '../../actions/posts';
import CommentSection from './CommentSection';
import useStyles from './styles';

const Post = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem('profile'));
  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(
        getPostsBySearch({ search: 'none', tags: post?.tags?.join(',') })
      );
    }
  }, [post]);

  if (!post) return null;

  const openPost = (_id) => history.push(`/posts/${_id}`);

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size='7em' />
      </Paper>
    );
  }

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

  return (
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant='h6' component='h5' className={classes.nameLabel}>
            {post.title}
          </Typography>
          <Typography
            gutterBottom
            variant='h7'
            className={classes.price}
            // color='textSecondary'
            component='h3'
            fontFamily='Montserrat'
          >
            {post?.tags?.map((tag) => `$${tag} `)}
          </Typography>

          <Typography variant='body1' className={classes.timeCreated}>
            {moment(post.createdAt).fromNow()}
          </Typography>
          <div className={classes.imageSection}>
            <img
              className={classes.media}
              src={
                post.selectedFile ||
                'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
              }
              alt={post.title}
            />
          </div>
          <Divider style={{ margin: '10px 0' }} />
          <Typography
            gutterBottom
            variant='body1'
            component='p'
            className={classes.postDetails}
          >
            {post.message}
          </Typography>
          <Typography
            gutterBottom
            variant='body1'
            component='p'
            className={classes.postDetails}
          >
            {post.location}
          </Typography>
          <Typography className={classes.hostedBy}>
            Hosted by: {post.name}
          </Typography>
          <Divider style={{ margin: '20px 0' }} />
          {/* {(user?.result?.googleId === post?.creator ||
            user?.result?._id === post?.creator) && (
            <CommentSection post={post} className={classes.nameLabel} />
            )}*/}
          <CommentSection post={post} className={classes.nameLabel} />
          <Divider style={{ margin: '20px 0' }} />
        </div>
      </div>
      {!!recommendedPosts.length && (
        <div className={classes.section}>
          <Typography
            className={classes.alsoLike}
            gutterBottom
            variant='h5'
            className={classes.nameLabel}
          >
            You might also like:
          </Typography>
          <Divider />
          <div className={classes.recommendedPosts}>
            {recommendedPosts.map(
              ({ title, name, message, likes, selectedFile, _id }) => (
                <div
                  style={{ margin: '20px', cursor: 'pointer' }}
                  onClick={() => openPost(_id)}
                  key={_id}
                >
                  <Typography
                    gutterBottom
                    variant='h6'
                    className={classes.alsoLike}
                  >
                    {title}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant='subtitle2'
                    className={classes.alsoLike}
                  >
                    {name}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant='subtitle2'
                    className={classes.alsoLike}
                  >
                    {message}
                  </Typography>
                  <Typography
                    className={classes.alsoLike}
                    gutterBottom
                    variant='subtitle1'
                  >
                    <FavoriteBorderIcon
                      className={classes.likeIcon}
                      alt={`: ${likes?.length}`}
                    ></FavoriteBorderIcon>
                    Likes: {likes?.length}
                  </Typography>
                  <img src={selectedFile} width='200px' alt='placeholder' />
                </div>
              )
            )}
          </div>
        </div>
      )}
    </Paper>
  );
};

export default Post;
