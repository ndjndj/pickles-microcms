import React from 'react';
import '../styles/bullet-wrapper.css';

export default function BulletWrapper(props) {
    const bullets = props.bullets;
    const title = props.title;
    const direction = props.direction;
    const isNum = props.isNum;

    function olul(isNum, bullets){
        return isNum ? <ol>{bullets}</ol> : <ul>{bullets}</ul>
    }

    function writeBullets(bullets) {
        let jsx = [];
        for (var i=0; i<bullets.length; i++) {
            jsx.push(<li key={i}>{bullets[i]}</li>);
        }
        return jsx;
    }

    return (
        <div className={direction + " description"}>
            <h3><span>{title}</span></h3>

            {olul(isNum, writeBullets(bullets))}
        </div>
    );
}
