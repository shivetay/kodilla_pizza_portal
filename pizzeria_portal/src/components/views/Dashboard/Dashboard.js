import React from 'react';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';

import styles from './Dashboard.scss';

// const demoBooking = [
//   { id: '1', status: 'pending', type: 'booking', order: 786531 },
//   { id: '2', status: 'paid', type: 'event', order: 52478 },
//   { id: '3', status: 'paid', type: 'booking', order: 78541 },
//   { id: '4', status: 'paid', type: 'booking', order: 45217 },
//   { id: '5', status: 'pending', type: 'event', order: 412785 },
//   { id: '6', status: 'paid', type: 'event', order: 124578 },
// ];

class Dashboard extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    ftechBooking: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOf(PropTypes.bool,PropTypes.string),
    }),
    loadingBooking: PropTypes.shape({
      act: PropTypes.bool,
      err: PropTypes.oneOf(PropTypes.bool,PropTypes.string),
    }),
    tables: PropTypes.any,
    booking: PropTypes.any,
  };

  componentDidMount(){
    const { fetchTables, ftechBooking } = this.props;
    fetchTables();
    ftechBooking();
  }
  render(){
    console.log('props', this.props);
    const { loading: { active, error }, tables, loadingBooking: {act, err}, booking } = this.props;

    if(active || !tables.length || act || !booking.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else if(err) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{err}</pre>
        </Paper>
      );
    } else {
      return (
        <div className={styles.component}>
          <h2>Main Dashboard</h2>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align='center' colSpan={4}>
                    Order Statistic
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Table</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Order Number</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tables.map(row => (
                  <TableRow key={row.id}>
                    <TableCell scope='row'>{row.id}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>
                      {row.order && (
                        <Button component={Link} to={`/ordering/order/${row.order}`}>
                          {row.order}
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          <Toolbar />
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align='center' colSpan={4}>
                    Events and Bookings
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Table</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Number</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {booking.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component='th' scope='row'>
                      {row.id}
                    </TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>{row.type}</TableCell>
                    <TableCell>
                      {row.order && (
                        <Button
                          to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}
                        >
                          {row.order}
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
      ) ;
    }
  }
}


export default Dashboard;
