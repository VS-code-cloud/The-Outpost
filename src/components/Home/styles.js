// import { makeStyles } from '@material-ui/core/styles';

// export default makeStyles((theme) => ({
//   appBarSearch: {
//     borderRadius: 4,
//     marginBottom: '1rem',
//     display: 'flex',
//     padding: '16px',
//     position: 'relative',
//   },
//   addBar: {
//     borderRadius: 15,
//     margin: '500px 0',

//     display: 'flex',

//     flexDirection: 'row-reverse',
//     justifyContent: 'space-between-evenly',
//     alignItems: 'center',
//     backgroundColor: 'transparent',

//     // padding: '10px 50px',

//     height: '64px',
//   },
//   addIcon: {
//     float: 'right',
//   },
//   addName: {
//     display: 'block',
//   },
//   pagination: {
//     borderRadius: 4,
//     marginTop: '1rem',
//     padding: '16px',
//   },
//   gridContainer: {
//     [theme.breakpoints.down('xs')]: {
//       flexDirection: 'column-reverse',
//     },
//     // flexDirection: 'column-reverse',
//     // float: 'right',
//   },
//   searchButton: {
//     color: 'white',
//     backgroundColor: 'black',
//     fontFamily: 'Montserrat',
//   },
//   bottomNav: {
//     position: 'fixed',
//     bottom: 0,
//     width: '100%',
//     zIndex: 1,
//     color: 'black',
//   },
//   inputFormHide: {
//     display: 'none',
//   },
//   inputFormShow: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   add: {
//     // width: '25px',
//     position: 'fixed',
//     top: '25%',
//     left: '10px',
//   },
//   centerForm: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%',
//   },
// }));

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
    position: 'relative',
  },
  addBar: {
    borderRadius: 15,
    margin: '650px 0',
    marginLeft: '100px',
    display: 'flex',
    height: '50px',
    width: '20%',
    flexDirection: 'row-reverse',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'row',
    },
    justifyContent: 'space-between-evenly',
    alignItems: 'center',
    backgroundColor: 'transparent',

    // padding: '10px 50px',

    height: '64px',
  },
  addIcon: {
    float: 'right',
  },
  addName: {
    display: 'block',
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  searchButton: {
    color: 'white',
    backgroundColor: 'black',
    fontFamily: 'Montserrat',
  },
  bottomNav: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    zIndex: 1,
    color: 'black',
  },
  inputFormHide: {
    display: 'none',
  },
  inputFormShow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  add: {
    // width: '25px',
    position: 'fixed',
    top: '25%',
    left: '10px',
  },
  centerForm: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
}));
