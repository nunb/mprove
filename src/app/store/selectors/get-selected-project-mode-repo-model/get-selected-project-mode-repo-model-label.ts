// tslint:disable:max-line-length
import { createSelector } from '@ngrx/store';
import { getSelectedProjectModeRepoModel } from 'src/app/store/selectors/get-selected-project-mode-repo-model/get-selected-project-mode-repo-model';
import * as api from 'src/app/api/_index';

export const getSelectedProjectModeRepoModelLabel = createSelector(
  getSelectedProjectModeRepoModel,
  (model: api.Model) => model ? model.label : undefined
);
