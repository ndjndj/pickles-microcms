import React from 'react';
import '../styles/flex-wrapper.css';

export default function FlexWrapper(props) {
    const leftComponent = props.leftComponent;
    const rightComponent = props.rightComponent;
    return (
        <div className="flex-wrapper">
            <React.Fragment>
                {leftComponent}
            </React.Fragment>

            <React.Fragment>
                {rightComponent}
            </React.Fragment>
        </div>
    );
}
