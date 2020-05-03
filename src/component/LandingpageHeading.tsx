import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

const Heading: FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <ThumbUpIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Thanks count
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Heading;
