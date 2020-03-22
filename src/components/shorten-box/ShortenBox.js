import React, {useContext, useState} from 'react';
import {ShortenBoxInput} from './ShortenBoxStyled';
import { GlobalContext } from '../../context/GlobalContext';

export default function ShortenBox() {
    const [LongUrl, setLongUrl] = useState('')
    const {shortenUrl} = useContext(GlobalContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        shortenUrl(LongUrl)
    }

    return (
        <ShortenBoxInput>
            <div className="shorten-box">
                <form onSubmit={handleSubmit}>
                <div className="input-box">
                    <input type="text" required value={LongUrl} onChange = {(e) => setLongUrl(e.target.value)} placeholder="Shorten a link here" />
                    <button className="btn btn-short btn-info">Shorten it!</button>
                </div>
                </form>
            </div>
        </ShortenBoxInput>
    );
};
