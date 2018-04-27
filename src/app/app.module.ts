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
import { ConogramTableComponent } from './primeng/conogram-table/conogram-table.component';
import { ParametrosComponent } from './screens/parametros/parametros.component';
import { AppRoutingModule } from './app-routing.module';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { PAutoCompleteComponent } from './p-autocomplete/p-autocomplete.component';
;
@NgModule({
  declarations: [
    AppComponent,
    TableToogleComponent,
    ConogramTableComponent,
    ParametrosComponent,
    PAutoCompleteComponent
    ],
  imports: [
    BrowserModule,
    TableModule,
    DataTableModule,
    DialogModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    AppRoutingModule,
    AutoCompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
