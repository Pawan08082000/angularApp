// ng generate module schematics --routing --module=schematics
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from  '@angular/router';
import { AddressFormComponent } from './address-form/address-form.component';
import { NavigationComponent } from './navigation/navigation.component';



const routes: Routes = [
  { path: '',
  children:[
    { path: 'navigation', component: NavigationComponent}, 

    { path: 'form', component: AddressFormComponent },
  ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class SchematicsRoutingModule { }
