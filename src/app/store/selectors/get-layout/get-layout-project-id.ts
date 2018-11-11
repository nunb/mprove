import { createSelector } from '@ngrx/store';
import { getLayoutState } from 'src/app/store/selectors/get-state/get-layout-state';
import * as interfaces from 'src/app/interfaces/_index';

export const getLayoutProjectId = createSelector(
  getLayoutState,
  (state: interfaces.LayoutState) => state.project_id
);
