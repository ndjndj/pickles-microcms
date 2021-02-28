import React from 'react';
import { useStaticQuery, Link, navigate, graphql } from 'gatsby';
import '../styles/header.css';
import { withRouter } from 'react-router-dom';
import { Router } from '@reach/router';
import Locale from '../pages/locale';
class DropDown extends React.Component {
    constructor(props) {
        super(props);
        const defaultLocale = this.props.selectedLocale ? this.props.selectedLocale : 'en';
        this.state = {selectedLocale: defaultLocale};
    }

    onChange = (e) => {
        let target = String(e.target.value);
        this.setState(
              {selectedLocale: target}
            , () => {navigate(`/${target}`, {selectedLocale: target})}
        );
    }

    render() {
        return (
            <select id="locale" name="lang" value={this.state.selectedLocale} onChange={this.onChange}>
                {this.props.locales}
            </select>
        );
    }
}

const Menu = withRouter(DropDown);

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

    const createSelectOptions = (localeInfo) => {
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
        <Router>
            <header className="header">
                <h1>Pickles</h1>
                <nav>
                    <ul id="header-list">
                        <li>
                            <Menu locales={createSelectOptions(data.allMicrocmsLocale.edges)} />
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

            <Router basepath='/'>
                <Locale path='/ja' />
                <Locale path='/en' />
            </Router>
        </Router>

    );
}
