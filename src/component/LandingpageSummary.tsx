import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  buttons: {
    marginTop: theme.spacing(4),
  },
}));

const LandingpageSummary: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
          noWrap
        >
          ありがとうを記録しよう
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          ありがとうと感じた素敵な気持ちをカタチにしよう
        </Typography>
        <div className={classes.buttons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                GetStarted
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default LandingpageSummary;
