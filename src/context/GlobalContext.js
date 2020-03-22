import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';


const initialState = {
    urls: []
};



// Create context

export const GlobalContext = createContext(initialState);


// Provider Context

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions

    const url = async (longUrl) => {


    };
    async function shortenUrl(longUrl) {
        await axios.post('http://127.0.0.1:8000/short/', {
            user_url: longUrl,
        }).then(
            res => {
                console.log(res.data);

                dispatch({
                    type: 'SHORTEN_URL',
                    payload: res.data
                });
            }
        ).catch(err => {
            console.log(err.status);
            
        });



    }

    return (<GlobalContext.Provider value={{
        urls: state.urls,
        shortenUrl
    }}>
        {children}
    </GlobalContext.Provider>);
};
