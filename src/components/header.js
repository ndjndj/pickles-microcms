import React from 'react';
import { graphql, Link } from 'gatsby';
import '../styles/header.css';

export default function Header({ data }) {
    const localeInfo = data.allMicrocmsLocale.edges;
    return (
        <header className="header">
            <h1>Pickles</h1>
            <nav>
                <ul id="header-list">
                    <li>
                        <select name="lang">
                            {
                                locale
                            }
                            <option value="en">English</option>
                            <option value="ja">日本語</option>
                        </select>
                    </li>
                    <li>
                        <Link to="/">Install now</Link>
                    </li>
                    <li>
                        <Link to="/">Contact us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export const query = graphql`
query {
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
