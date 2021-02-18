import React from 'react';
import '../styles/how-to-use.css';
import Wrapper from '../components/wrapper';
import BulletWrapper from '../components/bullet-wrapper';
import ImgWrapper from '../components/img-wrapper';
import FlexWrapper from '../components/flex-wrapper';
import LP_2 from '../img/PicklesLP_2.png';


export default function HowToUse() {
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
                            'Click to Pickles icon.',
                            'Click to SAVE button.',
                            'Please enter Pickles name.',
                            'Click to SAVE button.',
                            'Pickle will be stored in your browser.'
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
                            'Click to Pickles icon.',
                            'Click to tabs button.',
                            'Click to Pickle to open tabs.',
                            'Click to INFO button to check the Pickle.',
                            'Click to DEL button to delete the Pickle.'
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
                            'Click to DL CSV button to download Pickle with CSV format.',
                            'Click to DL md button to download Pickle with markdown format.',
                            'Click to output md button to copy Pickle with markdown format.'
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
