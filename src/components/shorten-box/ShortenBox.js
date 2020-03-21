import React from 'react';
import {ShortenBoxInput} from './ShortenBoxStyled';
export default function ShortenBox() {
    return (
        <ShortenBoxInput>
            <div className="shorten-box">
                <div className="input-box">
                    <input type="text" placeholder="Shorten a link here" name="" />
                    <button className="btn btn-short btn-info">Shorten it!</button>
                </div>
            </div>
        </ShortenBoxInput>
    );
};
