import React from 'react';
import { useStaticQuery, Link, navigate, graphql } from 'gatsby';
import '../styles/header.css';
import Button from '../components/button';
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
    const installLink = "https://chrome.google.com/webstore/detail/pickles/cbbhnfkdiimgbfbmaaamdcdmjmgbgpoa";
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
        <React.Fragment>
            <header className="header">
                <h1>Pickles</h1>
                <nav>
                    <ul id="header-list">
                        <li>
                            <DropDown locales={createSelectOptions(data.allMicrocmsLocale.edges)} />
                        </li>
                        <li>
                            <Button link={installLink} sentence={"Install now"} />
                        </li>
                    </ul>
                </nav>
            </header>
        </React.Fragment>
    );
}
