import React from 'react';
import CardRow from './CardRow';
import BoostLinks from './BoostLinks';
import FeaturesHeader from './SiteFeaturesHeader';
import ShortenedUrlRow from '../ShortenedUrl/shortenedUrlRow' 

import './SiteFeaturesSection.css';
export default function SiteFeatures() {
    return (
        <div className='site-features'>
        <div className='container'>
            <ShortenedUrlRow />
            <FeaturesHeader />
            <CardRow />
        
        </div>

        <BoostLinks />

        </div>
    );
};

