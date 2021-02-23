import React, { useEffect, useState } from 'react';
import { useStaticQuery, Link } from 'gatsby';
import '../styles/header.css';
import { Redirect } from 'react-router';
import { Switch, Route, BrowserRouter as Router, withRouter } from 'react-router-dom';
class DropDown extends React.Component {
    onChange = (e) => {
      this.props.history.push(`/${e.target.value}`);
    }
    render() {
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
          <select id="locale" name="lang" onChange={() =>{this.onChange()}}>
              {createSelectOptions(data.allMicrocmsLocale.edges)}
          </select>
      );
    }
  }

  const Menu = withRouter(DropDown);

  export default Menu;
