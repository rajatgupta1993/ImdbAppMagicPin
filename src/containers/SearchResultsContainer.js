import { connect } from 'react-redux';
import SearchResultsPage from '../components/SearchResultsPage';
import {searchMovie} from '../actions/actions';


const mapStateToProps = (state) => {
    return {
        movies: state.SearchReducer.searchResults
    }
}

const mapDispatchToProps = (dispatch) => {
return{
    searchMovie : (data) => dispatch(searchMovie(data))
}

}
    
export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPage);
