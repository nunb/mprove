import { Action } from '@ngrx/store';
import * as actionTypes from 'src/app/store/action-types';

export class ConfirmFailAction implements Action {
  readonly type = actionTypes.CONFIRM_FAIL;

  constructor(public payload: { error: any }) {
  }
}
