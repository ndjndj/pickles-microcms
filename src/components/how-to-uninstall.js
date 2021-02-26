import React from 'react';
import '../styles/how-to-uninstall.css';
import Wrapper from '../components/wrapper';
import BulletWrapper from '../components/bullet-wrapper';
import ImgWrapper from '../components/img-wrapper';
import FlexWrapper from '../components/flex-wrapper';
import LP_2 from '../img/PicklesLP_2.png';

export default function HowToUnInstall(props) {
    const bullets = [
        props.bullets['step1'],
        props.bullets['step2'],
        props.bullets['step3'],
        props.bullets['step4'],
        props.bullets['step5']
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
                        imgSrc = {LP_2}
                        imgAlt = {''}
                        direction = {'right'}
                    />
                }
            />
        </Wrapper>
    );
}
