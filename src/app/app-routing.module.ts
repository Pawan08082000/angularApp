import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    //this is for lazy loading
    path: 'schematics',
    loadChildren: () =>
      import('./schematics/schematics.module').then((m) => m.SchematicsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
