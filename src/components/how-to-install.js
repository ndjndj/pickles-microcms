import React from 'react';
import '../styles/how-to-install.css';
import Wrapper from '../components/wrapper';
import BulletWrapper from '../components/bullet-wrapper';
import ImgWrapper from '../components/img-wrapper';
import FlexWrapper from '../components/flex-wrapper';
import LP_2 from '../img/PicklesLP_2.png';

export default function HowToInstall() {
    const bullets = [
        'Click to Pickles icon.',
        'Click to SAVE button.',
        'Please enter Pickles name.',
        'Click to SAVE button.',
        'Pickle will be stored in your browser.'
    ];
    const title = 'How to Pickle';
    const isNum = true;

    return (
        <Wrapper wrapperId="how-to-install" title="How to install">
            <FlexWrapper
                leftComponent = {
                    <ImgWrapper
                        imgSrc = {LP_2}
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
        </Wrapper>
    );
}
