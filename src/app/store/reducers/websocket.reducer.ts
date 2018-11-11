import * as actionTypes from 'src/app/store/action-types';
import * as interfaces from 'src/app/interfaces/_index';
import * as types from 'src/app/types/_index';

const initialState: interfaces.WebSocketState = {
  init_id: 'empty',
  is_open: false,
};

export function webSocketReducer(state = initialState, action: types.WebSocketActions): interfaces.WebSocketState {

  switch (action.type) {

    case actionTypes.UPDATE_WEBSOCKET_INIT_ID: {

      return Object.assign({}, state, { init_id: action.payload });
    }

    case actionTypes.RESET_WEBSOCKET_STATE: {
      return Object.assign({}, initialState);
    }

    case actionTypes.OPEN_WEBSOCKET_SUCCESS: {
      return Object.assign({}, state, { is_open: true });
    }

    case actionTypes.CLOSE_WEBSOCKET_SUCCESS: {
      return Object.assign({}, state, { is_open: false });
    }

    default: {
      return state;
    }

  }
}
