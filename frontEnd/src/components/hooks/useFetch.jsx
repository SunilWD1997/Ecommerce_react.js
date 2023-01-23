import { useState, useEffect } from 'react'
import requestApi from '../../requestApi';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {

        const fetchApi = async () => {
            try {
                setLoading(true);
                const res = await requestApi.get(url);
                setData(res.data.data);

            } catch (error) {
                console.log(error);
                setError(true);
            }
            setLoading(false);
        }

        fetchApi();
    }, [url]);


    return (
        { data, loading, error }
    )
}

export default useFetch;




