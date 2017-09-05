import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponentModule } from '../../common-component/common-component.module';

import { ClassComponent } from './class.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentModule
  ],
  declarations: [ClassComponent]
})
export class ClassModule { }
