import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { UserService } from './user.service';
import { AuthenticationService } from './authentication.service';
import { SessionService } from './session.service';
import { DialogService } from './dialog.service';

import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    NgbModalModule
  ],
  declarations: []
})
export class ServiceModule { 
  static forRoot() : ModuleWithProviders {
    return{
        ngModule : ServiceModule,
        providers: [ 
          UserService,
          AuthenticationService,
          SessionService,
          DialogService
        ]
    }
}
}
