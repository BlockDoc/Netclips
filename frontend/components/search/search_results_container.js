import SearchResults from './search_results';
import { connect } from 'react-redux';
import {
  requestSerie,
  removeSerie } from '../../actions/serie_actions';
import { requestSearchResults } from '../../actions/search_actions';

const mapStateToProps = state => {
  return ({
    seriesIndex: state.search.series,
    currentUser: state.session.currentUser,
    focusedGenreId: state.series.focusedGenreId
  });
};

const mapDispatchToProps = dispatch => ({
  requestSerie: (id, genreId) => dispatch(requestSerie(id, genreId)),
  removeSerie: () => dispatch(removeSerie()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
