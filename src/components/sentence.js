import React from 'react';
import '../styles/sentence.css'

export default function Sentence(props) {
    const sentences = props.sentences;

    function writeSentences(sentences) {
        let jsx = [];
        for (var i=0; i < sentences.length; i++) {
            jsx.push(<p key={i}>{sentences[i]}</p>);
        }
        return jsx;
    }

    return (
        <div className="sentence">
            {writeSentences(sentences)}
        </div>
    );
}
