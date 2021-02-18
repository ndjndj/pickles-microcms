import React from 'react';
import '../styles/how-to-uninstall.css';
import Wrapper from '../components/wrapper';
import BulletWrapper from '../components/bullet-wrapper';
import ImgWrapper from '../components/img-wrapper';
import FlexWrapper from '../components/flex-wrapper';
import LP_2 from '../img/PicklesLP_2.png';

export default function HowToUnInstall() {
    const bullets = [
        'Click to Pickles icon.',
        'Click to tabs button.',
        'Click to Pickle to open tabs.',
        'Click to INFO button to check the Pickle.',
        'Click to DEL button to delete the Pickle.'
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
