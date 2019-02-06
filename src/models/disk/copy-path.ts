import * as fse from 'fs-extra';
import { enums } from '../../barrels/enums';
import { helper } from '../../barrels/helper';

export async function copyPath(item: {
  source_path: string;
  destination_path: string;
}) {
  await fse
    .copy(item.source_path, item.destination_path)
    .catch(e => helper.reThrow(e, enums.fseErrorsEnum.FSE_MOVE));
}
