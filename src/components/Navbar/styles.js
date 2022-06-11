import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between-evenly',
    alignItems: 'center',
    backgroundColor: 'black',
    // padding: '10px 50px',
    height: '64px',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-around-evenly',
    },
  },

  heading: {
    color: 'white',
    fontFamily: 'Montserrat',
    // color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
    fontSize: '2em',
    fontWeight: 300,
  },
  image: {
    marginRight: '0px',

    display: 'flex',
    justifyContent: 'flex-start',

    // alignItems: 'center',
    marginLeft: '0px',

    color: 'white',
    fontFamily: 'Montserrat',
    // [theme.breakpoints.down('sm')]: {
    //   display: 'none',
    // },
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    height: '40px',

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-around',
    // width: '200px',
    // alignItems: 'center',
    // [theme.breakpoints.down('sm')]: {
    //   width: 'auto',
    //   marginRight: '0px',
    //   justifyContent: 'center',
    // },
  },
  userName: {
    display: 'flex',

    alignItems: 'center',
    marginLeft: '10px',
    marginRight: '10px',
    color: 'white',
    fontFamily: 'Montserrat',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  brandContainer: {
    display: 'flex',
    marginLeft: '0px',
  },
  brand: {
    display: 'flex',
    alignItems: 'left',
    marginLeft: '0px',
    marginTop: '5px',
    justifyContent: 'flex-start',
  },
  paper: {
    blackgroundColor: 'transparent',
  },
  black: {
    display: 'flex',
    marginLeft: '5px',

    backgroundColor: 'black',
    fontFamily: 'Montserrat',
  },
  add: {
    color: 'white',
  },
  logout: {
    backgroundColor: 'white',

    marginRight: '0px',
    // marginLeft: '0px',
    fontFamily: 'Montserrat',
    color: 'black',
    fontSize: '10px',

    display: 'flex',
    // position: 'absolute',
    // float: 'right',
    height: '50%',
    width: '20%',
    // [theme.breakpoints.down('xs')]: {
    //   width: '60%',
    // },
    // width: '73px',
    fontWeight: '900',
    // justifyContent: 'center',
  },
  logo: {
    display: 'flex',
    cursor: 'pointer',
    marginRight: '0px',
  },
  searchinput: {
    borderRadius: 4,
    display: 'flex',
    position: 'relative',
    fontFamily: 'Montserrat',
    width: '60%',
    height: '50%',
    backgroundColor: 'white',
    fontColor: 'black',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  pricesearchinput: {
    borderRadius: 4,
    display: 'flex',
    position: 'relative',
    fontFamily: 'Montserrat',
    width: '8%',
    height: '50%',
    // alignItems: 'center',
    // alignText: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    outline: 'none',
    marginLeft: '11px',

    backgroundColor: 'white',
    fontColor: 'black',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  searchButton: {
    backgroundColor: 'white',
    marginLeft: '10px',
    marginRight: '0px',

    fontFamily: 'Montserrat',
    color: 'black',
    fontSize: '10px',
    display: 'flex',

    width: '75px',
    fontWeight: '900',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  avatar: {
    display: 'flex',
    cursor: 'pointer',
    marginRight: '0px',
  },
  inputRoot: {
    fontSize: 12,
    fontFamily: 'Montserrat',
  },
  labelRoot: {
    fontSize: 12,
    color: 'black',
    fontFamily: 'Montserrat',
    '&$labelFocused': {
      color: 'black',
    },
  },
  labelFocused: {},
}));
