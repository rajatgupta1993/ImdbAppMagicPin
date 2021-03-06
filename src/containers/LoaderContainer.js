import React from 'react';
import { connect } from 'react-redux';
import LoaderComponent from "../components/LoaderComponent";

const mapStateToProps = (store) => {
    return {
        isLoading: store.HomeReducer.isLoading,
    };
};

const LoaderContainer = connect(mapStateToProps)(LoaderComponent);

export default LoaderContainer;
