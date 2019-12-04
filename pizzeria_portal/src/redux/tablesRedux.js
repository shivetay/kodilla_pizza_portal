import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAll = ({ tables }) => tables.data;
export const getLoadingState = ({ tables }) => tables.loading;
export const postOrderStatus = ({ tables }) => tables.status;

/* action name creator */
const reducerName = 'tables';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const POST_STATUS = createActionName('POST_STATUS');


/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const postStatus = payload => ({ payload, type: POST_STATUS });


/* thunk creators */
export const fetchFromAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios.get(`${api.url}/${api.tables}`)
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const putToTableStatus = (tableId, newStatus, newOrder) => {
  return (dispatch, getState) => {
    Axios.patch(`${api.url}/${api.tables}/${tableId}`, {status: newStatus, order: newOrder})
      .then(res => {
        dispatch(postStatus(res.data));
      });
  };
};

/* reducer */
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
    case POST_STATUS: {
      return{
        ...statePart,
        data: [
          //return olda state
          ...statePart.data.filter((table) => table.id !== action.payload.id),
          action.payload,
        ],
      };
      // const editedIndex = statePart.data.findIndex((table) => table.id === action.payload.id);
      // return {
      //   ...statePart,
      //   data: [
      //     ...statePart.data.slice(0, editedIndex - 1),
      //     action.payload,
      //     ...statePart.data.slice(editedIndex),
      //   ],
      // };
    }

    default:
      return statePart;
  }
}
