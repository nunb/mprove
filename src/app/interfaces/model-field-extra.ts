import * as api from 'src/app/api/_index';

export interface ModelFieldExtra extends api.ModelField {
  is_selected: boolean;
  is_filtered: boolean;
}
