import React, { useState } from 'react';
import { useStaticQuery, Link } from 'gatsby';
import { Redirect } from 'react-router-dom';
import '../styles/header.css';

export default function Header(props) {
    const [locale, setLocale] = useState('en');
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
    function onSelectChange(locale) {
        locale = setLocale(locale);
        return <Redirect to={`/${locale}`}/>
    }
    function createSelectOptions(localeInfo) {
        let jsx = [];
        localeInfo.forEach(edge => {
            jsx.push(
                <option key={edge.node.locale} value={locale} >
                        {edge.node.localeInfo}
                </option>);
        });

        return jsx;
    }

    return (
        <header className="header">
            <h1>Pickles</h1>
            <nav>
                <ul id="header-list">
                    <li>
                        <select name="lang" defaultValue="en" onChange={() =>{onSelectChange(locale)}}>
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
