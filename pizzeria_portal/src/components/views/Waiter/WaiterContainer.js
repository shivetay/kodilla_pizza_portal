import { connect } from 'react-redux';
import Waiter from './Waiter';
import {
  getAll,
  fetchFromAPI,
  getLoadingState,
  putToTableStatus,
} from '../../../redux/tablesRedux';

const mapStateToProps = state => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = dispatch => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  postTableStatus: (table, status, order) => dispatch(putToTableStatus(table, status, order)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Waiter);
