import { NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdIconModule, 
    MdInputModule, MdGridListModule, MdProgressSpinnerModule, MdCardModule,
    MdMenuModule
} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule, 
    MdCheckboxModule, 
    MdToolbarModule, 
    MdIconModule, 
    MdInputModule, 
    MdGridListModule, 
    MdProgressSpinnerModule, 
    MdCardModule,
    MdMenuModule],
  exports: [
    MdButtonModule, 
    MdCheckboxModule, 
    MdToolbarModule, 
    MdIconModule, 
    MdInputModule, 
    MdGridListModule, 
    MdProgressSpinnerModule, 
    MdCardModule,
    MdMenuModule],
})
export class MaterialModule { }