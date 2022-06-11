import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    fontFamily: 'Montserrat',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: 'white',
    backgroundColor: 'black',
    fontFamily: 'Montserrat',
  },
  googleButton: {
    marginBottom: theme.spacing(2),
    color: 'white',
    backgroundColor: 'black',
    fontFamily: 'Montserrat',
  },
  header: {
    fontFamily: 'Montserrat',
    fontSize: '1.5rem',
    fontWeight: '900',
  },
  button: {
    fontFamily: 'Montserrat',
    fontWeight: '900',
  },
  name: {
    fontFamily: 'Montserrat',
    fontSize: '12',
    color: '#',
  },
  signup: {
    hover: 'red',
    fontFamily: 'Montserrat',
    fontSize: '10',
    cursor: 'pointer',
  },
  inputRoot: {
    fontSize: 11,
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
