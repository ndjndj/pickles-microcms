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


export default function Locale({ pageContext }) {
  const data = pageContext.post;
  console.log(data);
  return (
    <React.Fragment>
      <Header selectedLocale='ja' />
      <div id="contents">
        <PageIndex />
        <AboutPickles desc={data.AboutPickle.text} />
        <ReleaseNote note={data.ReleaseNote} />
        <HowToInstall bullets={data.HowToInstall[0]} />
        <HowToUnInstall bullets={data.HowToUnInstall[0]} />
        <HowToUse bullets={data.HowToUse} />
        <PrivacyAssurance desc={data.PrivacyAssurance.text} />
        <Disclaimer desc={data.Disclaimer.text} />
      </div>
      <ul>
        <li>{data.AboutPickle.type}</li>
      </ul>
      <Footer />
    </React.Fragment>
  );
}
