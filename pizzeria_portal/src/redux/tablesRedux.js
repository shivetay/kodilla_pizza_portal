import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAll = ({tables}) => tables.data;
export const getLoadingState = ({tables}) => tables.loading;
export const getOrderStatus = ({tables}) => tables.status;

/* action name creator */
const reducerName = 'tables';
const createActionName = name => `app/${reducerName}/${name}`;


/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const STATUS_FREE = createActionName('STATUS_FREE');
const STATUS_THINKING = createActionName('STATUS_THINKING');
const STATUS_ORDERED = createActionName('STATUS_ORDERED');
const STATUS_PREPARED = createActionName('STATUS_PREPARED');
const STATUS_PAID = createActionName('STATUS_PAID');
const STATUS_DELIVERED = createActionName('STATUS_DELIVERED');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

export const fetchFree = payload => ({ payload, type: STATUS_FREE });
export const fetchThinking = payload => ({ payload, type: STATUS_THINKING });
export const fetchOrdered = payload => ({ payload, type: STATUS_ORDERED });
export const fetchPrepared = payload => ({ payload, type: STATUS_PREPARED });
export const fetchPaid = payload => ({ payload, type: STATUS_PAID });
export const fetchDelivered = payload => ({ payload, type: STATUS_DELIVERED });


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

export const fetchFromTableStatus = () => {
  return (dispatch) => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/${api.tables.status}`)
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
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
    case STATUS_FREE: {
      return {
        ...statePart,
        status: {
          active: false,
          error: action.payload,
        },
      };
    }
    case STATUS_THINKING: {
      return {
        ...statePart,
        status:{
          active: false,
          error: action.payload,
        },
      };
    }
    case STATUS_ORDERED: {
      return {
        ...statePart,
        status:{
          active: false,
          error: action.payload,
        },
      };
    }
    case STATUS_PREPARED: {
      return {
        ...statePart,
        status:{
          active: false,
          error: action.payload,
        },
      };
    }
    case STATUS_PAID: {
      return {
        ...statePart,
        status:{
          active: false,
          error: action.payload,
        },
      };
    }
    case STATUS_DELIVERED: {
      return {
        ...statePart,
        status:{
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
}