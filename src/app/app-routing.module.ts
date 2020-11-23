import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectComponent} from "./project/project.component";
import {TemplateValuesComponent} from "./template-values/template-values.component";

const routes: Routes = [
  {path: '', redirectTo: '/project', pathMatch: 'full'},
  { path: 'project', component: ProjectComponent },
  { path: 'template-values', component: TemplateValuesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
