import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from '../shared/components/alert/alert.component';
import { fileUploadComponent } from '../shared/components/file-upload/file-upload.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'add', component: EditProductComponent },
  { path: 'edit/:id', component: EditProductComponent }
];

@NgModule({
  declarations: [ 
    ProductsComponent, 
    EditProductComponent,
    AlertComponent,
    fileUploadComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NgbModule
  ]
})

export class ProductsModule { }
