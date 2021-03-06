import React from 'react';
import '../styles/how-to-install.css';
import Wrapper from '../components/wrapper';
import BulletWrapper from '../components/bullet-wrapper';
import ImgWrapper from '../components/img-wrapper';
import FlexWrapper from '../components/flex-wrapper';
import howToInstallPic from '../img/how-to-install.png';
import Button from '../components/button';

export default function HowToInstall(props) {
    const bullets = [
        props.bullets['step1'],
        props.bullets['step2'],
        props.bullets['step3'],
        props.bullets['step4'],
    ];
    const installLink = "https://chrome.google.com/webstore/detail/pickles/cbbhnfkdiimgbfbmaaamdcdmjmgbgpoa";
    const title = 'How to Pickle';
    const isNum = true;
    console.log(props.bullets);
    return (
        <Wrapper wrapperId="how-to-install" title="How to install">
            <FlexWrapper
                leftComponent = {
                    <ImgWrapper
                        imgSrc = {howToInstallPic}
                        imgAlt = {''}
                        direction = {'left'}
                    />
                }

                rightComponent = {
                    <BulletWrapper
                        bullets = {bullets}
                        title = {title}
                        direction = {'right'}
                        isNum = {isNum}
                    />
                }
            />
            <Button link={installLink} sentence={"Install now"} />
        </Wrapper>
    );
}
