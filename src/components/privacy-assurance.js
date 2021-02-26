import React from 'react';
import '../styles/privacy-assurance.css';
import Wrapper from '../components/wrapper';
import Sentence from '../components/sentence';

export default function PrivacyAssurance(props) {
    const sentences = [
       props.desc
    ];
    return (
        <Wrapper wrapperId="privacy-assurance" title="Privacy assurance">
            <Sentence sentences={sentences} />
        </Wrapper>
    );
}
