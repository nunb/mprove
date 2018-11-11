import { createSelector } from '@ngrx/store';
// tslint:disable-next-line:max-line-length
import { getSelectedProjectModeRepoFile } from 'src/app/store/selectors/get-selected-project-mode-repo-file/get-selected-project-mode-repo-file';
import * as api from 'src/app/api/_index';
import { MyRegex } from 'src/app/models/my-regex';

export const getSelectedProjectModeRepoFileIsDashboard = createSelector(
  getSelectedProjectModeRepoFile,
  (selectedFile: api.CatalogFile) => {

    if (selectedFile) {
      let r = MyRegex.CAPTURE_FILE_ID_AND_EXT().exec(selectedFile.name);

      let id;
      let ext;

      if (r) {
        id = r[1];
        ext = r[2];
      }

      return ext === 'dashboard';

    } else {
      return undefined;
    }
  }
);
