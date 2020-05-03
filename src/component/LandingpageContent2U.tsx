import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SampleCard from './SampleCard';

const useStyles = makeStyles(theme => ({
  content: {
    backgroundColor: theme.palette.background.paper,
  },
  summary: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(4),
    },
  },
}));

const LandingpageContent2U: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Container maxWidth="md">
        <Grid container spacing={2} justify="center">
          <Grid className={classes.summary} item>
            <Typography variant="h6" align="center" color="textPrimary">
              ありがとうと思ったらつぶやこう
            </Typography>
          </Grid>
          <Grid item>
            <SampleCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default LandingpageContent2U;
