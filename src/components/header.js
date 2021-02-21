import React from 'react';
import { useStaticQuery, Link } from 'gatsby';
import '../styles/header.css';

export default function Header() {
    const data = useStaticQuery(
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
    const localeInfo = data.allMicrocmsLocale.edges;

    function createSelectOptions(localeInfo) {
        let jsx = [];
        localeInfo.forEach(edge => {
            jsx.push(<option value={edge.node.locale}>{edge.node.localeInfo}</option>);
        });
    }

    return (
        <header className="header">
            <h1>Pickles</h1>
            <nav>
                <ul id="header-list">
                    <li>
                        <select name="lang">
                            {createSelectOptions(localeInfo)}
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
