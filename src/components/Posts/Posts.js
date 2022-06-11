import React from 'react';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId, showModal }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();

  if (!posts?.length && !isLoading)
    return <Typography className={classes.nopost}>No posts</Typography>;
  console.log(posts);
  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid
      container
      alignItems='stretch'
      spacing={3}
      className={classes.mainContainer}
    >
      {posts?.map((post) => (
        <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
          {/*uncomment below and comment out line above to remove map*/}
          {/* <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>*/}
          <Post post={post} setCurrentId={setCurrentId} showModal={showModal} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
