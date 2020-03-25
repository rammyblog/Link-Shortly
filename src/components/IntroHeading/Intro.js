import React from 'react';
import {IntroHeader} from './IntroStyled'
import working_logo from '../../assets/images/illustration-working.svg';

export default function Intro() {
    return (
        <IntroHeader>
            <section class="intro">
                <div class="intro-text">
                    <h1>More than just shorter links</h1>
                    <h4> Build your brand’s recognition and get detailed insights on how your links are performing.</h4>
                    <button class="btn btn-info">Get Started</button>
                </div>
                <div class="intro-image">
                    <img src={working_logo} alt='Intro-logo' />
                </div>
            </section>
        </IntroHeader>
    );
};
