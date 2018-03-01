import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tiles from './Tiles';
import Searchbox from './SearchBox';
import * as Constants from '../common/constants';
import _ from 'lodash';

export default class Home extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            searchText: '',
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.onSearchClicked = this.onSearchClicked.bind(this);
    }

    componentDidMount() {
        this.props.fetchHomeData();
    }

      onValueChange(e) {
        this.setState({
            searchText: e.target.value
        })
    }

    onSearchClicked(e) {
        e.preventDefault();
      console.log("search clicked");
      this.props.history.push(`/searchresults/q=${this.state.searchText}`);
    }

    render() {
        
        console.log(this.props, "this in render");
        const { movies } = this.props;
        return (
            <div>
                <Searchbox searchText={this.state.searchText}
                    onValueChange={this.onValueChange}
                    onSearchClicked={this.onSearchClicked}
                />

                <div style={{marginTop:'50px'}}>{_.map(movies.results, (item) => <Link key={item.id} to={{ pathname:`/details/id=${item.id}`, query: item}}>
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

Home.propTypes = {
    movies: PropTypes.object,
    fetchHomeData: PropTypes.func,
    history: PropTypes.object
};
