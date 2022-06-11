import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Typography,
  Toolbar,
  Avatar,
  Button,
  TextField,
  InputBase,
} from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import ChipInput from 'material-ui-chip-input';
import Form from '../Form/Form';
import silkroadText from '../../images/silkroadLogo.png';
import silkroadLogo from '../../images/imgLogo.png';
// import { Autocomplete } from '@react-google-maps/api';
import {
  getPosts,
  getPostsBySearch,
  getPostsByUser,
} from '../../actions/posts';
// import SearchIcon from '@material-ui/icons/Search';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const classes = useStyles();

  const [currentId, setCurrentId] = useState(0);

  const query = useQuery();

  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };
  // const login = () => {
  //   console.log('login');
  //   dispatch({ type: actionType.LOGIN });

  //   history.push('/auth');

  //   setUser(null);
  // };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  const searchPost = () => {
    if (search.trim()) {
      //to have something to dispatch we need to create the action 'getPostsBySearch
      //dispatch -> fetch search post
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
      // history.push(`/posts/search?searchQuery=${search || 'none'}`);
      history.push(
        `/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`
      );
    } else {
      history.push('/');
    }
  };
  // const searchByUser = () => {
  //   const user = JSON.parse(localStorage.getItem('profile'));
  //   if (user) dispatch(getPostsByUser(user.result._id));
  //   history.push(`/posts/user/`);
  //   console.log(user);
  // };

  const handleKeyPress = (e) => {
    console.log(e.key);
    if (e.key === 'Enter') {
      searchPost();
      // search post
    }
  };
  const handleAddChip = (tag) => setTags([...tags, tag]);

  const handleDeleteChip = (chipToDelete) =>
    setTags(tags.filter((tag) => tag !== chipToDelete));

  return (
    <AppBar className={classes.appBar} position='sticky' color='inherit'>
      <Link to='/' className={classes.brandContainer}>
        <img
          className={classes.text}
          component={Link}
          to='/'
          src={silkroadText}
          alt='icon'
          height='40px'
        />
        <img
          className={classes.image}
          component={Link}
          to='/'
          src={silkroadLogo}
          alt='icon'
          height='40px'
        />
      </Link>
      <TextField
        name='search'
        variant='outlined'
        className={classes.searchinput}
        label={`Search by name...`}
        onKeyPress={handleKeyPress}
        size={`small`}
        fontFamily={`Montserrat`}
        value={search}
        // fullWidth
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          style: { fontSize: 12 },
          classes: { root: classes.inputRoot },
        }}
        InputLabelProps={{
          style: { fontSize: 12 },
          classes: {
            root: classes.labelRoot,
            focused: classes.labelFocused,
          },
        }}
      />
      <br />

      <ChipInput
        name='search'
        style={{ margin: '5px 5px 5px 5px' }}
        value={tags}
        onAdd={(chip) => handleAddChip(chip)}
        onDelete={(chip) => handleDeleteChip(chip)}
        size={`small`}
        height={'small'}
        variant='outlined'
        fullWidth
        disableUnderline={true}
        // alignText='center'
        alignItem='center'
        fontFamily={`Montserrat`}
        label='price'
        className={classes.pricesearchinput}
        InputProps={{
          style: { fontSize: 11 },
          classes: { root: classes.inputRoot },
        }}
        InputLabelProps={{
          style: { fontSize: 11 },
          classes: {
            root: classes.labelRoot,
            focused: classes.labelFocused,
          },
        }}
      />

      <Button
        onClick={searchPost}
        className={classes.searchButton}
        // color='primary'
        variant='contained'
      >
        Search
      </Button>

      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <>
            <div className={classes.profile}>
              <Typography className={classes.userName} variant='h6'>
                {user?.result.name.slice(0, user?.result.name.indexOf(' '))}
                {/*   {user?.result.name}*/}
              </Typography>

              <Avatar
                className={classes.avatar}
                alt={user?.result.name}
                src={user?.result.imageUrl}
                onClick={logout}
              >
                {user?.result.name.charAt(0)}
              </Avatar>
            </div>
          </>
        ) : (
          <Button
            className={classes.logout}
            component={Link}
            to='/auth'
            //   onClick={login}
            variant='contained'
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
