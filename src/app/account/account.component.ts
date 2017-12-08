import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AccountService } from 'app/account.service';
import { LoggingService } from '../logging.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers : [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

   constructor(private loggingservice: LoggingService , private accountService: AccountService) {}

  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    //  this.loggingservice.logToConsole('Account Changed ' + status);
     this.accountService.onStatusChanged(this.id, status);
    // console.log('A server status changed, new status emitted: ' + status);
  }
}
