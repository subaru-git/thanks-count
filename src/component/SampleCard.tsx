import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import TwitterLogo from '../Twitter_Logo_WhiteOnBlue.png';

const useStyles = makeStyles(({ breakpoints, spacing, palette }) => ({
  root: {
    margin: 'auto',
    borderRadius: spacing(2),
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    width: '300px',
    overflow: 'initial',
    background: palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: spacing(2),
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(2),
    },
  },
  media: {
    width: '100px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: spacing(-3),
    height: '100px',
    borderRadius: spacing(2),
    backgroundColor: '#efefef',
    position: 'relative',
    [breakpoints.up('md')]: {
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: 'translateX(-8px)',
    },
  },
  content: {
    padding: 24,
  },
}));

const SampleCard: FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={TwitterLogo} />
      <CardContent className={classes.content}>
        〇〇の店員さん ありがとう
      </CardContent>
    </Card>
  );
};

export default SampleCard;
