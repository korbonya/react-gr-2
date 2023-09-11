import {useState, useEffect} from 'react';

export default function useFetch(url, skip=false) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
       if(!skip){
        async function init() {
            try {
                const response = await fetch(url);
                if(response.ok) {
                    const json = await response.json();
                    setData(json);
                } else {
                    throw response;
                }
            } catch (e) {
                setError(e);
                setLoading(false);
            } finally {
                setLoading(false);
            }
        }
        init(); 
       }
    }, [url] )
    
    return !skip ? {data, loading, error}: {};
    
    }