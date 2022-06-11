import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Typography,
  Toolbar,
  Avatar,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl, 
  OutlinedInput,
  Box,
  Chip
} from '@material-ui/core';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { SelectChangeEvent } from '@mui/material/Select';

import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import ChipInput from 'material-ui-chip-input';
import Form from '../Form/Form';
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
const Navbar = ({isLoggedIn, communities}) => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  console.log('isloggedin', isLoggedIn)
  const classes = useStyles();

  const [currentId, setCurrentId] = useState(0);
  console.log('communities', communities)
  const query = useQuery();
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
  const theme = useTheme();
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);
  var [communityNames, setCommunityNames] = React.useState([]);
  console.log('communities', communities)
  if (!communities?.includes("Global") && communityNames.length===0) {
    setCommunityNames([...communityNames, "Communities:"])
    communities?.push("Global")
  }
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    communityNames = communityNames?.filter(e => e !== "Communities");
    communityNames = value;
    setCommunityNames();
    setCommunityNames(communityNames);
      // On autofill we get a stringified value.
  };
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
      <p>The</p>
      <h2>Outpost</h2>
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
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={communityNames}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected?.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {communities?.map((community) => (
              <MenuItem
                key={community}
                value={community}
              >
                {community}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
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
