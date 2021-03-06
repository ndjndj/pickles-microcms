import React from 'react';
import '../styles/how-to-uninstall.css';
import Wrapper from '../components/wrapper';
import BulletWrapper from '../components/bullet-wrapper';
import ImgWrapper from '../components/img-wrapper';
import FlexWrapper from '../components/flex-wrapper';
import howToUninstallPic from '../img/how-to-uninstall.png';

export default function HowToUnInstall(props) {
    const bullets = [
        props.bullets['step1'],
        props.bullets['step2'],
        props.bullets['step3'],
        props.bullets['step4'],
    ];
    const title = 'How to Pickle.';
    const isNum = true;

    return (
        <Wrapper wrapperId="how-to-uninstall" title="How to uninstall">
            <FlexWrapper
                leftComponent = {
                    <BulletWrapper
                        bullets = {bullets}
                        title = {title}
                        direction = {'left'}
                        isNum = {isNum}
                    />
                }

                rightComponent = {
                    <ImgWrapper
                        imgSrc = {howToUninstallPic}
                        imgAlt = {''}
                        direction = {'right'}
                    />
                }
            />
        </Wrapper>
    );
}
