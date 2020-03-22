import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import ShortenedUrl from './ShortenedUrl';
import './ShortenedBoxRow.css';

export default function ShortenedUrlRow() {
    const { urls } = useContext(GlobalContext);
    return (
        <>
            <section className="urlshort-link-box-section">
                {
                    urls.map(url => (<ShortenedUrl urls={url} key={url.id} />))
                }
            </section>
        </>
    );
}
