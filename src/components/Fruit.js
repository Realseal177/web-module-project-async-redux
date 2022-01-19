import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const Fruit = () => {
    return (
        <>
            <div>
                <h3>Name of Fruit **interpolate**</h3>
            </div>
            <button>Get New Fruit</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        fruit: state.fruit,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps)(Fruit);
