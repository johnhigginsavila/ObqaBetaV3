import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/* Service Module */
import { ServiceModule } from './services/service.module';
/* Pages Modules */
import { HomeModule } from './pages/home/home.module';
import { AdminModule } from './pages/admin/admin.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { ClassModule } from './pages/class/class.module';

/* Guards */
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

import { CommonComponentModule } from './common-component/common-component.module';

import { AppComponent } from './app.component';

import { routerConfig } from './router-config/router.config';

/* Redux */
import { NgRedux, NgReduxModule, DevToolsExtension } from 'ng2-redux';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

import { DialogComponent } from './services/dialog.service';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routerConfig, {useHash: true}),
    ServiceModule.forRoot(),
    HomeModule,
    AdminModule,
    DashboardModule,
    ClassModule,
    CommonComponentModule
  ],
  providers: [
    AuthGuard,
    LoginGuard
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { 
  constructor(ngRedux: NgRedux<IAppState>, devTools:DevToolsExtension){
    const enhancers = isDevMode() ? [devTools.enhancer()] : [];
    ngRedux.configureStore( rootReducer, INITIAL_STATE, [], enhancers );
  }
}
