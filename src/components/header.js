import React, { useEffect, useState } from 'react';
import { useStaticQuery, Link } from 'gatsby';
import '../styles/header.css';

export default function Header() {
    const [locale, setLocale] = useState('');
    useEffect(() => console.log(locale));
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

    function onSelectChange() {

        setLocale(document.getElementById('locale').value);

        
    }

    function createSelectOptions(localeInfo) {
        let jsx = [];
        localeInfo.forEach(edge => {
            jsx.push(
                <option key={edge.node.locale} value={edge.node.locale} >
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
                        <select id="locale" name="lang" defaultValue={locale} onChange={() =>{onSelectChange()}}>
                            {createSelectOptions(data.allMicrocmsLocale.edges)}
                        </select>
                        <a id="translate" >translate</a>
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
