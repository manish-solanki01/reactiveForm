import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FakeBackendInterceptor } from './shared/services/interceptor/fake-backend.interceptor';

const routes: Routes = [
  { 
    path: '', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  { 
    path: 'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule)
  },
  { 
    path: 'grid', loadChildren: () => import('./grid/grid.module').then(m => m.GridModule)
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
