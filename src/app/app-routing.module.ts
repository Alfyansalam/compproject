import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductGetComponent } from './product-get/product-get.component';

const routes: Routes = [
  {path: '', redirectTo: 'product-edit', pathMatch: 'full'},
  {path:'product-add',component:ProductAddComponent },
  {path:'product-edit',component:ProductEditComponent},
  {path:'product-get',component:ProductGetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
