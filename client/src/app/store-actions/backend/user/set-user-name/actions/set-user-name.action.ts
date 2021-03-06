import { Action } from '@ngrx/store';
import * as api from '@app/api/_index';
import * as actionTypes from '@app/store-actions/action-types';

export class SetUserNameAction implements Action {
  readonly type = actionTypes.SET_USER_NAME;

  constructor(public payload: api.SetUserNameRequestBody['payload']) {}
}
