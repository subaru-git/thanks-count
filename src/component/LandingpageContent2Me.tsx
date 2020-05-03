import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Graph from '../graph_image.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  content: {
    paddingTop: theme.spacing(2),
  },
}));

const LandingpageContent2Me: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid
          className={classes.content}
          container
          spacing={2}
          justify="center"
        >
          <Grid item>
            <img src={Graph} alt="graph" />
          </Grid>
          <Grid item>
            <Typography variant="h6" align="center" color="textPrimary">
              自分をホメよう
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default LandingpageContent2Me;
