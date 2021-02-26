import React from 'react';
import '../styles/disclaimer.css';
import Wrapper from '../components/wrapper';
import Sentence from '../components/sentence';

export default function Disclaimer(props) {
    const sentences = [
        props.desc
    ];
    return (
        <Wrapper wrapperId="disclaimer" title="Disclaimer">
            <Sentence sentences={sentences}/>
        </Wrapper>
    );
}
