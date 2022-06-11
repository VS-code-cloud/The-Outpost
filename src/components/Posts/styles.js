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
    marginRight: '0px',

    fontFamily: 'Montserrat',
    color: 'black',
    fontSize: '14px',

    width: '75px',
    fontWeight: '900',
    borderRadius: '7px',
  },
}));
