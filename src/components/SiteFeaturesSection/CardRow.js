import React from 'react';
import Card from './Card';
import BrandLogo from '../../assets/images/icon-brand-recognition.svg';
import DetailedLogo from '../../assets/images/icon-detailed-records.svg';
import FullyCustomLogo from '../../assets/images/icon-fully-customizable.svg';



export default function CardRow() {
    return (
        <>
            <section class="card-section">
                <div class="card-row">
                    <Card img={BrandLogo} title='Brand Recognition' content='Boost your brand recognition with each click. Generic links don’t 
        mean a thing. Branded links help instil confidence in your content.' hr={true} />
                    <Card img={DetailedLogo} title='Detailed Records' content='Gain insights into who is clicking your links. Knowing when and where 
        people engage with your content helps inform better decisions.' hr={true} extraStyles='card-two'  />
                    <Card  img={FullyCustomLogo} title='Fully Customizable' content='Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.' hr={false} extraStyles='card-three'/>
                </div>
            </section>

        </>
    );
};
