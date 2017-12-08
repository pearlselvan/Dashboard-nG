import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountService {

  accounts = [
    {
      name: 'Master Account Service ',
      status: 'active'
    },
    {
      name: 'Test Account Muthu',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private loggingservice: LoggingService) {}
  onAccountAdded(name: string, status: string) {
        console.log('Emitted name to app.component :' , name , 'from child ');
        console.log('Emitted status to app.component :' , status , 'from child');
        // this.accounts.push(newAccount);
        this.accounts.push({name: name , status : status});
        this.loggingservice.logToConsole('Name =>  ' + name + ' Status => ' + status)
  }

  onStatusChanged(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
  }


}
