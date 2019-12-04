import {connect} from 'react-redux';
import Dashboard from './Dashboard';
import {
  getAll,
  fetchFromAPI,
  getLoadingState,
} from '../../../redux/tablesRedux';

import {
  getAllBookings,
  getLoadingBookingState,
  fetchFromBookings,
} from '../../../redux/bookingRedux';

const mapStateToProps = state => ({
  tables: getAll(state),
  booking: getAllBookings(state),
  loading: getLoadingState(state),
  loadingBooking: getLoadingBookingState(state),
});

const mapDispatchToProps = dispatch => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  ftechBooking: () => dispatch(fetchFromBookings()),
});


export default connect (mapStateToProps, mapDispatchToProps)(Dashboard);
