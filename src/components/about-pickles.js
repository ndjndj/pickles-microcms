import React from 'react';
import '../styles/about-pickles.css';
import Button from '../components/button';
import Wrapper from '../components/wrapper';
import PicklePicture from '../img/Pickle.png';

export default function AboutPickles(props) {
    const installLink = "https://chrome.google.com/webstore/detail/pickles/cbbhnfkdiimgbfbmaaamdcdmjmgbgpoa";
    const desc = props.desc;
    return (
        <Wrapper wrapperId="about-pickles" title="About Pickles" >
            <div className="img">
                    <img src={PicklePicture} alt="about-pickles" />
            </div>

            <div className="description">
                    <p>{desc}</p>
            </div>

            <Button link={installLink} sentence={"Install now"} />
        </Wrapper>
    );
}
