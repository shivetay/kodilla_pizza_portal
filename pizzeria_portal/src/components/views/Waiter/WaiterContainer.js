import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, getOrderStatus, fetchFromTableStatus } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
  status: getOrderStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  fetchFree: () => dispatch(fetchFromTableStatus()),
  fetchThinking: () => dispatch(fetchFromTableStatus()),
  fetchOrdered: () => dispatch(fetchFromTableStatus()),
  fetchPrepared: () => dispatch(fetchFromTableStatus()),
  fetchPaid: () => dispatch(fetchFromTableStatus()),
  fetchDelivered: () => dispatch(fetchFromTableStatus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);