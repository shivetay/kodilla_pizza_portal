import Axios from 'axios';
import {api} from '../settings';

/* selectors */

export const getAllBookings = ({booking}) => booking.data;
export const getLoadingBookingState = ({ booking }) => booking.loading;
export const postOrderStatus = ({ booking }) => booking.status;

/* action creator */
const reducerName = 'booking';
const createActionName = name => `app/${reducerName}/${name}`;

const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');


/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

/* thunk */

export const fetchFromBookings = () => {
  return(dispatch, getState) => {
    dispatch(fetchStarted());

    Axios.get(`${api.url}/${api.booking}`)
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };

    }
    default:
      return statePart;
  }
}
