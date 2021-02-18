import React from 'react';
import '../styles/about-pickles.css';
import Button from '../components/button';
import Wrapper from '../components/wrapper';
import LP_1 from '../img/PicklesLP_1.png';

export default function AboutPickles() {
    const installLink = "https://chrome.google.com/webstore/detail/pickles/cbbhnfkdiimgbfbmaaamdcdmjmgbgpoa";
    return (
        <Wrapper wrapperId="about-pickles" title="About Pickles" >
            <div className="img">
                    <img src={LP_1} alt="about-pickles" />
            </div>

            <div className="description">
                    <p>Excessively open tabs consume a lot of memory.</p>
                    <p>Use 'Pickles' to pickle that excessively opened tabs.</p>

                    <p>'Pickles' is a simple Google Chrome extension.</p>

                    <p>You can install it from the link below(it will be redirected to Google web store).</p>
            </div>

            <Button link={installLink} sentence={"Install now"} />
        </Wrapper>
    );
}
