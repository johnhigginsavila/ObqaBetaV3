import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CommonComponentModule } from '../../common-component/common-component.module';
import { NgReduxModule } from 'ng2-redux';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
