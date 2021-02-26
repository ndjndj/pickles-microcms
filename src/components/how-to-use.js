import React from 'react';
import '../styles/how-to-use.css';
import Wrapper from '../components/wrapper';
import BulletWrapper from '../components/bullet-wrapper';
import ImgWrapper from '../components/img-wrapper';
import FlexWrapper from '../components/flex-wrapper';
import LP_2 from '../img/PicklesLP_2.png';

export default function HowToUse(props) {
    const howToUse = props.bullets[0];
    const howToCheck = props.bullets[1];
    const whatElse = props.bullets[2];
    return (
        <Wrapper wrapperId="how-to-use" title="How to use">
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
                        bullets = {[
                            howToUse['step1'],
                            howToUse['step2'],
                            howToUse['step3'],
                            howToUse['step4'],
                            howToUse['step5']
                        ]}
                        title = {'How to Pickle.'}
                        direction = {'right'}
                        isNum = {true}
                    />
                }
            />

            <FlexWrapper
                leftComponent = {
                    <BulletWrapper
                        bullets = {[
                            howToCheck['step1'],
                            howToCheck['step2'],
                            howToCheck['step3'],
                            howToCheck['step4'],
                            howToCheck['step5']
                        ]}
                        title = {'How to check Pickle.'}
                        direction = {'left'}
                        isNum = {true}
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
                        bullets = {[
                            whatElse['step1'],
                            whatElse['step2'],
                            whatElse['step3']
                        ]}
                        title = {'What else Pickles can do?'}
                        direction = {'right'}
                        isNum = {true}
                    />
                }
            />
        </Wrapper>
    );
}
