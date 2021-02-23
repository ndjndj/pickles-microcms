import React, { useEffect, useState } from 'react';
import { useStaticQuery, Link } from 'gatsby';
import '../styles/header.css';
import { Redirect } from 'react-router';
import { Switch, Route, BrowserRouter as Router, withRouter } from 'react-router-dom';
import Locale from '../pages/locale';
class DropDown extends React.Component {
    onChange = (e) => {
        this.props.history.push(`/${e.target.value}`);
    }

    render() {
        return (
            <select id="locale" name="lang" onChange={this.onChange}>
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

            <Switch>
                <Route path='/ja' render={() => {}}/>
                <Route path='/en' render={() => {}}/>
            </Switch>
        </Router>

    );
}
