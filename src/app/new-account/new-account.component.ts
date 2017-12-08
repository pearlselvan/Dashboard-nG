import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from 'app/logging.service';
import { AccountService } from 'app/account.service';



@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

   constructor(private logger: LoggingService ,
    private account: AccountService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    //  this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });

    this.account.onAccountAdded(accountName, accountName);
    // this.logger.logToConsole('New Component ' + accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
