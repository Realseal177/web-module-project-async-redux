import axios from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBrewery } from '../actions/actions';

const Brewery = ({brew, dispatch}) => {

    useEffect(() => {
        dispatch(getBrewery());
        console.log('current state of brew', brew);
    }, [])

    console.log('from Brewery.js, looking for brew', brew);

    return (
        <>
            <div>
                <h1>Name: {brew.name}</h1>
                <h3>Type: {brew.brewery_type}</h3>
                <p>City: {brew.city}</p>
                <p>State: {brew.state}</p>
                <p>{brew.website_url}</p>
            </div>
            <button>Get A New Brewery</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        brew: state.brew,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps)(Brewery);
