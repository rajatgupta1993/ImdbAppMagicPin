import React from 'react';
import PropTypes from 'prop-types';

const KeyValuePairComponent = ({key1, onChange, value}) => {

    return (
        <div className="marginBottom">
            <div className="keyValueContainer">
                <div className="key"> {key1}</div>
                    <div className="value"> {value}</div>
            </div>
        </div>
    );
};

KeyValuePairComponent.propTypes = {
    key1: PropTypes.string,
    onChange: PropTypes.func,
    value:  PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])
};


export default KeyValuePairComponent;
