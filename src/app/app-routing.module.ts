import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WHOAREWE1Component } from './whoarewe1/whoarewe1.component';
import { WHOAREWE2Component } from './whoarewe2/whoarewe2.component';
const routes: Routes = [
  {path : "WHOAREWE1", component : WHOAREWE1Component },
  {path : "WHOAREWE2", component : WHOAREWE2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
