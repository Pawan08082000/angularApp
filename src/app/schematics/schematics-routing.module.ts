// ng generate module schematics --routing --module=schematics
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressFormComponent } from './address-form/address-form.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreeComponent } from './tree/tree.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'navigation', component: NavigationComponent },

      { path: 'form', component: AddressFormComponent },
      { path: 'table', component: TableComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'tree', component: TreeComponent },
      { path: 'dragdrop', component: DragDropComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchematicsRoutingModule {}
