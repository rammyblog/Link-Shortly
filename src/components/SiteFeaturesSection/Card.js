import React from 'react';

export default function Card({ img, title, content, hr, extraStyles }) {
    return (
        <div>
            <div className={`card ${extraStyles}`}>
                <div className="card-icon">
                    <img src={img} />
                </div>
                <p className="card-title">{title}</p>
                <p>{content}</p>
                {
                    hr ? <hr className='vl' /> : null
                }
            </div>
        </div>
    );
}
