import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Service Module */
import { ServiceModule } from './services/service.module';
/* Pages Modules */
import { HomeModule } from './pages/home/home.module';
import { ClassModule } from './pages/class/class.module';

import { CommonComponentModule } from './common-component/common-component.module';

import { AppComponent } from './app.component';

import { routerConfig } from './router-config/router.config';

/* Redux */
import { NgRedux, NgReduxModule, DevToolsExtension } from 'ng2-redux';
import { IAppState, rootReducer, INITIAL_STATE } from './store';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    RouterModule.forRoot(routerConfig, {useHash: true}),
    ServiceModule.forRoot(),
    HomeModule,
    ClassModule,
    CommonComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux: NgRedux<IAppState>, devTools:DevToolsExtension){
    const enhancers = isDevMode() ? [devTools.enhancer()] : [];
    ngRedux.configureStore( rootReducer, INITIAL_STATE, [], enhancers );
  }
}
