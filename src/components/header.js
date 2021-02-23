import React, { useEffect, useState } from 'react';
import { useStaticQuery, Link, navigate } from 'gatsby';
import '../styles/header.css';
import { Redirect } from 'react-router';
import { Switch, Route, BrowserRouter as Router, withRouter } from 'react-router-dom';
class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedLocale: 'en'};
    }
    onChange = (e) => {
        this.setState({selectedLocale: e.target.value});
        console.log(this.state.selectedLocale);
        navigate(`/${e.target.value}`, );
    }

    render() {
        return (
            <select id="locale" name="lang" defaultValue={this.state.selectedLocale} onChange={this.onChange}>
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
                <Route path='/ja' />
                <Route path='/en' />
            </Switch>
        </Router>

    );
}
