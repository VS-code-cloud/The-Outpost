import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: '75%',
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // backgroundBlendMode: 'darken',
    cursor: 'pointer',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '30px',
    right: '10px',
    color: 'white',
  },
  overlay3: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: '14px',
  },
  overlay4: {
    position: 'absolute',
    top: '60px',
    right: '10px',
    color: 'white',
  },

  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '5px',

    color: 'black',
    fontFamily: 'Montserrat',
  },
  title: {
    padding: '0 10px',

    color: 'black',
    fontSize: '14px',
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
  location: {
    padding: '0 10px',

    color: 'black',
    fontSize: '12px',
    fontFamily: 'Montserrat',
  },
  message: {
    padding: '0 10px',
    color: 'black',
    fontSize: '12px',
    fontFamily: 'Montserrat',
  },
  price: {
    padding: '0 10px',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '13px',
    fontFamily: 'Montserrat',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  likeButton: {
    fontFamily: 'Montserrat',
    color: 'black',
  },
  deleteButton: {
    color: 'black',
    fontFamily: 'Montserrat',
  },
  creator: {
    fontFamily: 'Montserrat',
    top: '1px',
    left: '20px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  like: {
    fontFamily: 'Montserrat',
    fontSize: '1px',
  },
});
