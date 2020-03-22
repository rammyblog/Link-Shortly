import React from 'react';
import { ShortenedUrlStyles } from './ShortedUrlStyled';
export default function ShortenedUrl({urls}) {
    return (
        <ShortenedUrlStyles>
            <div className="urlshort-link-box">
                <div className="long-link-box">
                    <a href={urls.user_url}>{urls.user_url}</a>
                </div>
                <hr></hr>
                <div className="short-link-box">

                    <a href={urls.short_url}>{window.location.href}{urls.short_url}</a>
                    <button className="btn btn-info">Copy</button>

                </div>
            </div>
        </ShortenedUrlStyles>
    );
}
