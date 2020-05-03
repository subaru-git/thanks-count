import React, { FC } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Heading from '../component/LandingpageHeading';
import Summary from '../component/LandingpageSummary';
import Content2U from '../component/LandingpageContent2U';
import Content2Me from '../component/LandingpageContent2Me';
import Footer from '../component/LandingpageFooter';

const Landingpage: FC = () => {
  return (
    <>
      <CssBaseline />
      <header>
        <Heading />
      </header>
      <main>
        <Summary />
        <Content2U />
        <Content2Me />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Landingpage;
