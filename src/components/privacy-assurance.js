import React from 'react';
import '../styles/privacy-assurance.css';
import Wrapper from '../components/wrapper';
import Sentence from '../components/sentence';

export default function PrivacyAssurance() {
    const sentences = [
        'We, Pickles developers take the privacy of Pickles users very seriously.',
        'Stored tab information in your browser will not be sent or disclosed to Pickles developers or any other third party.',
    ];
    return (
        <Wrapper wrapperId="privacy-assurance" title="Privacy assurance">
            <Sentence sentences={sentences} />
        </Wrapper>
    );
}
