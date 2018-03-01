import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tiles from './Tiles';
import * as Constants from '../common/constants';
import _ from 'lodash';

export default class SearchResultsPage extends React.Component{

    componentDidMount(){
        this.props.searchMovie(this.props.match.params.query);
    }

    render(){
        const {movies} =this.props;
        console.log(movies);
        return (
            <div> 
                 <div>{_.map(movies.results, (item) => <Link key={item.id} to={{ pathname:`/details/id=${item.id}`, query:item }}>
                    <Tiles url={`${Constants.IMAGE_BASE_URL}${item.poster_path}`}
                        title={item.title}
                        id={item.id}
                    />
                </Link>)}
                </div>
           </div>
        );
    }
}

SearchResultsPage.propTypes={
    match: PropTypes.object,
    movies: PropTypes.object
}
