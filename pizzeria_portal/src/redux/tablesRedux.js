import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAll = ({tables}) => tables.data;
export const getLoadingState = ({tables}) => tables.loading;
export const postOrderStatus = ({tables}) => tables.status;

/* action name creator */
const reducerName = 'tables';
const createActionName = name => `app/${reducerName}/${name}`;


/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const POST_STATUS = createActionName('POST_STATUS');
const POST_SUCCESS = createActionName('POST_SUCCESS');
const POST_ERROR = createActionName('POST_ERROR');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const postStatus = payload => ({ payload, type: POST_STATUS });
export const postError = payload => ({ payload, type: POST_ERROR });
export const postSuccess = payload => ({ payload, type: POST_SUCCESS });


/* thunk creators */
export const fetchFromAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/${api.tables}`)
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const putToTableStatus = () => {
  return (dispatch, getState) => {
    console.log('klik');
    dispatch(postStatus());

    Axios
      .post(`${api.url}/${api.tables}/id_table`)
      .then(res => {
        dispatch(postSuccess(res.data));
      })
      .catch(err => {
        dispatch(postError(err.message || true));
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
    case POST_SUCCESS : {
      return {
        data: action.payload,
      };
    }

    default:
      return statePart;
  }
}
