import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import * as actions from '@app/store-actions/actions';
import * as actionTypes from '@app/store-actions/action-types';

@Injectable()
export class CreateProjectFailEffect {
  @Effect() createProjectFail$: Observable<Action> = this.actions$.pipe(
    ofType(actionTypes.CREATE_PROJECT_FAIL),
    mergeMap((action: actions.CreateProjectFailAction) => {
      return of(new actions.BackendFailAction({ error: action.payload.error }));
    })
  );

  constructor(private actions$: Actions) {}
}
