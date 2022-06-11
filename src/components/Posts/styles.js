import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  container: {
    // marginTop: '100px',
  },
  nopost: {
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },
  Button: {
    backgroundColor: 'white',
    marginLeft: '10px',
    marginRight: '10px',

    fontFamily: 'Montserrat',
    color: 'black',
    fontSize: '10px',
    display: 'flex',

    width: '75px',
    fontWeight: '900',
  },
}));
