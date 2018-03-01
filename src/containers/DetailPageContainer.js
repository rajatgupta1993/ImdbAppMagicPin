import { connect } from 'react-redux';
import DetailsPage from '../components/DetailsPage';

const mapStateToProps = (state) => {
    return {
        movies: state.HomeReducer.movies
    }
}
    
export default connect(mapStateToProps)(DetailsPage);
