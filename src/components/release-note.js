import React from 'react';
import '../styles/release-note.css';
import Wrapper from '../components/wrapper';

export default function ReleaseNote(props) {
    const releaseInfomations = props.note.map(
        (arr) => {
            return {'dt': arr['date'], 'dd': arr['info']}
        }
    );
    
    function createReleaseNotes(releaseInfomations) {
        let jsx = [];

        for (var i=0; i<releaseInfomations.length; i++) {
            jsx.push(
                <React.Fragment key={i}>
                    <dt>{releaseInfomations[i]['dt']}</dt>
                    <dd>{releaseInfomations[i]['dd']}</dd>
                </React.Fragment>
            );
        }

        return jsx;
    }

    return (
        <Wrapper wrapperId="release-note" title="Release Note">
            <div className="scroll-box">
                <dl>
                    {createReleaseNotes(releaseInfomations)}
                </dl>
            </div>
        </Wrapper>
    );
}
