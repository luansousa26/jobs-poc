import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TableToogleComponent } from './primeng/table-toogle/table-toogle.component';
import {TableModule} from 'primeng/table';
import {DataTableModule} from 'primeng/datatable';
import {DialogModule} from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    TableToogleComponent
    ],
  imports: [
    BrowserModule,
    TableModule,
    DataTableModule,
    DialogModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
