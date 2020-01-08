import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { MiddleComponent } from './middle/middle.component';
import { FootComponent } from './foot/foot.component';
import { Middle2Component } from './middle2/middle2.component';


const routes: Routes = [
  {path:'',component:MiddleComponent},
  {path:'middle2',component:Middle2Component}
       
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
