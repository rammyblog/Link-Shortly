import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';


const initialState = {
    urls: [],
    error: false
};



// Create context

export const GlobalContext = createContext(initialState);


// Provider Context

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    async function shortenUrl(longUrl) {
        await axios.post('https://linkshortly.herokuapp.com/api/short/', {
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
            err.response.status != '201' ?   
            dispatch({
                type: 'ERROR_URL',
                payload: err.response.status
            }) : console.log('Creates')           
        });



    }

    return (<GlobalContext.Provider value={{
       ...state,
        shortenUrl
    }}>
        {children}
    </GlobalContext.Provider>);
};
