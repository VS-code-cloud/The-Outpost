import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',
  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
    fontFamily: 'Montserrat',
  },
  messages: {
    marginLeft: '0px',
  },
  commentsOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: 'Montserrat',
    fontSize: '16px',
  },
  commentsInnerContainer: {
    height: '275px',
    overflowY: 'auto',
    marginRight: '15px',
    fontFamily: 'Montserrat',
    fontSize: '16px',
    marginLeft: '0px',
  },
  price: {
    fontFamily: 'Montserrat',
    fontSize: '15px',
  },
  buttonMessage: {
    fontFamily: 'Montserrat',
    backgroundColor: 'black',
    color: 'white',
  },
  nameLabel: {
    fontFamily: 'Montserrat',
    fontSize: '16px',
  },
  timeCreated: {
    fontFamily: 'Montserrat',
    fontSize: '13px',
  },
  postDetails: {
    fontFamily: 'Montserrat',
    fontSize: '12px',
  },
  hostedBy: {
    fontFamily: 'Montserrat',
    fontSize: '11px',
  },
  alsoLike: {
    fontFamily: 'Montserrat',
    fontSize: '11px',
  },
  likeIcon: {
    marginTop: '0px',
  },
  inputRoot: {
    fontSize: 12,
    fontFamily: 'Montserrat',
  },
  labelRoot: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    color: 'black',
    '&$labelFocused': {
      color: 'black',
    },
  },
  labelFocused: {},
  leaveMessage: {},
  messageDetails: {
    fontFamily: 'Montserrat',
    fontSize: '13px',
  },
  messageName: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: '14px',
  },
}));
