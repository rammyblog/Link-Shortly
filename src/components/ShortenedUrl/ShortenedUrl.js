import React, { useState, useRef, useEffect } from 'react';
import { ShortenedUrlStyles } from './ShortedUrlStyled';
export default function ShortenedUrl({ urls }) {
    const textAreaRef = useRef(null);
    const [copySuccess, setCopySuccess] = useState('Copy');

    const completeShortUrl = window.location.href + 'l/' + urls.short_url +'/';
    useEffect(() => {
        setInterval(() => {
            setCopySuccess('Copy');
        }, 5000);

    }, []);
    function copyToClipboard(e) {
        textAreaRef.current.select();
        console.log(textAreaRef);
        console.log(textAreaRef.current.select());


        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the the whole text area selected.
        e.target.focus();


        setCopySuccess('Copied!');
    };
    return (
        <ShortenedUrlStyles>
            <div className="urlshort-link-box">
                <div className="long-link-box">
                    <a href={urls.user_url}>{urls.user_url}</a>
                    <hr className='inline-hr' />
                </div>

                <div className="short-link-box">

                    <a href={completeShortUrl}>{completeShortUrl}</a>
                    <textarea
                        ref={textAreaRef}
                        value={completeShortUrl}
                        style={{
                            position: 'absolute',
                            left: '-999em',
                        }}
                        readOnly
                    />
                    {
                        /* Logical shortcut for only displaying the 
                           button if the copy command exists */
                        document.queryCommandSupported('copy') &&

                        <button className={
                            copySuccess === 'Copy' ? 'btn btn-info ' : 'btn btn-info copied'
                        } onClick={copyToClipboard}>{copySuccess}</button>

                    }
                </div>
            </div>
        </ShortenedUrlStyles>
    );
}
