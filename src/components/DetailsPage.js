import React from 'react';
import KeyValuePairComponent from './KeyValuePairComponent';
import * as Constants from '../common/constants'
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class DetailsPage extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            data: '',  
        };
    }

    componentWillMount() {
        console.log(this.props);
        var data = this.props.history.location.query;
        this.setState({data});
    }

    render() {
      
        return (
            (!(_.isEmpty(this.state.data)))  && (<div className="left">
                <div className="center">
                    <img src={`${Constants.IMAGE_BASE_URL}${this.state.data.poster_path}`}
                        style={{ width: '500px', height: '400px' }} alt="tile" />
                    <hr />
                    <KeyValuePairComponent key1={"Id :"} value={this.state.data.id} editable={false} />

                    <KeyValuePairComponent key1={"Title :"} value={this.state.data.title} editable={false} />

                    <KeyValuePairComponent key1={"Overview :"} value={this.state.data.overview} editable={false} />

                    <KeyValuePairComponent key1={"Release Date :"} value={this.state.data.release_date} editable={false} />
                
                </div>
 
            </div>)
        );
    }
}


DetailsPage.propTypes = {
   history: PropTypes.object,
};
