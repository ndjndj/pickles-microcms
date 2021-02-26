import React from 'react';
import '../styles/about-pickles.css';
import Button from '../components/button';
import Wrapper from '../components/wrapper';
import LP_1 from '../img/PicklesLP_1.png';

export default function AboutPickles(props) {
    const installLink = "https://chrome.google.com/webstore/detail/pickles/cbbhnfkdiimgbfbmaaamdcdmjmgbgpoa";
    const desc = props.desc;
    return (
        <Wrapper wrapperId="about-pickles" title="About Pickles" >
            <div className="img">
                    <img src={LP_1} alt="about-pickles" />
            </div>

            <div className="description">
                    <p>{desc}</p>
            </div>

            <Button link={installLink} sentence={"Install now"} />
        </Wrapper>
    );
}
