import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StatusItemComponent } from './status-item.component';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatSelectModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, StatusItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
