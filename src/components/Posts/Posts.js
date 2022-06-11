import React, {Button} from 'react';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId, showModal }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();
  function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
  function CreateCommunity() {
    let communityId = generateUUID();

  }
  if (!posts?.length && !isLoading)
    return <Typography className={classes.nopost}>No posts</Typography>;
  console.log(posts);
  return isLoading ? (
    <CircularProgress />
  ) : (
    <><div id="GSCCModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
 <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="myModalLabel">Create a Community</h4>
      </div>
      <div class="modal-body">
        <input placeholder="Community Name"/>
      </div>
      <div class="modal-footer">
        <button type="button" class={classes.Button} data-dismiss="modal">Close</button>
        <button type="button" class={classes.Button}>Create</button>
      </div>
    </div>
  </div>
  <div id="GSCCModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
 <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class={classes.Button} id="myModalLabel">Join a Community</h4>
      </div>
      <div class="modal-body">
        <input placeholder="Community Code"/>
      </div>
      <div class="modal-footer">
        <button type="button" class={classes.Button} data-dismiss="modal">Close</button>
        <button type="button" class={classes.Button}>Join</button>
      </div>
    </div>
  </div>
</div>
</div>
<br></br>
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
    </Grid></>
  );
};

export default Posts;
