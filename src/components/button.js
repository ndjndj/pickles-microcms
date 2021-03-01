import React from 'react';
import '../styles/button.css';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

export default function Button(props) {
    const link = props.link;
    const sentence = props.sentence;
    const _className = props._className ? props._className : '';
    return (
        <OutboundLink href={link} className={`btn ${_className}`} target="_blank" rel="noopener noreferrer">
            {sentence}
        </OutboundLink>
    );
}
