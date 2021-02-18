import React from 'react';
import '../styles/page-index.css';
import Wrapper from '../components/wrapper';
import { Link } from 'gatsby';

export default function PageIndex() {
    const links = {
        '#about-pickles': 'About Pickles',
        '#release-note': 'Release note',
        '#how-to-install': 'How to install',
        '#how-to-uninstall': 'How to uninstall',
        '#how-to-use': 'How to use',
        '#privacy-assurance': 'Privacy assurance',
        '#disclaimer': 'Disclaimer'
    };

    function createIndex(links) {
        let jsx = [];

        for (let key in links) {
            jsx.push(<li key={key}><Link to={key}>{links[key]}</Link></li>);
        }

        return jsx;
    }

    return (
        <Wrapper wrapperId="page-index" title="Index">
            <ol>
                {createIndex(links)}
            </ol>
        </Wrapper>
    );
}
