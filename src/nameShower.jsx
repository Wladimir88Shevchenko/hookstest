import React, { useState, useEffect, useCallback, useMemo } from 'react';

const getName = (id) => {
    return fetch(`https://swapi.dev/api/people/${id}/`)
        .then(response => response.json())
        .then(data => data)
}

const useRequest = (request) => {

    // VAD VARIANT
    /* const initialState = {
        data: null,
        loading: true,
        error: false,
    } */

    const initialState = useMemo(() => ({
        data: null,
        loading: true,
        error: false,
    }), [])

    const [perfectData, setPerfectData] = useState(initialState);

    useEffect(() => {
        setPerfectData(initialState);

        let examination = false;
        request()
            .then(data => !examination && setPerfectData({
                data,
                loading: false,
                error: false,
            }))
            .catch(error => !examination && setPerfectData({
                data: null,
                loading: false,
                error
            }))
        return () => examination = true;
    }, [request, initialState]);

    return (perfectData);
}


const useName = (id) => {
    const request = useCallback(() => getName(id), [id]);
    // VAD VARIANT
    // const request = () => getName(id);
    return (useRequest(request));
}

const NameShower = ({ id }) => {

    const {data, loading, error} = useName(id);

    if(error){
        return(
            <div>
                something is wrong
            </div>
        )
    }

    if(loading){
        return(
            <div>
                loading...
            </div>
        )
    }

    return (
        <div>
            {id} - {data.name}
        </div>
    );
}

export default NameShower;