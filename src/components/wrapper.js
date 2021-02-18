import React from 'react';
import '../styles/wrapper.css';

export default function Wrapper(props) {
    const id = props.wrapperId;
    const title = props.title;
    const children = props.children;
    return (
        <div className="wrapper" id={id} >
            <h2><span>{title}</span></h2>

            <div className="content">{children}</div>
        </div>
    );
}
