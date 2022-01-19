import axios from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBrewery } from '../actions/actions';

const Brewery = ({brew, dispatch}) => {

    useEffect(() => {
        dispatch(getBrewery());
        console.log('current state of brew', brew);
    }, [])

    console.log('From Brewery.js, looking for brew', brew);

    return (
        <>

            {
                brew.map(b => {
                    return (
                        <div className='card'>
                            <div className='card-content'>
                                <h1>{b.name}</h1>
                                <h3>Type: {b.brewery_type}</h3>
                                <p>City: {b.city}</p>
                                <p>State: {b.state}</p>

                                <a href={b.website_url}>
                                    <p>{b.website_url}</p>
                                </a>
                            </div>
                        </div>
                    )
                })
            }
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
