import React from 'react';
import '../styles/button.css';

export default function Button(props) {
    const link = props.link;
    const sentence = props.sentence;
    return (
        <a href={link} className="btn" target="_blank" rel="noopener noreferrer">
            {sentence}
        </a>
    );
}
