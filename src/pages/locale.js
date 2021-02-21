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
import { graphql, Link } from 'gatsby';

export default function Locale({ pageContext }) {
  const data = pageContext.post;
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
      <ul>
        <li>{data.AboutPickle.step1}</li>
        <li>{data.AboutPickle.step2}</li>
        <li>{data.AboutPickle.step3}</li>
        <li>{data.AboutPickle.step4}</li>
        <li>{data.AboutPickle.step5}</li>
        <li>{data.AboutPickle.type}</li>
      </ul>
      <Footer />
    </React.Fragment>
  );
}
