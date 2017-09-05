import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { UserService } from './user.service';
import { AuthenticationService } from './authentication.service';
import { SessionService } from './session.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
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
          SessionService
        ]
    }
}
}
