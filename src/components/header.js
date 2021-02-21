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
    
    function createSelectOptions(localeInfo) {
        let jsx = [];
        localeInfo.forEach(edge => {
            jsx.push(<option key={edge.node.locale} value={edge.node.locale}>{edge.node.localeInfo}</option>);
        });

        return jsx;
    }

    return (
        <header className="header">
            <h1>Pickles</h1>
            <nav>
                <ul id="header-list">
                    <li>
                        <select name="lang">
                            {createSelectOptions(data.allMicrocmsLocale.edges)}
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
