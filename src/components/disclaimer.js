import React from 'react';
import '../styles/disclaimer.css';
import Wrapper from '../components/wrapper';
import Sentence from '../components/sentence';

export default function Disclaimer() {
    const sentences = [
        "Please note that we cannot be held responsible for any damage caused by the use of this extension.",
        "Use of Pickles must be done at your own risk."
    ];
    return (
        <Wrapper wrapperId="disclaimer" title="Disclaimer">
            <Sentence sentences={sentences}/>
        </Wrapper>
    );
}
