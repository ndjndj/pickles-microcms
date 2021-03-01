import React from 'react';
import '../styles/button.css';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

export default function Button(props) {
    const link = props.link;
    const sentence = props.sentence;
    return (
        <OutboundLink href={link} className="btn" target="_blank" rel="noopener noreferrer">
            {sentence}
        </OutboundLink>
    );
}
