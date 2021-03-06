import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '@app/store-actions/actions';
import * as enums from '@app/enums/_index';
import * as interfaces from '@app/interfaces/_index';
import * as services from '@app/services/_index';

@Component({
  moduleId: module.id,
  selector: 'm-mconfig',
  templateUrl: 'mconfig.component.html'
})
export class MconfigComponent {
  constructor(
    private printer: services.PrinterService,
    private store: Store<interfaces.AppState>
  ) {}

  canDeactivate(): boolean {
    // used in component-deactivate-guard
    this.printer.log(
      enums.busEnum.CAN_DEACTIVATE_CHECK,
      'from MconfigComponent'
    );
    this.store.dispatch(new actions.UpdateLayoutMconfigIdAction(undefined));
    return true;
  }
}
