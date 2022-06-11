import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'black',
    fontFamily: 'Montserrat',
  },
  image: {
    marginLeft: '15px',
  },
  bottomNav: {
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'black',
    position: 'fixed',
    width: '100%',
  },
  container: {
    position: 'absolute',
    bottom: '50px',
    top: '0',
    overflowY: 'scroll',
  },
}));
