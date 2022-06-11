import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { fontSize } from '@mui/system';
import useStyles from './styles';

const Input = ({
  name,
  handleChange,
  label,
  half,
  autoFocus,
  type,
  handleShowPassword,
}) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={handleChange}
        variant='outlined'
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        InputLabelProps={{
          style: { fontSize: 12 },
          classes: {
            root: classes.labelRoot,
            focused: classes.labelFocused,
          },
        }}
        InputProps={
          name === 'password'
            ? {
                style: { fontSize: 12 },
                classes: { root: classes.inputRoot },
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={handleShowPassword}>
                      {type === 'password' ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
};

export default Input;
