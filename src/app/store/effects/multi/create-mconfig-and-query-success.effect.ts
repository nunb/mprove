import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { from, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import * as actions from 'src/app/store/actions/_index';
import * as actionTypes from 'src/app/store/action-types';

@Injectable()
export class CreateMconfigAndQuerySuccessEffect {

  @Effect() createMconfigAndQuerySuccess$: Observable<Action> = this.actions$
    .ofType(actionTypes.CREATE_MCONFIG_AND_QUERY_SUCCESS)
    .pipe(
      mergeMap((action: actions.CreateMconfigAndQuerySuccessAction) => from([
        new actions.UpdateQueriesStateAction(action.payload.queries),
        new actions.UpdateMconfigsStateAction([action.payload.mconfig]),
      ])
      )
    );

  constructor(
    private actions$: Actions) {
  }
}
