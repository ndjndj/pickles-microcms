import React from 'react';
import Header from '../components/header';
import PageIndex from '../components/page-index';
import AboutPickles from '../components/about-pickles';
import ReleaseNote from '../components/release-note';
import HowToInstall from '../components/how-to-install';
import HowToUnInstall from '../components/how-to-uninstall';
import PrivacyAssurance from '../components/privacy-assurance';
import Disclaimer from '../components/disclaimer';
import HowToUse from '../components/how-to-use';
import Footer from '../components/footer';
import { graphql } from 'gatsby';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <div id="contents">
        <PageIndex />
        <AboutPickles />
        <ReleaseNote />
        <HowToInstall />
        <HowToUnInstall />
        <HowToUse />
        <PrivacyAssurance />
        <Disclaimer />
      </div>
      <Footer />
    </React.Fragment>
  );
}

