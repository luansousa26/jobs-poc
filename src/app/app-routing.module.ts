import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableToogleComponent } from './primeng/table-toogle/table-toogle.component';
import { ConogramTableComponent } from './primeng/conogram-table/conogram-table.component';
import { ParametrosComponent } from './screens/parametros/parametros.component';

const routes: Routes = [
  { path: '', component: TableToogleComponent },
  { path: 'conograma', component: ConogramTableComponent },
  { path: 'parametros', component: ParametrosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
