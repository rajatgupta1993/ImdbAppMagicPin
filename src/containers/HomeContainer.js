import { connect } from 'react-redux';
import Home from '../components/Home';
import { fetchHomeData } from '../actions/actions';

const mapStateToProps = (state) => {
    return {
        movies: state.HomeReducer.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchHomeData: () => dispatch(fetchHomeData())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
