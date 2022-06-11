import { makeStyles } from '@material-ui/core/styles';
import UploadIcon from './UploadIcon';
export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      color: 'black',
      fontFamily: 'Montserrat',
    },
  },
  paperwrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    borderRadius: 30,
    padding: theme.spacing(2),
    color: 'black',
    fontFamily: 'Montserrat',
    fontSize: '20px',
    borderColor: 'black',
    borderWidth: '1px',
    height: '500px',
    width: '300px',
    [theme.breakpoints.up('lg')]: {
      width: '100%',
    },

    backgroundColor: 'transparent',
    position: 'center',
  },
  paperSmall: {
    borderRadius: 30,
    padding: theme.spacing(2),
    color: 'black',
    fontFamily: 'Montserrat',
    fontSize: '20px',
    borderColor: 'black',
    borderWidth: '1px',
    height: '50px',
    width: '300px',
    [theme.breakpoints.up('lg')]: {
      width: '100%',
    },

    backgroundColor: 'transparent',
    position: 'center',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    color: 'black',
    fontFamily: 'Montserrat',
  },

  displayBlock: {
    display: 'block',
    position: 'center',
  },

  displayNone: {
    display: 'none',
  },
  modelMain: {
    position: 'fixed',
    background: 'white',
    width: '80%',
    height: 'auto',
    top: '50%',
    left: '50%',
    transform: `translate(-50%,-50%)`,
  },
  fileInput: {
    margin: '10px 0',
    marginTop: 0,

    color: 'black',
    fontFamily: 'Montserrat',
    icon: { UploadIcon },
    position: 'center',
    cursor: 'pointer',
    height: '35px',
    width: '150px',
    [theme.breakpoints.down('lg')]: {
      width: '50px',
    },
    // display: 'none',
  },

  tittleField: {
    borderColor: 'black',
  },
  textField: {
    borderColor: 'black',
  },
  buttonSubmit: {
    marginTop: 0,

    borderRadius: 10,
    marginBottom: 20,
    marginRight: '35px',
    color: 'white',
    backgroundColor: 'black',
    fontFamily: 'Montserrat',
    height: '40px',
    width: '100px',
    [theme.breakpoints.down('lg')]: {
      marginTop: 40,
      marginBottom: 20,
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: 10,

      width: '60%',
    },
  },

  buttonClear: {
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,

    color: 'white',
    backgroundColor: 'black',
    fontFamily: 'Montserrat',
  },
  input: {
    color: 'black',
    fontFamily: 'Montserrat',
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
  font: {
    color: 'black',
    fontFamily: 'Montserrat',
  },
  labelFocused: {},
  inputLocation: {
    fontSize: 12,
    fontFamily: 'Montserrat',
    borderColor: 'grey',
  },
  priceInput: {
    fontSize: 12,
    marginLeft: '10px',
    marginRight: '10px',
    display: 'flex',
    borderColor: 'black',
    flexDirection: 'row-reverse',
    [theme.breakpoints.down('lg')]: {
      marginTop: '1px',
      height: '33px',
      width: '100%',
    },
    fontFamily: 'Montserrat',
    width: '30%',
    height: '35px',
  },
  location: {
    borderRadius: 5,
    color: 'black',
    borderColor: '#DEDEDE',

    elevation: 13,
    marginBottom: '10px',
    height: '25px',
    borderWidth: `1px`,
    marginTop: '5px',
    [theme.breakpoints.up('lg')]: {
      marginTop: '7px',
      width: '100%',
    },
    fontSize: 12,
    width: '278px',
    outlined: 'none',
    display: 'flex',
    fontFamily: 'Montserrat',
  },
  locationAlgolia: {
    width: '284px',
    height: '30px',
    fontSize: 10,
    [theme.breakpoints.up('lg')]: {
      marginTop: '6px',
      fontSize: 10,

      width: '800px',
    },
  },
}));
