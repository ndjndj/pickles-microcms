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

export default function Home({ data }) {

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

export const query = graphql`
query {
  allMicrocmsPickleApi {
    edges {
      node {
        AboutPickle {
          step1
          step2
          step3
          step4
          step5
          type
        }
        Disclaimer {
          text
          type
        }
        HowToInstall {
          step1
          step2
          step3
          step4
          step5
          type
        }
        HowToUnInstall {
          step1
          step2
          step3
          step4
          step5
          type
        }
        HowToUse {
          step1
          step2
          step3
          step4
          step5
          type
        }
        PrivacyAssurance {
          text
          type
        }
        ReleaseNote {
          date(formatString: "YYYY/MM/DD")
          info
          type
        }
        locale
        type
      }
    }
  }
  allMicrocmsLocale {
    edges {
      node {
        locale
        localeId
        localeInfo
        id
      }
    }
  }
}
`;
