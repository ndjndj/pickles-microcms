import React from 'react';
import { useStaticQuery, Link } from 'gatsby';
import '../styles/header.css';

export default function Header() {
    const localeInfo = useStaticQuery(
        graphql`
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
        `
    );
    return (
        <header className="header">
            <h1>Pickles</h1>
            <nav>
                <ul id="header-list">
                    <li>
                        <select name="lang">
                            {
                                localeInfo.forEach(
                                    lang => {
                                        <option value={lang.node.locale}>{lang.node.localeInfo}</option>
                                    }
                                )
                            }
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
